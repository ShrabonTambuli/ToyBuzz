import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Gallery = () => {

    useEffect(() => {
        AOS.init({duration :1000});
      }, []);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-5 mt-14 mx-16">
            <div className="card w-80 bg-base-100 shadow-xl image-full h-60 mx-auto" data-aos="fade-right">
                <figure><img src="/images/G-1.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Educational Toy!</h2>
                    <p>How to you learn basic study?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-outline btn-warning">Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="card w-80 bg-base-100 shadow-xl image-full h-60 mx-auto" data-aos="zoom-in">
                <figure><img src="/images/G-2.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Educational Toy!</h2>
                    <p>How to you learn basic study?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-outline btn-warning">Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="card w-80 bg-base-100 shadow-xl image-full h-60 mx-auto" data-aos="fade-left">
                <figure><img src="/images/G-3.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Educational Toy!</h2>
                    <p>How to you learn basic study?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-outline btn-warning">Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="card w-80 bg-base-100 shadow-xl image-full h-60 mx-auto" data-aos="fade-right">
                <figure><img src="/images/G-4.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Educational Toy!</h2>
                    <p>How to you learn basic study?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-outline btn-warning">Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="card w-80 bg-base-100 shadow-xl image-full h-60 mx-auto" data-aos="zoom-in">
                <figure><img src="/images/G-5.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Educational Toy!</h2>
                    <p>How to you learn basic study?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-outline btn-warning">Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="card w-80 bg-base-100 shadow-xl image-full h-60 mx-auto" data-aos="fade-left">
                <figure><img src="/images/G-6.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Educational Toy!</h2>
                    <p>How to you learn basic study?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-outline btn-warning">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;