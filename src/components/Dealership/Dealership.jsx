import image1 from "../../assets/images/brand.png"
import image2 from "../../assets/images/messege.png"
import image3 from "../../assets/images/dealer.png"
import image4 from "../../assets/images/afordable.png"


const Dealership = () => {
    return (
        <div>
            <div className="text-center py-10 space-y-3">
                <h2 className="text-4xl font-bold text-sky-400">Car Delership</h2>
                <p>The car business is a people business. Treat people right and they will do business with you</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={image1} alt="Brand image" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-2xl font-bold">All Brands</h2>
                        <p>We have a car for every brand enthusiast. Explore our wide selection of vehicles, from top-notch luxury to reliable everyday cars. Your dream car is just a click away!</p>
                    </div>
                </div>
                <div className="card  bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={image2} alt="Brand image" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-2xl font-bold">Free Support</h2>
                        <p>We offer top-notch customer support to assist you in finding the perfect car that suits your needs. Our support is absolutely free, so you can get the expert guidance you deserve without any extra costs.</p>
                    </div>
                </div>
                <div className="card  bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={image3} alt="Brand image" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-2xl font-bold">Dealership</h2>
                        <p>At our dealership, we are proud to provide an extensive selection of cars from all major brands. With our wide range of vehicles, you will have the opportunity to explore and test drive cars from various manufacturers. </p>
                    </div>
                </div>
                <div className="card  bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={image4} alt="Brand image" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-2xl font-bold">Affordable</h2>
                        <p>We understand the importance of affordability when it comes to buying a car. That is why we offer competitive pricing and various financing options to make your dream car more accessible.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dealership;