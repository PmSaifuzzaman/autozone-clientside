import PropTypes from 'prop-types';

const CartProductCard = ({cartProduct}) => {
    const { name, brand, photo, price, ratings, type } = cartProduct;
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
                    <button className="btn bg-sky-400 text-white">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default CartProductCard;

CartProductCard.propTypes = {
    cartProduct: PropTypes.object,
};