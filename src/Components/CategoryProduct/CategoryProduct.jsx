

const CategoryProduct = ({products}) => {

    const {picture} = products;

    return (
        <div>
            <div className="card w-96 glass">
                        <figure><img src={picture} alt="car!" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Life hack</h2>
                            <p>How to park your car at your garage?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Learn now!</button>
                            </div>
                        </div>
                    </div>
        </div>
    );
};

export default CategoryProduct;