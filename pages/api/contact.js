import { MongoClient } from 'mongodb';

async function handler(req, res) {
    if(req.method === 'POST') {
        const { email, name, message } = req.body;

        // validate form inputs on server-side
        if (
            !email ||
            !email.includes('@') || 
            !name ||
            name.trim() === '' ||
            !message ||
            message.trim() === ''
        ) {
            res.status(422).json({message: 'Invalid input.'});
            return;
        }

        //store data in database
        const newMessage = {
            email,
            name,
            message
        };

        let client;
        const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.zhbg3.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

        console.log(connectionString);
        try{
        client = await MongoClient.connect(connectionString);
        } catch(error) {
            res.status(500).json({message: 'Could not connect to Database'});
            return;
        }
        const db = client.db();

        try{
            const result = await db.collection('messages').insertOne(newMessage);
            newMessage.id = result.insertedId;
        } catch(error) {
            client.close();
            res.status(500).json({message: 'Failed to store message'});
            return;
        }

        client.close();
        res.status(201).json({message: 'Success stored message!', message: newMessage});

    }
}

export default handler;