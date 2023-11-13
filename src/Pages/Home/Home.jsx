// import Banner from "./Banner/Banner";

import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import CallUs from "./CallUs/CallUs";
import Category from "./Category/Category";
import ChefService from "./ChefService/ChefService";
import FeaturedItem from "./FeaturedItem/FeaturedItem";
import PopularMenu from "./PopularMenu/PopularMenu";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
    return (

        <div className="space-y-24">
            <Helmet>
                <title>Boss Restaurant | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <ChefService></ChefService>
            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
            <FeaturedItem></FeaturedItem>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;