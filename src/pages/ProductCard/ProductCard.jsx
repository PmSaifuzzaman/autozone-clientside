import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {

    const { _id, name, brand, photo, price, ratings, type } = product;
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
            <figure><img className='' src={photo} alt="Car" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Brand: {brand}</p>
                <p>Type of Vehicle: {type}</p>
                <p>Ratings: {ratings}</p>
                <p className='text-3xl font-bold'>Price: {price}</p>
                <div className='flex justify-between'>
                    <div className="card-actions ">
                        <Link to={`/detailsProduct/${_id}`} className="btn bg-sky-400 text-white rounded-full">Details</Link>
                    </div>
                    <div className="card-actions ">
                        <Link to={`/updateProduct/${_id}`} className="btn bg-sky-400 text-white rounded-full">Update</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;


ProductCard.propTypes = {
    product: PropTypes.object,
};