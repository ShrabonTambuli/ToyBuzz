import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100 font-serif grid grid-cols-1 lg:grid-cols-3">
                <div className="navbar-start">
                    <h1 className="normal-case text-2xl font-semibold ms-5">ToyBuzz</h1>
                </div>
                <div className="navbar-center lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/all toys'>All Toys</Link></li>
                        <li><Link to='my toys'>My Toys</Link></li>
                        <li><Link to='/update toy'>Add A Toy</Link></li>
                        <li><Link to='/blogs'>Blogs</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <img className="w-12 rounded-full border-2 border-green-500" src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg" alt="" />
                    <Link to='/login' className="btn btn-outline btn-warning">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;