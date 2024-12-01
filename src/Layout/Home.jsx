import Banner from "../components/Banner/Banner";
import { Helmet} from 'react-helmet-async';
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ExploreButton from "../components/ElploreButton/ExploreButton";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { GadgetContext } from "../Context/Context";


const Home = () => {
   

    return (
        <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>

            <Helmet>
                <title>Gadget Heaven | Home</title>

            </Helmet>

            <Banner></Banner>
            <h2 className="mt-60 text-center text-2xl font-bold mb-10">Explore our Products</h2>
            <section className="md:flex gap-10 ">
                <ExploreButton></ExploreButton>
                <Outlet></Outlet>
            </section>
            <Footer></Footer>

        </div>
    );
};

export default Home;