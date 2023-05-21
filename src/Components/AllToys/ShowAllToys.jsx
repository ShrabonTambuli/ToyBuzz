
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ShowAllToys = ({ product }) => {
    const { picture, seller_name, toy_name, sub_category, price, available_quantity, _id } = product;

    const { user } = useContext(AuthContext);
    const notify = () => {
        if (!user) {
            toast("User not available!");

        }

    }

    return (
        <tr>
            <td><img className="w-24 h-20" src={picture} alt="" /></td>
            <td>{seller_name}</td>
            <td>{toy_name}</td>
            <td>{sub_category}</td>
            <td>$ {price}</td>
            <td>{available_quantity}</td>
            <td>
                <Link to={`/view-details/${_id}`}><button
                    onClick={notify} className="btn btn-warning">View Details</button>
                    <ToastContainer />
                </Link>
            </td>
        </tr>

    );
};

export default ShowAllToys;