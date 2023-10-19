import { useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";


const Details = () => {

    const singleProduct = useLoaderData();
    const { name, brand, photo, price, ratings, type, details } = singleProduct;
    console.log(singleProduct)

    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-2xl font-bold text-center text-sky-400">Details: {name}</h2>
            <div className="card  bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={photo} alt="Car" className="rounded-xl" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title text-2xl font-bold">Name of Product: {name}</h2>
                    <p className="text-xl">Brand Name: {brand}</p>
                    <p className="text-xl">Type of Product: {type}</p>
                    <p className="text-xl">Ratings: {ratings}</p>
                    <p className="text-xl">Price: {price}</p>
                    <p><span className="text-xl font-bold">Details:</span> {details}</p>
                    <div className="card-actions">
                        <button className="btn bg-sky-400 text-white mt-2">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;