import { Link } from "react-router-dom";


const ShowAllToys = ({ product }) => {
    const {picture, seller_name, toy_name, sub_category, price, available_quantity,_id } = product;
    return (
        <tr>
            <td><img className="w-24 h-20" src={picture} alt="" /></td>
            <td>{seller_name}</td>
            <td>{toy_name}</td>
            <td>{sub_category}</td>
            <td>$ {price}</td>
            <td>{available_quantity}</td>
            <td><Link to={`/view-details/${_id}`}><button className="btn btn-warning">View Details</button></Link></td>
        </tr>

    );
};

export default ShowAllToys;