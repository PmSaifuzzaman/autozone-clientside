import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Navbar from "../../components/Navbar/Navbar";
import BrandCard from "../../components/BrandCard/BrandCard";
import Dealership from "../../components/Dealership/Dealership";
import AboutUs from "../../components/AboutUs/AboutUs";
import Footer from "../../components/Footer/Footer";



const Home = () => {
    const brands = useLoaderData()

    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <h2 className="text-center text-4xl font-bold py-10 text-sky-400">Our Popular Brands</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    brands.map(brand => <BrandCard key={brand._id} brand={brand}></BrandCard>)
                }
            </div>
            <Dealership></Dealership>
            <AboutUs></AboutUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;