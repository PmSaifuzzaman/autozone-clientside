import bannerimage from "../../assets/images/banner1.jpg"

const Banner = () => {
    return (
        <div className="hero min-h-[80vh]" style={{ backgroundImage: `url(${bannerimage})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">AUTO<span className="text-sky-400">ZONE</span></h1>
                    <p className="mb-5 text-4xl text-white">Find your perfect car</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;