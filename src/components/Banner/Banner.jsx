import { Link } from "react-router-dom";
import bannerimage from "../../assets/images/cars/banner2.png"
import { FaArrowRight } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className="hero-content flex flex-col lg:flex-row-reverse justify-around bg-sky-50 bg-opacity-30 shadow-lg rounded-sm">
            <div className="">
                <img src={bannerimage} className=" md:max-w-sm " />
            </div>
            <div className="text-justify">
                <h1 className="text-5xl font-bold">Auto<span className="text-sky-400">Zone</span></h1>
                <p className="py-6 text-3xl font-medium">Welcome to Auto<span className="text-sky-400">Zone</span> - Your Trusted <br /> Partner in the World of Automobiles!</p>
                <Link to={'/contact'} className="text-sky-400 font-semibold">Reach Us <FaArrowRight className="inline-block pl-1"></FaArrowRight></Link>
            </div>
        </div>

    );
};

export default Banner;

