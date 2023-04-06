import NavBar from "../NavBar";
import "./home.css";

const Home = () => {
    return ( 
        <>
            <NavBar />
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
            </div>
        </>
     );
}
 
export default Home;