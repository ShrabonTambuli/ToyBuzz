import { useContext } from "react";
import { Form } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const AddToy = () => {
    const {user} = useContext(AuthContext);

    const handleAddToy = event => {
        event.preventDefault();
        const form = event.target;
        const toyName = form.toyName.value;
        const picture = form.picture.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const subCategory = form.subCategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const availableQuantity = form.availableQuantity.value;
        const details = form.details.value;

        const added = {
            toy_name : toyName,
            picture: picture,
            price: price,
            rating: rating,
            available_quantity: availableQuantity,
            seller_name: sellerName,
            email: sellerEmail,
            details: details,
            sub_category: subCategory

        }
        console.log(added)

        fetch('http://localhost:5000/product',{
        method: 'POST',
        headers: {
            'content-type':'application/json'
        },
        body:JSON.stringify(added)
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data);
        if(data.insertedId){
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
              })
        }
    })
    }

    


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content">
                    <Form onSubmit={handleAddToy} className="card flex-shrink-0 w-full shadow-2xl bg-base-100 pb-6">
                        <div className="card-body grid grid-cols-1 lg:grid-cols-2">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Toy Name</span>
                                </label>
                                <input type="text" placeholder="Toy name"
                                    name="toyName" className="input input-bordered pe-64" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Toy
                                        Picture Url</span>
                                </label>
                                <input type="text" placeholder="Picture url"
                                    name="picture" className="input input-bordered pe-64" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Seller Name</span>
                                </label>
                                <input type="text" placeholder="Seller name"
                                    name="sellerName" className="input input-bordered pe-64" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Seller Email</span>
                                </label>
                                <input type="text" placeholder="Seller-email"
                                    name="sellerEmail"
                                    defaultValue={user?.email}
                                    className="input input-bordered pe-64" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Sub-Category</span>
                                </label>
                                <input type="text" placeholder="Sub-category"
                                    name="subCategory"
                                    className="input input-bordered pe-64" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="number" placeholder="Price"
                                    name="price"
                                    className="input input-bordered pe-64" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <input type="number" placeholder="Rating"
                                    name="rating"
                                    className="input input-bordered pe-64" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Available Quantity</span>
                                </label>
                                <input type="number" placeholder="Available-quantity"
                                    name="availableQuantity"
                                    className="input input-bordered pe-64" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Detail Description</span>
                                </label>
                                <input type="text" placeholder="Detail-description"
                                    name="details" className="input input-bordered pe-64" />
                            </div>

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-warning mx-4">Add A Toy</button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default AddToy;