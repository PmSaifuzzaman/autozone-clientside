import image20 from "../../assets/images/cars/Noproduct.png"
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import ProductCard from "../ProductCard/ProductCard";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Advertisment from "../../components/Advertisement/Advertisment";
// import { useEffect } from "react";


const AllProducts = () => {

  const { brandName } = useParams();
  const [products, setProducts] = useState([]);
  const [productsFound, setProductsFound] = useState(true);

  useEffect(() => {

    const lowerCaseBrandName = brandName.toLowerCase();
    fetch(`https://autozone-server-n9pqjnvg2-saifuzzamans-projects.vercel.app/products/${lowerCaseBrandName}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {

        if (data.length === 0) {
          setProductsFound(false); // Set productsFound to false when no products are found
        } else {
          setProducts(data);
        }
      })

      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [brandName]);

  return (
    <div>
      <Navbar></Navbar>
      <Advertisment></Advertisment>
      <h2 className="text-center text-4xl font-bold my-10  text-sky-400">Our {brandName} Collection</h2>
      {productsFound ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {products?.map(product => <ProductCard key={product._id} product={product}></ProductCard>)}
        </div>
      ) : (
        <div>
          <img className="mx-auto mb-5" src={image20} alt="" />
          <p className="text-center font-bold">No products found.</p>
        </div>
      )}
      <Footer></Footer>
    </div>
  );
};

export default AllProducts;
