import Swal from "sweetalert2";
import Navbar from "../Navbar/Navbar";


const AddBrand = () => {


    const handleAddBrand = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const brand = form.brand.value;
        const ratings = form.ratings.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newBrand = { name, brand, ratings, details, photo }
        // Send data to Server side for brands
        fetch("https://autozone-server-n9pqjnvg2-saifuzzamans-projects.vercel.app/brands", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newBrand),
        })
            .then((res) => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Brand added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    event.target.reset();
                }
            });

    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="bg-[#F4F3F0] p-10">
                <h2 className="text-3xl font-extrabold text-center pb-4">Add a Brand</h2>
                <form onSubmit={handleAddBrand}>
                    {/* form name and brand name row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" placeholder="Product Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Brand Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="brand" placeholder="Brand" className="input input-bordered w-full" />
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
                                <input type="text" name="ratings" placeholder="Ratings" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="details" placeholder="Details" className="input input-bordered w-full" />
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
                                <input type="text" name="photo" placeholder="Brand Logo URL" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <input type="submit" value="Add Brand" className="btn btn-block bg-sky-400 text-white" />

                </form>
            </div>
        </div>
    );
};

export default AddBrand;