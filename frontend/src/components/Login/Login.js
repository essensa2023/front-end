
import React, { useState } from "react";
import logoImage from "../../images/logo-image.png";
import Footer from "../Footer";
import "./login.css";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        console.log(`Email: ${email}`);
        console.log(`Password: ${password}`);
    }

    return ( 
        <>
          <div className="flex flex-col items-center mx-auto mt-10">
            <img src={logoImage} alt="logo"/>
            <h1 className="text-custom-dark-green leading-12 font-light">Welcome back to <span>Essensa</span></h1>
          </div>  

            <div className="flex flex-col relative bottom-48 items-center justify-center mt-64">

                <form onSubmit={handleSubmit}>
                    <div>
                      <input
                        type="text"
                        id="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="Your Email"
                        className=" input-field bg-white border border-grey-500 rounded-md px-3 py-2 mt-1 mb-3 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        placeholder="Your Password:"
                        className=" input-field bg-white border border-grey-300 rounded-md px-3 py-2 mt-1 mb-3 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                      />
                    </div>

                    <div className="flex justify-end mt-4">
                        <a href="#" className="no-underline text-custom-black1">Forgot Password</a>
                    </div>

                    <div className="btn-container flex justify-center">
                         <button onClick={handleSubmit} className="login-pg-btn bg-custom-dark-green text-custom-light-green2">Login</button>
                    </div>
                </form>
            </div> 

            <div className="flex justify-center mt-[-6em] ">
                <p className="text-custom-dark-green">New to platform?<a href="/register" className="no-underline"><span className="text-custom-light-green3">Join Essensa</span></a></p>
            </div>

            <Footer />       
        </>
     );
}
 
export default Login;