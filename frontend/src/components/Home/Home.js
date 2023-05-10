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
import mailAccount from "../../images/mail-account-icon.png";
import analyticsIcon from "../../images/analytics-icon.png";
import fileIcon from "../../images/file-document-icon.png";

const Home = () => {
    return ( 
        <>
            <div>
                <NavBar />
            </div>

            {/* Below NavBar */}

            <div className="nav-container flex justify-between align-end bg-custom-light-green5 mr-64 ml-64 pl-16">

                <div className="nav-contents pt-24">
                    <h1 className="nav-heading mb-4 text-custom-dark-green">ESG made easy for you.</h1>
                    <p className="nav-content text-custom-black2 text-xl mb-4">
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

            <div className="our-services-container flex flex-col bg-custom-dark-green justify-center align-center mt-16">
                <h1 className="our-services text-custom-peach text-sm flex justify-center mt-4">OUR SERVICES</h1>

                <div className="our-services-content-container flex justify-between">

                    <div className="our-services-image ml-16">
                        <h1 className="text-custom-light-green2 relative mt-32 text-5xl bottom-16">How We Add Value</h1>
                        <img classname="services-image relative bottom-8" src={contentImage}></img>
                    </div>

                    <div className="our-services-content w-1/2 flex flex-col ">
                        <div>
                            <h2 className="text-3xl text-white mt-16">Project Management</h2>
                            <p>
                            Using state of the art project management tools, processes and strategic 
                            planning every step of the way, we ensure optimum resource utilisation, 
                            effective communication and collaboration between stakeholders, 
                            achieving intended objectives on schedule and on budget.
                            </p> 
                            <a href="#">Learn More</a>
                        </div>

                        <div>
                            <h2 className="text-3xl text-white mt-16">Project Management</h2>
                            <p>
                            Using state of the art project management tools, processes and strategic 
                            planning every step of the way, we ensure optimum resource utilisation, 
                            effective communication and collaboration between stakeholders, 
                            achieving intended objectives on schedule and on budget.
                            </p> 
                            <a href="#">Learn More</a>
                        </div>

                        <div>
                            <h2 className="text-3xl text-white mt-16">Project Management</h2>
                            <p>
                            Using state of the art project management tools, processes and strategic 
                            planning every step of the way, we ensure optimum resource utilisation, 
                            effective communication and collaboration between stakeholders, 
                            achieving intended objectives on schedule and on budget.
                            </p> 
                            <a href="#">Learn More</a>
                        </div>

                        <div>
                            <h2 className="text-3xl text-white mt-16">Project Management</h2>
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
            </div>

            {/* Manage Text */}

            <div className="manage-text">
                <h1>Manage your <span className="italics">CSR & ESG investments</span> through a single platform</h1>
            </div>

            {/* Projects */}

            <div className="analytics-card">
                    <img src={analyticsIcon} />
                    <h1>Analytics</h1>
            </div>

            <div className="assessment-card">
                    <img src={fileIcon} />
                    <h1>Assessment</h1>
            </div>

            <img src={analyticsImage} className="analytics-image" />
            <img src={ellipse} className="ellipse-1" />
            <img src={ellipse} className="ellipse-2" />

            {/* <div className="curves"> 
                <img src={curve1} className="curve-1" />
                <img src={curve2} className="curve-2" />
                <img src={curve3} className="curve-3" />
            </div> */}


            <div className="projects-outer">
                <div className="projects-inner">
                    <div className="equality-card hover:bg-green-500 transition ease-in-out duration-300">
                        <h3>Equality</h3>
                        <h1>2 Lakhs</h1>
                        <p>1 Project Completed</p>
                    </div>

                    <div className="social-card hover:bg-custom-peach transition ease-in-out duration-300">
                        <h3>Social</h3>
                        <h1>1 Lakhs</h1>
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
                    {/* <p><img src={mailAccount} />hi@essensa.com</p> */}
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
                            <button type="submit" className="schedule-btn">Schedule a Call <img src={arrow} className="arrow-vector"/></button>
                        </div>
                    </form>
                </div> 
            </div>

            {/* Subscription */}

            <div className="subscription-plans-container flex flex-col">

                <div className="choose-right-plan mb-16">
                    <h1 className="ml-64">Choose the Right Plan <span className="italics"> for Your CSR and ESG Investment Goals </span> </h1>
                </div>


                <div className="plans-container w-full flex justify-around ml-96">

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
                    <Card 
                        time="1.5 years"
                        amount1="2 Lakhs"
                        amount2="5 Lakhs"    
                    />

                </div>

            </div>


            <div>
                <Footer />
            </div>
        </>
     );
}
 
export default Home;