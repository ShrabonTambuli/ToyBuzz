import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => (error))
    }

    return (
        <div>
            <div className="navbar bg-base-100 font-serif grid grid-cols-1 lg:grid-cols-3 justify-items-center mt-6">
                <div className="navbar-start">
                    <img className="w-16" src="/images/head.png" alt="" />
                    <h1 className="normal-case text-3xl font-semibold">ToyBuzz</h1>
                </div>
                <div className="navbar-center lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/all-toys'>All Toys</Link></li>
                        {user &&
                            <>
                                <li><Link to='/my-toys'>My Toys</Link></li>
                                <li><Link to='/add-toy'>Add A Toy</Link></li>
                            </>

                        }
                        <li><Link to='/blogs'>Blogs</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {user &&
                        // <img title={user?.displayName
                        // } className="w-16 rounded-full border-2 border-warning mx-7 avatar online" src={user.photoURL} alt="" />
                        <div className="avatar online me-5">
                            <div className="w-16 rounded-full">
                                <img title={user?.displayName} src={user.photoURL} />
                            </div>
                        </div>
                    }
                    {user ?
                        <Link to='/'><button onClick={handleLogOut} className="btn btn-outline btn-warning">LogOut</button></Link> :
                        <Link to='/login' className="btn btn-outline btn-warning ">Login</Link>

                    }
                </div>
            </div>
        </div>
    );
};

export default Header;