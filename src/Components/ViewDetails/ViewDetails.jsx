import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";


const ViewDetails = () => {

    useEffect(()=>{
        document.title = "ToyBuzz | View Details"
    },[])

    const toy = useLoaderData();
    const {picture, seller_name, toy_name, price, available_quantity, email, rating, details} = toy;
    return (
        <div className="mt-16">
            <div className="card lg:card-side bg-base-100 shadow-xl container mx-auto pb-6">
                <figure><img className="" src={picture} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{toy_name}</h2>
                    <p>Product Details: {details}</p>
                    <p className="font-semibold">Seller Name: { seller_name}</p>
                    <p className="font-semibold">Seller Email: {email}</p>
                    <p className="font-semibold">Price: {price}</p>
                    <p className="font-semibold">Rating: {rating}</p>
                    <p className="font-semibold">Available Quantity: {available_quantity}</p>
                    
                </div>
            </div>

        </div>
    );
};

export default ViewDetails;