import { Link } from "react-router-dom";


const ShowAllToys = ({ product }) => {
    const {seller_name, toy_name, sub_category, price, available_quantity} = product;
    return (
        
            <tr>
                <td>{seller_name}</td>
                <td>{toy_name}</td>
                <td>{sub_category}</td>
                <td>{price}</td>
                <td>{available_quantity}</td>
                <td><Link to = '/view-details'><button className="btn btn-warning">View Details</button></Link></td>
            </tr>
        
    );
};

export default ShowAllToys;