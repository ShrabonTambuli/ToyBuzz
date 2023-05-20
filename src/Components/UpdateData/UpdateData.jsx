import { useEffect } from "react";
import { Form, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateData = () => {
    useEffect(()=>{
        document.title = "ToyBuzz | Update"
    },[])

    const toy = useLoaderData();
    const { toy_name, price, available_quantity, details, _id } = toy;
    console.log(toy);

    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const availableQuantity = form.availableQuantity.value;
        const details = form.details.value;

        const update = {
            price: price,
            available_quantity: availableQuantity,
            details: details

        }
        console.log(update)

        fetch(`https://toy-buzz-server.vercel.app/product/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(update)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount>0) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Your update has been saved',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }


    return (
        <div className="mt-10"> 
            <h1 className="font-serif font-semibold text-center text-2xl">Toy Name : {toy_name}</h1>
            <div className="hero min-h-screen bg-base-200">
                
                <div className="hero-content">

                    <Form onSubmit={handleUpdate} className="card flex-shrink-0 w-full shadow-2xl bg-base-100 py-7">
                        <h1 className="text-center font-serif font-semibold text-2xl">Update</h1>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="number" placeholder="Price"
                                defaultValue={price}
                                    name="price" className="input input-bordered pe-80" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Available Quantity</span>
                                </label>
                                <input type="number" placeholder="Available Quantity"
                                defaultValue={available_quantity}
                                    name="availableQuantity" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Detail Description</span>
                                </label>
                                <input type="text" placeholder="Detail Description"
                                defaultValue={details}
                                    name="details" className="input input-bordered" />

                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-warning mx-5">Update</button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default UpdateData;