import Gallery from "../Gallery-Section/Gallery";


const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen mt-10 font-serif" style={{ backgroundImage: `url("/images/banner.webp")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Best Kids Store <br /> &  <br /> Online Toys Shop</h1>
                        <p className="mb-5 text-lg">Give The Gift Of Your Children Everyday</p>
                        <button className="btn btn-outline btn-warning">Try Now!</button>
                    </div>
                </div>
            </div>
            <div className="mt-14 text-center font-serif">
                <h1 className="text-4xl underline font-semibold">Photo - Gallery</h1>
                <Gallery/>
            </div>
        </div>
    );
};

export default Home;