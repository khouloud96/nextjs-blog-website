import { Fragment } from "react";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";

const DUMMY_POSTS = [
    {
        slug: 'getting-started-with-nextjs',
        title: 'Getting Started with NextJS',
        image: 'getting-started-nextjs.png', 
        excerpt: 'NextJS is the React framework for production - it makes building fullstack React apps',
        date: '2022-02-10',
    },
    {
        slug: 'getting-started-with-nextjs1',
        title: 'Getting Started with NextJS',
        image: 'getting-started-nextjs.png', 
        excerpt: 'NextJS is the React framework for production - it makes building fullstack React apps',
        date: '2022-02-10',
    },
    {
        slug: 'getting-started-with-nextjs2',
        title: 'Getting Started with NextJS',
        image: 'getting-started-nextjs.png', 
        excerpt: 'NextJS is the React framework for production - it makes building fullstack React apps',
        date: '2022-02-10',
    },
    {
        slug: 'getting-started-with-nextjs3',
        title: 'Getting Started with NextJS',
        image: 'getting-started-nextjs.png', 
        excerpt: 'NextJS is the React framework for production - it makes building fullstack React apps',
        date: '2022-02-10',
    },
];

function HomePage() {
    return (
        <Fragment>
            <Hero></Hero>
            <FeaturedPosts posts={DUMMY_POSTS} />
        </Fragment>
    );
}

export default HomePage;