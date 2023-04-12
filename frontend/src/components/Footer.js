import React from "react";
import "./footer.css";

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
                    <p>hi@essensa.com</p>
                    <p>Address</p> 
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



