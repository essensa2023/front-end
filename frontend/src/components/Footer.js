import React from "react";
import "./footer.css";
import mailImage from "../images/mail-account-icon.png";
import location from "../images/location-icon.png";
import logo from "../images/logo.png";


const Footer = () => {
    return ( 
        <div className="footer-container w-full h-auto bg-custom-dark-green2 mt-32">

            <div className="features-and-details flex align-center justify-around pt-16">
                <div className="features-line">
                    <p className="text-custom-light-green1">Services</p>
                    <p className="text-custom-light-green1">Pricing</p>
                    <p className="text-custom-light-green1">About Us</p>
                    <p className="text-custom-light-green1">About ESG & CSR</p>
                </div>

                <div className="details-line">
                    <p className="text-white flex gap-2"><img src={mailImage} className="mailimage-footer"/>hi@essensa.com</p>
                    <p className="text-white flex gap-2"><img src={location} className="location-footer"/>Address</p> 
                </div>

            </div>    

            <div className="ending-line-container">
                <div classname="logo-container">
                    hello
                </div>
                <div className="privacy-sections flex align-center justify-evenly pb-4 pt-4">
                    <div>
                        <img src={logo} />
                    </div>
                    <div className="privacy-items flex align-center justify-around gap-8">
                        <p className="text-custom-light-green1 text-xs">Privacy Policy</p>
                        <p className="text-custom-light-green1 text-xs">Terms of Service</p>
                        <p className="text-custom-light-green1 text-xs">Cookie Policy</p>
                        <p className="text-custom-light-green1 text-xs">Legal Notice</p>
                    </div>
                </div>
            </div>

        </div>
     );
}
 
export default Footer;



