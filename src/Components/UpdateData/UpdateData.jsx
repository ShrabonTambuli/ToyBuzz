import { Form } from "react-router-dom";


const UpdateData = () => {

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

    //     fetch('http://localhost:5000/product',{
    //     method: 'POST',
    //     headers: {
    //         'content-type':'application/json'
    //     },
    //     body:JSON.stringify(added)
    // })
    // .then(res => res.json())
    // .then(data =>{
    //     console.log(data);
    // })
    }


    return (
        <div>
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
                                    name="price" className="input input-bordered pe-80" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Available Quantity</span>
                                </label>
                                <input type="number" placeholder="Available Quantity"
                                    name="availableQuantity" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Detail Description</span>
                                </label>
                                <input type="text" placeholder="Detail Description"
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