import PropTypes from 'prop-types';
import Swal from 'sweetalert2';

const CartProductCard = ({ cartProduct, cartProducts, setCartProducts }) => {


    const { _id, name, brand, photo, price, ratings, type } = cartProduct;

    const handleDelete = (_id) => {
        console.log(_id)

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/cartProduct/${_id}`,{
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Product has been deleted.',
                                'success'
                            )

                            const remainingProduct = cartProducts.filter(product => product._id !== _id)
                            setCartProducts(remainingProduct)
                        }
                    })
            }
        })
    }


    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={photo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Product Name: {name}</h2>
                <p>Brand Name: {brand}</p>
                <p>Type: {type}</p>
                <p>Price: {price}</p>
                <p>Ratings: {ratings}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleDelete(_id)} className="btn bg-sky-400 text-white">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default CartProductCard;

CartProductCard.propTypes = {
    cartProduct: PropTypes.object,
    cartProducts: PropTypes.array,
    setCartProducts: PropTypes.func,
};