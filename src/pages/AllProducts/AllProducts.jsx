import { useLoaderData } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import ProductCard from "../ProductCard/ProductCard";


const AllProducts = () => {

    const allproducts = useLoaderData()
    console.log(allproducts)

    return (
        <div>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {
                    allproducts.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default AllProducts;
