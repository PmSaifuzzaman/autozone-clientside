import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useContext } from "react";
import { authContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";


const Details = () => {

    const singleProduct = useLoaderData();
    const { name, brand, photo, price, ratings, type, details } = singleProduct;
    console.log(singleProduct)

    const{user} = useContext(authContext);
    // Extract user email from context
    const useremail = user.email
    


    const handleAddtoCart = () =>{
        const newCartProduct = { name, brand, type, price, ratings, details, photo, useremail}
        console.log(newCartProduct)

        fetch("http://localhost:5000/cartProducts", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newCartProduct),
        })
            .then((res) => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product added to Cart Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            });
    }



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
                        <Link onClick={handleAddtoCart}  to={'/cart'} className="btn bg-sky-400 text-white mt-2">Add to Cart</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;