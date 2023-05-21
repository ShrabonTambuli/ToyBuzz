import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Feature = () => {

    useEffect(() => {
        AOS.init({duration :1000});
      }, []);

    return (
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="mx-auto" data-aos="fade-up">
                <img className="w-full h-96 rounded-2xl" src="https://www.dontwasteyourmoney.com/wp-content/uploads/2021/10/snaen-chemistry-station-stem-science-kit-110-piece-science-kit.jpg" alt="" />
            </div>
            <div className="font-serif pr-5" data-aos="fade-down">
                <h1 className="font-semibold">3 Product Layouts</h1>
                <p>Standard Gallery, Big Images or Image Mosaic – BabyStreet offers all modern product gallery types and layouts.</p>
                <br />
                <h1 className="font-semibold">Product Deals With Countdown</h1>
                <p>Promote your limited time deals like a pro. Create an urge and use the full potential of scarcity selling techniques.</p>
                <br />
                <h1 className="font-semibold">Custom Variation Swatches</h1>
                <p>Custom built variation swatches – use image, color or label type for better user experience. No plugins needed.</p>
                <br />
                <h1 className="font-semibold">3 Product Layouts</h1>
                <p>Standard Gallery, Big Images or Image Mosaic – BabyStreet offers all modern product gallery types and layouts.</p>
                <br />
                <h1 className="font-semibold">AJAX-powered Product Filters</h1>
                <p>Increase your conversion rates by giving your users a convenient browsing experience and turn them to loyal customers.</p>
            </div>
        </div>
    );
};

export default Feature;