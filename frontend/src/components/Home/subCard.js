import React from "react";
import "./subcard.css";

const Card = (props) => {
    return ( 
        <>
          <div className="card-1">
            <h1>{props.time}</h1>
            <p className="service-tag">Services Included:</p>
            <p className="duties-tag">Consulting,Auditing & Web Platform</p>

            <h6>Tier-1 Companies</h6>
            <h2>{props.amount1}</h2>

            <h5>Tier-1 Companies</h5>
            <h3>{props.amount2}</h3>

            <button>Subscribe</button>
          </div>
        </>
     );
}
 
export default Card;