import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const UserToy = ({ toy}) => {
    const { picture, seller_name, toy_name, sub_category, price, available_quantity, _id } = toy;

    const handleDelete = _id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:5000/my-products/${_id}`,{
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deleteCount > 0) {
                              Swal.fire(
                                'Deleted!',
                                'Your product has been deleted.',
                                'success'
                              )
                        }
                    })

            }



        })
    }
    return (
        <tr>
            <td><img className="w-60 h-48" src={picture} alt="" /></td>
            <td>{seller_name}</td>
            <td>{toy_name}</td>
            <td>{sub_category}</td>
            <td>$ {price}</td>
            <td>{available_quantity}</td>
            <td>{<Link to={`/update-data/${_id}`}><button className="btn btn-warning">Update</button></Link>}</td>
            <td>{<button onClick={() => handleDelete(_id)} className="btn btn-error btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>}</td>
        </tr>
    );
};

export default UserToy;