import Navbar from "../../components/Navbar/Navbar";
import image7 from "../../assets/images/cars/benz.jpg"
import image8 from "../../assets/images/cars/bmw.png"
import image9 from "../../assets/images/cars/audi.jpg"
import image10 from "../../assets/images/cars/rolls-royce.jpg"
import Footer from "../../components/Footer/Footer";



const Blog = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
                <div className="max-w-3xl mx-auto">
                    <img src={image7} alt="" />
                    <p className="mt-5">Whether you are seeking a luxurious daily driver or a sophisticated vehicle for special occasions, the Mercedes-Benz C-Class Sedan exceeds expectations. From its superior craftsmanship to its captivating performance, it is a car that reflects your taste for the finer things in life.</p>
                    <br />
                    <h2 className="text-2xl font-bold">Mercedes-Benz Key features</h2>
                    <li>Elegant Design: The Mercedes-Benz C-Class Sedan embodies sophistication with its sleek and aerodynamic design. From its iconic front grille to the sculpted lines, this car exudes style.</li>
                    <li>Luxurious Interior: Step inside, and you will be greeted by a meticulously crafted interior. Premium materials, ergonomic seating, and advanced infotainment systems create an ambiance of pure comfort.</li>
                    <li>Powerful Performance: Choose from a range of powerful engines, each designed to deliver an exhilarating driving experience. With precise handling and responsive steering, the C-Class is a joy to drive.</li>
                    <li>Efficient and Eco-Friendly: With eco-friendly engine options, the C-Class Sedan is environmentally conscious without sacrificing performance.</li>
                    <li>Cutting-Edge Technology: Mercedes-Benz is known for its innovative technology. The C-Class Sedan features state-of-the-art safety features, infotainment systems, and connectivity options.</li>
                </div>
                <br />
                <div className="max-w-3xl mx-auto">
                    <img src={image8} alt="" />
                    <p className="mt-5">The BMW 3 Series Sedan stands as a testament to BMW is commitment to crafting exceptional driving machines. This legendary sedan is celebrated for its blend of sporty performance, luxurious comfort, and innovative technology, setting a standard that other cars in its class aspire to achieve.</p>
                    <br />
                    <h2 className="text-2xl font-bold">BMW Key features</h2>
                    <li>Sporty Elegance: The BMW 3 Series Sedan boasts a timeless design with its signature kidney grille and iconic silhouette. It is the perfect blend of sportiness and elegance.</li>
                    <li>Driver-Centric Interior: Step inside, and you will find a driver-centric cockpit featuring premium materials and intuitive controls. It is designed to put you in command.</li>
                    <li>Dynamic Performance: With a range of powerful engines, the 3 Series offers exhilarating performance with precise handling and agile maneuverability.</li>
                    <li>Cutting-Edge Technology: BMW is iDrive infotainment system is at your fingertips, offering seamless connectivity, navigation, and entertainment options. Advanced safety features provide peace of mind.</li>
                    <li>Efficiency and Sustainability: The 3 Series includes eco-friendly options, making it not only performance-oriented but also environmentally responsible.</li>
                </div>
                <br />
                <div className="max-w-3xl mx-auto">
                    <img src={image9} alt="" />
                    <p className="mt-5">The Audi Series Sedan stands as a testament to Audi is commitment to crafting exceptional driving machines. This legendary sedan is celebrated for its blend of sporty performance, luxurious comfort, and innovative technology, setting a standard that other cars in its class aspire to achieve.</p>
                    <br />
                    <h2 className="text-2xl font-bold">Audi Key features</h2>
                    <li>Sporty Elegance: The BMW 3 Series Sedan boasts a timeless design with its signature kidney grille and iconic silhouette. It is the perfect blend of sportiness and elegance.</li>
                    <li>Driver-Centric Interior: Step inside, and you will find a driver-centric cockpit featuring premium materials and intuitive controls. It is designed to put you in command.</li>
                    <li>Dynamic Performance: With a range of powerful engines, the 3 Series offers exhilarating performance with precise handling and agile maneuverability.</li>
                    <li>Cutting-Edge Technology: BMW is iDrive infotainment system is at your fingertips, offering seamless connectivity, navigation, and entertainment options. Advanced safety features provide peace of mind.</li>
                    <li>Efficiency and Sustainability: The 3 Series includes eco-friendly options, making it not only performance-oriented but also environmentally responsible.</li>
                </div>
                <br />
                <div className="max-w-3xl mx-auto">
                    <img src={image10} alt="" />
                    <p className="mt-5">The Rolls-Royce Phantom is the epitome of automotive excellence and luxury. Crafted with precision and dedication, this iconic vehicle defines opulence, providing an unrivaled driving and riding experience.</p>
                    <br />
                    <h2 className="text-2xl font-bold">Rolls-Royce Key features</h2>
                    <li>Elegance Redefined: The Phantom is design is a statement of timeless elegance and sophistication. Its distinctive grille and iconic Spirit of Ecstasy hood ornament are symbols of luxury.</li>
                    <li>Handcrafted Interior: Step inside, and you will be greeted by a cabin adorned with the finest materials, meticulously crafted by skilled artisans. Each detail is a testament to Rolls-Royce is commitment to craftsmanship.</li>
                    <li>Silent Luxury: The Phantom offers an incredibly quiet and comfortable ride. Noise-reduction technology ensures a serene environment for both driver and passengers.</li>
                    <li>Effortless Power: With a V12 engine, the Phantom delivers unparalleled power and performance, yet it moves gracefully like a whisper on wheels.</li>
                    <li>Innovative Technology: A state-of-the-art infotainment system, complete with a personalized gallery, brings advanced technology to the forefront.</li>
                </div>
                <br />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blog;