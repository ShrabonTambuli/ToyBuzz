import { Form, Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useContext, useEffect } from 'react';
import { AuthContext } from "../../providers/AuthProvider";


const Register = () => {
    const {createUser} = useContext(AuthContext);

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const handleRegister = event =>{
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password)

        createUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user)
        })
        .catch(err =>console.log(err));
    }

    return (
        <div className="mt-10">
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse" data-aos="fade-left">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Register Now!</h1>
                        <img className="h-96 w-full rounded-3xl mt-3" src="/images/register.png" alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100" data-aos="fade-left">
                        <Form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name"
                                    name="name" className="input input-bordered" />
                            </div>
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

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" placeholder="photo"
                                    name="photo" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-warning">Register</button>
                            </div>
                            <p className="mt-4">Already have an account! <Link className="underline" to='/login'>Please Login</Link></p>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;