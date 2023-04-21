import React, {useState} from "react";
import logoImage from "../../images/logo-image.png";
import "./register.css";
import Footer from "../Footer";

const Register = () => {

    const [companyName, setCompanyName] = useState('');
    const [industry, setIndustry] = useState('');
    const [sector, setSector] = useState('');
    const [address, setAddress] = useState('');
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log('Form submitted!');
      console.log(`Company name: ${companyName}`);
      console.log(`Industry: ${industry}`);
      console.log(`Sector: ${sector}`);
      console.log(`Address: ${address}`);
      console.log(`Full Name: ${fullName}`);
      console.log(`Email: ${email}`);
      console.log(`Phone: ${phone}`);
    };

    return ( 
        <>
          <div className="flex flex-col items-center mx-auto mt-10">
            <img src={logoImage} alt="logo"/>
            <h1 className="text-custom-dark-green leading-12 font-light">Welcome to <span>Essensa</span></h1>
            <p className="text-xs">Please provide us with the following details so we can better understand your company and its ESG needs. We </p>
            <p className="text-xs">take data privacy seriously and will only use your information for the purpose of providing tailored ESG solutions.</p>
          </div>  

          <div className="option-container flex align-center justify-center mt-4">
             <p className="text-custom-grey text-xs"> <span className="inline-block rounded-full border border-custom grey px-1 py-0.4">1</span> Company Details</p> 
             <p className="text-custom-grey text-xs"> <span className="inline-block rounded-full border border-custom grey px-1 py-0.4">2</span> ESG Details</p> 
             <p className="text-custom-grey text-xs"> <span className="inline-block rounded-full border border-custom grey px-1 py-0.4">3</span> Create a Password</p> 
          </div>

          <div className="company-details flex flex-col">

              <div className="details-of-company flex flex-col items-center justify-center mt-4">
                  <h1 className="text-base text-custom-dark-green mb-4">Details of company</h1>

                  <form onSubmit={handleSubmit}>
                      <div>
                        <label htmlFor="companyName" className="font-medium">Company Name:</label>
                        <input
                          type="text"
                          id="companyName"
                          value={companyName}
                          onChange={(event) => setCompanyName(event.target.value)}
                          className="bg-white border border-gray-300 rounded-md px-3 py-2 mt-1 mb-3 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                        />
                      </div>
                      <div className="flex flex-col mb-4">
                        <label htmlFor="industry" className="font-medium">Industry:</label>
                        <select
                          id="industry"
                          value={industry}
                          onChange={(event) => setIndustry(event.target.value)}
                          className="bg-white border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                        >
                          <option value="">Select an industry</option>
                          <option value="Technology">Technology</option>
                          <option value="Healthcare">Healthcare</option>
                          <option value="Finance">Finance</option>
                        </select>
                      </div>
                      <div className="flex flex-col mb-4">
                        <label htmlFor="sector" className="font-medium">Sector:</label>
                        <select
                          id="sector"
                          value={sector}
                          onChange={(event) => setSector(event.target.value)}
                          className="bg-white border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                        >
                          <option value="">Select a sector</option>
                          <option value="Private">Private</option>
                          <option value="Public">Public</option>
                          <option value="Non-profit">Non-profit</option>
                        </select>
                      </div>
                      <div className="flex flex-col mb-4">
                        <label htmlFor="address" className="font-medium">Address:</label>
                        <textarea
                          id="address"
                          value={address}
                          onChange={(event) => setAddress(event.target.value)}
                          className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                        />
                      </div>
                  </form>
                </div>

              <div className="details-of-company-rep flex flex-col relative bottom-48 items-center justify-center mt-64">
                <h1 className="text-base text-custom-dark-green mb-4">Details of company representative</h1>

                <form onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor="fullName" className="font-medium">Full Name:</label>
                      <input
                        type="text"
                        id="fullName"
                        value={fullName}
                        onChange={(event) => setFullName(event.target.value)}
                        className="bg-white border border-gray-300 rounded-md px-3 py-2 mt-1 mb-3 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="font-medium">Email:</label>
                      <input
                        type="text"
                        id="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        className="bg-white border border-gray-300 rounded-md px-3 py-2 mt-1 mb-3 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                      />
                    </div>  

                    <div>
                      <label htmlFor="phone" className="font-medium">Phone number:</label>
                      <input
                        type="text"
                        id="phone"
                        value={phone}
                        onChange={(event) => setPhone(event.target.value)}
                        className="bg-white border border-gray-300 rounded-md px-3 py-2 mt-1 mb-3 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                      />
                    </div>
                   
                </form>
              </div>

              <div className="btn-container flex justify-center">
                <button onClick={handleSubmit} className="next-btn bg-custom-dark-green text-custom-light-green2">Next</button>
              </div>
          </div>

          <Footer />
        </>
     );
}
 
export default Register;