

const Footer = () => {
    return (
        <div className="mt-14 bg-gray-700 text-white py-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-5 text-center font-serif items-center">
                <div>
                    <h1 className="text-5xl font-semibold">ToyBuzz</h1>
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
            </div>
        </div>
    );
};

export default Footer;