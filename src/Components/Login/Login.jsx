import { Form, Link, useLocation, useNavigate} from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useContext, useEffect} from 'react';
import { AuthContext } from "../../providers/AuthProvider";


const Login = () => {
    const {signIn, googleSignIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
        .then(result =>{
            const user = result.user;
            navigate(from, { replace: true })
            console.log(user);
        })
        .catch(err => console.log(err))
    }

    const handleGoogle = () => {
        googleSignIn();
    }


    return (
        <div className="mt-10">
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center" data-aos="fade-right">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <img className="h-96 w-full rounded-3xl mt-3" src="/images/Login.jpg" alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <Form onSubmit={handleLogin} className="card-body" data-aos="fade-left">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email"
                                    name="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password"
                                    name="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-warning">Login</button>
                            </div>
                            <p className="mt-4"><Link className="underline" to='/register'>Please Register</Link> ! for new account</p>
                            <hr />
                            <button onClick={handleGoogle} className=" mt-2 btn btn-outline btn-warning mx-auto"><img className="w-8 rounded-full" src="../../../public/images/google.png" alt="" /> Continue with Google</button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;