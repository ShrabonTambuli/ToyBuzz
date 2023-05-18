import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2  items-center text-center">
            <div>
                <img className="w-full" src="/images/oops-404-error-with-broken-robot-concept-illustration_114360-5529.avif" alt="" />
            </div>
            <div className="font-serif text-4xl">
                <h1>Page is updating....</h1>
            <Link to='/' className="mt-4 btn btn-outline btn-warning">Go To Home</Link>
            </div>
        </div>
    );
};

export default Error;