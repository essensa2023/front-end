import NavBar from "../NavBar";
import "./home.css";
import navImage from "../../images/simon-lee-HmNmpnIZlU0-unsplash.png";
import contentImage from "../../images/planet-volumes-Olu4k8c4A5Q-unsplash.png";
import analyticsImage from "../../images/analytics-1.png";
import ellipse from "../../images/ellipse-1.png";
import arrow from "../../images/arrow.png";
import curve1 from "../../images/curve-1.png";
import curve2 from "../../images/curve-2.png";
import curve3 from "../../images/curve-3.png";
import Card from "./subCard";
import Footer from "../Footer";

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
                    <button className="nav-button">Get Started <img src={arrow} className="arrow-vector"/></button>
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

            <div className="analytics-card">
                    <h1>Analytics</h1>
            </div>

            <div className="assessment-card">
                    <h1>Assessment</h1>
            </div>

            <img src={analyticsImage} className="analytics-image" />
            <img src={ellipse} className="ellipse-1" />
            <img src={ellipse} className="ellipse-2" />

            {/* <div className="curves"> */}
                {/* <img src={curve1} className="curve-1" />
                <img src={curve2} className="curve-2" />
                <img src={curve3} className="curve-3" /> */}
            {/* </div> */}


            <div className="projects-outer">
                <div className="projects-inner">
                    <div className="equality-card">
                        <h3>Equality</h3>
                        <h1>2 Lakhs</h1>
                        <p>1 Project Completed</p>
                    </div>
                </div>
            </div>

            {/* Sign Up and Login Sections */}

            <div className="signup-login-section">
                <h1>Essensa’s all-in-one web based portfolio management system </h1>
                <div className="sign-log-btns">
                    <a className="signup-btn">Sign Up</a>
                    <button className="login-btn" href="#">Login <img src={arrow} className="arrow-vector" /> </button>
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
                    <form>
                        <div class="form-group">
                            {/* <label for="name">Name:</label> */}
                            <input type="text" id="name" name="name" placeholder="Name:" />
                        </div>

                        <div class="form-group">
                            {/* <label for="email">Email:</label> */}
                            <input type="email" id="email" name="email" placeholder="Email:" />
                        </div>

                        <div class="form-group">
                            {/* <label for="password">Password:</label> */}
                            <input type="text" id="password" name="password" placeholder="Password:" />
                        </div>

                        <div class="form-group">
                            {/* <label for="password">Password:</label> */}
                            <input type="text" id="company" name="company" placeholder="Company:" />
                        </div>

                        <div class="form-group">
                            {/* <label for="password">Password:</label> */}
                            <input type="text" id="topic" name="topic" placeholder="Topic:" />
                        </div>

                        <div class="form-group">
                            {/* <label for="password">Password:</label> */}
                            <input type="text" id="message" name="message" placeholder="Message:" />
                        </div>

                        <div class="form-group">
                            <button type="submit">Schedule a Call</button>
                        </div>
                    </form>
                </div> 
            </div>

            {/* Subscription */}

            <div className="subscription-plans-container">
                <div className="choose-right-plan">
                    <h1>Choose the Right Plan <span className="italics"> for Your CSR and ESG Investment Goals </span> </h1>
                </div>


                <div classname="plans-container">

                    <Card 
                        time="3 years"
                        amount1="1.5 Lakhs"
                        amount2="3 Lakhs"    
                    />
                    <Card 
                        time="1.5 years"
                        amount1="2 Lakhs"
                        amount2="5 Lakhs"    
                    />
                    {/* <Card /> */}

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

                {/* Footer */}

                <Footer />

            </div>

        </>
     );
}
 
export default Home;