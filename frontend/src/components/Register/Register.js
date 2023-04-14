import React from "react";
import logoImage from "../../images/logo-image.png";
import "./register.css";
import Footer from "../Footer";

const Register = () => {
    return ( 
        <>
          <div className="flex flex-col items-center mx-auto mt-10">
            <img src={logoImage} alt="logo"/>
            <h1 className="text-custom-dark-green leading-12 font-light">Welcome to <span>Essensa</span></h1>
            <p className="text-xs">Please provide us with the following details so we can better understand your company and its ESG needs. We </p>
            <p className="text-xs">take data privacy seriously and will only use your information for the purpose of providing tailored ESG solutions.</p>
          </div>  

          <div className="option-container flex align-center justify-center mt-4">
             <p className="text-custom-grey text-xs"> <span className="inline-block rounded-full border border-custom grey px-1 py-0.4">1</span> Company Details</p> 
             <p className="text-custom-grey text-xs"> <span className="inline-block rounded-full border border-custom grey px-1 py-0.4">2</span> ESG Details</p> 
             <p className="text-custom-grey text-xs"> <span className="inline-block rounded-full border border-custom grey px-1 py-0.4">3</span> Create a Password</p> 
          </div>

          <Footer />
        </>
     );
}
 
export default Register;