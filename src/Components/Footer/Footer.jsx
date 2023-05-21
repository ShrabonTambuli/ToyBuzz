import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div className="mt-10 bg-gray-700 text-white py-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-5 text-center font-serif items-center">
                <div className="inline-flex justify-center items-center">
                    <img className="w-16" src="/images/head.png" alt="" />
                    <h1 className="text-3xl font-semibold ms-2">ToyBuzz</h1>
                </div>
                <div>
                    <h1 className="text-2xl font-semibold mb-3">Services</h1>
                    <p>Educational Toys</p>
                    <p>Mathematical Toys </p>
                    <p>Scientifically Toys </p>
                    <p>Medical Toys</p>
                </div>
                <div>
                    <h1 className="text-2xl font-semibold mb-3">Contact Us</h1>
                    <p>+880 3525444545</p>
                    <p>Email: shrabon@gmail.com </p>
                    <p>ADD: Pathrail,Delduar,</p>
                    <p>Tangail</p>
                </div>
            </div>
            <hr className="mt-8 mx-20" />
            <div className="text-center mt-10">
                <p>Copyright © 2023 - All right reserved</p>
                <p className="flex justify-center items-center mt-7 p">
                    <Link to='/fb'><img className="w-10 rounded-full mx-2" src="/images/fb.png" alt="" /></Link>
                    <Link to='/tw'><img className="w-10 rounded-full mx-2" src="/images/linkdin.png" alt="" /></Link>
                    <Link to='/yt'><img className="w-10 rounded-full mx-2" src="/images/youtube.png" alt="" /></Link>
                </p>
            </div>
        </div>
    );
};

export default Footer;