
const AddToy = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content">
                    <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100 pb-6">
                        <div className="card-body grid grid-cols-1 lg:grid-cols-2">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Toy Name</span>
                                </label>
                                <input type="text" placeholder="Toy name"
                                    name="toy-name" className="input input-bordered pe-64" />
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
                                    name="seller_name" className="input input-bordered pe-64" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Seller Email</span>
                                </label>
                                <input type="text" placeholder="Seller-email"
                                    name="seller_email"
                                    className="input input-bordered pe-64" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Sub-Category</span>
                                </label>
                                <input type="text" placeholder="Sub-category"
                                    name="sub_category"
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
                                <input type="text" placeholder="Available-quantity"
                                    name="available_quantity"
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
                            <button className="btn btn-outline btn-warning mx-4">Add A Toy</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddToy;