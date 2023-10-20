import { useLoaderData } from "react-router-dom";

import Swal from "sweetalert2";
import Navbar from "../Navbar/Navbar";


const UpdateProduct = () => {

    const singleProduct = useLoaderData()
    console.log(singleProduct)
    const { _id, name, brand, photo, price, ratings, type, details } = singleProduct;


    const handleUpdateProduct = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const ratings = form.ratings.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updatedProduct = { name, brand, type, price, ratings, details, photo }

        // Send data to server

        fetch(`https://autozone-server-n9pqjnvg2-saifuzzamans-projects.vercel.app/product/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updatedProduct),
        })
            .then((res) => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    event.target.reset();
                }
            });


        console.log(updatedProduct)

    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="bg-[#F4F3F0] p-10">
                <h2 className="text-3xl font-extrabold text-center pb-4">Update: {name}</h2>
                <form onSubmit={handleUpdateProduct}>
                    {/* form name and brand name row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" defaultValue={name} placeholder="Product Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Brand Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="brand" defaultValue={brand} placeholder="Brand" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form Type and price row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Type</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="type" defaultValue={type} placeholder="Type of product" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="price" defaultValue={price} placeholder="Price" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form rating and details row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Ratings</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="ratings" defaultValue={ratings} placeholder="Ratings" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="details" defaultValue={details} placeholder="Details" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form Photo url row */}
                    <div className="mb-8">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="photo" defaultValue={photo} placeholder="Photo URL" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <input type="submit" value="Update Product" className="btn btn-block bg-sky-400 text-white" />

                </form>
            </div>
        </div>
    );
};

export default UpdateProduct;