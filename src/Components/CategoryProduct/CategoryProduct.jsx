import { Link } from "react-router-dom";



const CategoryProduct = ({ products }) => {

    const { picture, _id, toy_name, price, rating } = products;

    return (
        <div className="container mx-auto">
            <div className="card lg:card-side bg-base-100 shadow-xl mt-10 mx-auto">
                <figure><img src={picture} alt="Album" /></figure>
                <div className="card-body mx-4">
                    <h2 className="card-title">{toy_name}</h2>
                    <p className="text-left font-serif">Price: ${price}</p>
                    <p className="text-left font-serif">Rating: {rating}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/view-details/${_id}`}>
                            <button className="btn btn-warning">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
            {/* <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Toy name:
                        <div className="badge badge-secondary">{toy_name}</div>
                    </h2>
                    <div className="card-actions justify-end pb-4">
                        <div className="badge badge-outline">Price: {price}</div>
                        <div className="badge badge-outline">Ratings: {rating}</div>
                    </div>
                    <Link to={`/view-details/${_id}`}>
                        <button className="btn btn-warning">View Details</button>
                    </Link>
                </div>
            </div> */}
        </div>
    );
};

export default CategoryProduct;