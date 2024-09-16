import Image from 'next/image';
import classes from './hero.module.css';

function Hero() {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image 
                    src='/images/site/khouloud.jpeg'
                    alt='An image showing khouloud'
                    width={300}
                    height={300}
                />
            </div>
            <h1> Hi, I'm Khouloud! </h1>
            <p> 
                I blog about web developement - both backend technologies like
                SAP Hybris & Java and frontend frameworks like React and NextJs.
            </p>
        </section>
    );
}

export default Hero;