import NavBar from "../NavBar";
import "./home.css";
import navImage from "../../images/simon-lee-HmNmpnIZlU0-unsplash.png";
import contentImage from "../../images/planet-volumes-Olu4k8c4A5Q-unsplash.png";

const Home = () => {
    return ( 
        <>
            <NavBar />

            {/* Below NavBar */}

            <div className="nav-container">

                <div className="nav-content">
                    <h1 className="nav-heading">ESG made easy for you.</h1>
                    <p className="nav-content">
                        Invest with purpose and measure impact with ease. 
                        Connect with organizations that align with your CSR and ESG goals. 
                        Make informed investments and manage portfolios with ease. 
                        Make a difference with your investments.
                    </p>
                    <button className="nav-button">Get Started</button>
                </div>

                <div className="nav-image-container">
                    <img classname="nav-image" src={navImage}></img>
                </div>
            </div>

            {/* Our Services component */}

            <div className="our-services-container">
                <h1 className="our-services">OUR SERVICES</h1>

                <div className="our-services-content-container">

                    <div className="our-services-image">
                        <h1>How We Add Value</h1>
                        <img classname="services-image" src={contentImage}></img>

                    </div>

                    <div className="our-services-content">
                        <h2>Project Management</h2>
                        <p>
                           Using state of the art project management tools, processes and strategic 
                           planning every step of the way, we ensure optimum resource utilisation, 
                           effective communication and collaboration between stakeholders, 
                           achieving intended objectives on schedule and on budget.
                        </p> 

                        <a href="#">Learn More</a>

                        <h2>Project Management</h2>
                        <p>
                           Using state of the art project management tools, processes and strategic 
                           planning every step of the way, we ensure optimum resource utilisation, 
                           effective communication and collaboration between stakeholders, 
                           achieving intended objectives on schedule and on budget.
                        </p> 

                        <a href="#">Learn More</a>

                        <h2>Project Management</h2>
                        <p>
                           Using state of the art project management tools, processes and strategic 
                           planning every step of the way, we ensure optimum resource utilisation, 
                           effective communication and collaboration between stakeholders, 
                           achieving intended objectives on schedule and on budget.
                        </p> 

                        <a href="#">Learn More</a>

                        <h2>Project Management</h2>
                        <p>
                           Using state of the art project management tools, processes and strategic 
                           planning every step of the way, we ensure optimum resource utilisation, 
                           effective communication and collaboration between stakeholders, 
                           achieving intended objectives on schedule and on budget.
                        </p> 

                        <a href="#">Learn More</a>
                    </div>

                </div>
            </div>

            {/* Manage Text */}

            <div className="manage-text">
                <h1>Manage your <span className="italics">CSR & ESG investments</span> through a single platform</h1>
            </div>

            {/* Projects */}

            {/* <div className="projects-outer">
                hello
            </div> */}

            {/* Sign Up and Login Sections */}

            <div className="signup-login-section">
                <h1>Essensa’s all-in-one web based portfolio management system </h1>
                <div className="sign-log-btns">
                    <a className="signup-btn">Sign Up</a>
                    <button className="login-btn" href="#">Login</button>
                </div>
            </div>


            {/* Contact Section */}

            <div className="contact-container">
                <div className="contact-info">
                    <h1>Contact Us</h1>

                    <p>hi@essensa.com</p>
                    <p>Location</p>
                </div>
                 
                <div className="contact-form">
                    hello
                </div> 
            </div>

            {/* Subscription */}

            <div className="subscription-plans-container">
                <div className="choose-right-plan">
                    <h1>Choose the Right Plan <span className="italics"> for Your CSR and ESG Investment Goals </span> </h1>
                </div>


                <div classname="plans-container">
                    <div className="card-1">
                        <h1>3 Months</h1>
                        <p className="service-tag">Services Included:</p>
                        <p className="duties-tag">Consulting,Auditing & Web Platform</p>

                        <h6>Tier-1 Companies</h6>
                        <h2>1.5 Lakhs</h2>

                        <h5>Tier-1 Companies</h5>
                        <h3>3.3 Lakhs</h3>

                        <button>Subscribe</button>
                    </div>

                    {/* <div className="card-2">
                        <h1>3 Months</h1>
                        <p className="service-tag">Services Included:</p>
                        <p className="duties-tag">Consulting,Auditing & Web Platform</p>

                        <h6>Tier-1 Companies</h6>
                        <h2>1.5 Lakhs</h2>

                        <h5>Tier-1 Companies</h5>
                        <h3>3.3 Lakhs</h3>

                        <button>Subscribe</button>
                    </div> */}


                </div>

            </div>

        </>
     );
}
 
export default Home;