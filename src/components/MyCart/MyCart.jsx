import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import { useEffect } from "react";
import CartProductCard from "../CartProductCard/CartProductCard";



const MyCart = () => {


    const { userEmail } = useParams();
    const [cartProducts, setCartProducts] = useState([]);
    const [cartProductsFound, setCartProductsFound] = useState(true);

    useEffect(() => {

          const lowerCaseUserEmail = userEmail.toLowerCase();
        //   fetch(`http://localhost:5000/products/${lowerCaseBrandName}`)
        fetch(`http://localhost:5000/cartProducts/${lowerCaseUserEmail}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {

                if (data.length === 0) {
                    setCartProductsFound(false); // Set productsFound to false when no products are found
                } else {
                    setCartProducts(data);
                }
            })

            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [userEmail]);


    return (
        <div>
            <Navbar></Navbar>
            <div>
                {cartProductsFound ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {cartProducts?.map(cartProduct => <CartProductCard key={cartProduct._id} cartProduct={cartProduct}></CartProductCard>)}
                    </div>
                ) : (
                    <div>
                        <p className="text-center font-bold">No products found.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyCart;