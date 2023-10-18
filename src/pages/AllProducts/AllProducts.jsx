

import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import ProductCard from "../ProductCard/ProductCard";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
// import { useEffect } from "react";


const AllProducts = () => {

    const { brandName } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {

        const lowerCaseBrandName = brandName.toLowerCase();
        fetch(`http://localhost:5000/products/${lowerCaseBrandName}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then((data) => {
            // Handle the data, set it in the state
            setProducts(data);
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
      }, [brandName]);

    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-center text-4xl font-bold my-10  text-sky-400">Our {brandName} Collection</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    products?.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllProducts;
