import './Subscrib.css'

const Subscrib = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center">
            <div>
                <h1 className='font-serif font-semibold text-4xl lg:text-left'>Subscribe for Exclusive <br /> Sales & News</h1>
            </div>
            <div>
                <div className="form-control">
                    <div className="input-group">
                        <input type="email" placeholder="Enter Your Email" className="input input-bordered" />
                        <button className="btn btn-warning">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscrib;