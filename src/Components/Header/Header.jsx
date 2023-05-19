import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () =>{
        logOut()
        .then()
        .catch(error=>(error))
    }

    return (
        <div>
            <div className="navbar bg-base-100 font-serif grid grid-cols-1 lg:grid-cols-3 justify-items-center mt-6">
                <div className="navbar-start">
                    <h1 className="normal-case text-2xl font-semibold ms-5">ToyBuzz</h1>
                </div>
                <div className="navbar-center lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/all-toys'>All Toys</Link></li>
                        <li><Link to='/my-toys'>My Toys</Link></li>
                        <li><Link to='/add-toy'>Add A Toy</Link></li>
                        <li><Link to='/blogs'>Blogs</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {user &&
                        <img title={user?.displayName
                        } className="w-16 rounded-full border-2 border-warning mx-7" src={user.photoURL} alt="" />
                    }
                    {user ?
                        <button onClick={handleLogOut} className="btn btn-outline btn-warning">LogOut</button>:
                        <Link to='/login' className="btn btn-outline btn-warning ">Login</Link>

                    }
                </div>
            </div>
        </div>
    );
};

export default Header;