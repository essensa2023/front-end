import React from "react";
import "./footer.css";
import mailImage from "../images/mail-account-icon.png";
import location from "../images/location-icon.png";

const Footer = () => {
    return ( 
        <div className="footer-container">
            <div className="features-and-details">
                <div className="features-line">
                    <p>Services</p>
                    <p>Pricing</p>
                    <p>About Us</p>
                    <p>About ESG & CSR</p>
                </div>
                <div className="details-line">
                    {/* <p><img src={mailImage} />hi@essensa.com</p>
                    <p><img src={location} />Address</p>  */}

                    <p><img src={mailImage} className="mailimage-footer"/>hi@essensa.com</p>
                    <p><img src={location} className="location-footer"/>Address</p> 
                </div>
            </div>    

            <div className="ending-line-container">
                <div classname="logo-container">
                    hello
                </div>
                <div className="privacy-sections">
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Cookie Policy</p>
                    <p>Legal Notice</p>
                </div>
            </div>

        </div>
     );
}
 
export default Footer;



