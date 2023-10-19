import image11 from "../../assets/images/cars/audi.jpg"
import image12 from "../../assets/images/cars/benz.jpg"
import image13 from "../../assets/images/cars/blue.jpg"
import image14 from "../../assets/images/cars/bmw.png"
import Marquee from "react-fast-marquee";
import image16 from "../../assets/images/cars/audi.jpg"


const Advertisment = () => {
    return (
        <div>
            <div className="max-w-xl mx-auto">
                <Marquee speed={100}>
                    <h2 className="text-3xl pb-10 text-sky-400 text-center font-serif font-bold">Your Dream Car, One Click Away....</h2>
                </Marquee>
            </div>

            <div className="carousel carousel-center rounded-box h-96">
                <div className="carousel-item w-1/5">
                    <img src={image11} alt="Pizza" />
                </div>
                <div className="carousel-item w-1/5">
                    <img src={image12} alt="Pizza" />
                </div>
                <div className="carousel-item w-1/5">
                    <img src={image13} alt="Pizza" />
                </div>
                <div className="carousel-item w-1/5">
                    <img src={image14} alt="Pizza" />
                </div>
                <div className="carousel-item w-1/5">
                    <img src={image16} alt="Pizza" />
                </div>

            </div>
        </div>
    );
};

export default Advertisment;