import React from "react";
import "./subcard.css";



const Card = (props) => {

    return ( 
        <>
          <div className="card-1 flex flex-col align-center p-6 gap-16 justify-around bg-custom-light-green5 w-96">
            <div className="flex flex-col gap-8">
              <h1 className="flex justify-center">{props.time}</h1>
              <p className="service-tag mb-8 ml-2">Services Included:</p>
              <p className="duties-tag ml-2">Consulting,Auditing & Web Platform</p>

              <h6 className="flex justify-center">Tier-1 Companies</h6>
              <h2 className="flex justify-center">{props.amount1}</h2>

              <h6 className="flex justify-center">Tier-1 Companies</h6>
              <h2 className="flex justify-center">{props.amount2}</h2>

              <button className="flex justify-center align-center bg-custom-dark-green text-custom-light-green2 pt-2 pb-2 pl-4 pr-4 w-1/2 ml-24">Subscribe</button>
            </div>
          </div>
        </>
     );
}
 
export default Card;