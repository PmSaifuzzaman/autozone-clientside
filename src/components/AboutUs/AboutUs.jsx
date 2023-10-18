import { Link } from "react-router-dom";
import image5 from "../../assets/images/aboutus.jpg"

const AboutUs = () => {
    return (
        <div>
            <h2 className="text-center text-4xl font-bold pt-10 text-sky-400">About Us</h2>
                
            <div className="hero bg-white shadow-xl  p-10">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={image5} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                    <p className="text-2xl font-serif">Welcome to Auto<span className="text-sky-400 font-semibold">Zone</span> - Your Trusted Partner in the World of Automobiles!</p>
                    <br />
                    <p>At Auto<span className="text-sky-400 font-semibold">Zone</span>, we are passionate about cars and dedicated to providing our customers with the best automotive experience. We take pride in our commitment to quality, innovation, and customer satisfaction.</p>
                    <br />
                    <li className="py-4"> Highest standards of quality, safety, and performance</li>
                    <li> Offering you the latest features and cutting-edge innovations</li>
                    <li className="py-4"> Impressive after-sales support</li>
                        <Link className="btn bg-sky-400 text-white my-3">Contact Us</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;