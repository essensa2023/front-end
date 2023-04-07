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
                <h1>Manage your CSR & ESG investments through a single platform</h1>
            </div>

        </>
     );
}
 
export default Home;