import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'posts');

function getPostData(fileName) {
    const filePath = path.join(postsDirectory, fileName);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const {data, content} = matter(fileContent); // returns 2 property data as metadata and content

    const postSlug = fileName.replace(/\.md$/,''); //removes the file extension
    const postData = {
        slug: postSlug,
        ...data,
        content,
    };

    return postData;
}

// this function reads all posts in posts folder and then gets all the data
// for those posts and sorts them and returns them
export function getAllPosts() {
    const postFiles = fs.readdirSync(postsDirectory);

    const allPosts = postFiles.map(postFile => {
        return getPostData(postFile);
    }); 

    const sortedPosts = allPosts.sort((postA, postB) => postA.date > postB.date ? -1 : 1);

    return sortedPosts;
}

//get all the featured posts
export function getFeaturedPosts() {
    const allPosts = getAllPosts();

    const featuredPosts = allPosts.filter(post => post.isFeatured);

    return featuredPosts;
} 