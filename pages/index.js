import { Fragment } from "react";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";

function HomePage() {
    return (
        <Fragment>
            <Hero></Hero>
            <FeaturedPosts></FeaturedPosts>
        </Fragment>
    );
}

export default HomePage;