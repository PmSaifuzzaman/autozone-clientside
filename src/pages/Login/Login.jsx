import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useLocation, useNavigate } from "react-router-dom";

import { useContext, useState } from "react";
import { authContext } from '../../providers/AuthProvider';




const Login = () => {
    const [loginError, setLoginError] = useState('');
    const [LoginSuccess, setLoginSuccess] = useState('');

    const { logIn } = useContext(authContext);
    const visitLocation = useLocation();

    const navigate = useNavigate();

    const handleLogIn = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        // reset
        setLoginError('');
        setLoginSuccess('');

        // log in user
        logIn(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)


                setLoginSuccess('User Logged in Successfully.')

                // Navigate after log in
                navigate(visitLocation?.state ? visitLocation.state : '/')
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
                setLoginError(errorMessage);
            });

    }
    return (
        <div>

            <div className="bg-slate-300">
                <h2 className="text-center mt-10 pt-8 text-4xl font-semibold">Login your account </h2>
                <form onSubmit={handleLogIn} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-red-400 text-white">Login</button>
                    </div>
                </form>
                
                {
                    loginError && <p className="text-red-800 text-center">Email or Password does not match</p>

                }
                {
                    LoginSuccess && toast("Login Successfully")
                }
                <p className="text-center pb-8">Do not Have An Account ? <Link className="underline text-red-500 font-semibold" to={"/register"}>Register</Link></p>
            </div>
        </div>
    );
};

export default Login;
