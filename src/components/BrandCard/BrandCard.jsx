import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BrandCard = ({ brand }) => {
  const { name, photo, } = brand;

  return (
    <div className="card h-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={photo} alt="Shoes" className="rounded-xl h-full" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
      </div>
      <div className="card-actions justify-end pb-10 pr-10">
        <Link to={`/products/${name}`} className="btn bg-sky-400 text-white">
          See All Product
        </Link>
      </div>
    </div>
  );
};


export default BrandCard;

BrandCard.propTypes = {
  brand: PropTypes.object,
};