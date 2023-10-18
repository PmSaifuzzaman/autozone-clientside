import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Navbar from "../../components/Navbar/Navbar";
import BrandCard from "../../components/BrandCard/BrandCard";


const Home = () => {
    const brands = useLoaderData()

    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <h2 className="text-center text-4xl font-bold py-10">Our Popular Brands: {brands.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    brands.map(brand => <BrandCard key={brand._id} brand={brand}></BrandCard>)
                }
            </div>
        </div>
    );
};

export default Home;