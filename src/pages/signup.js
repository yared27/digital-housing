import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const SignupForm = ()=>{
    const navigate =useNavigate();
    function handleSubmit(event) {
        event.preventDefault();
        const form = event.target;
        if (form.checkValidity()) {
            navigate('/Identifier');
        }
        else {
            form.reportValidity();
        }

    }
    return(
            <form onSubmit={handleSubmit}>
             <div className="max-w-4xl mx-auto p-4 mx-auto mt-7  P-8 bg-white shadow-lg rounded-lg">
               <h1 className="my-1 text-center mb-6 font-bold">  SIGN UP</h1>
                <div className="flex flex-col md:flex-row gap-8">
                 <div className="flex-1 space-y-4">
                       <div>
                            <label htmlFor="FNAME" className="block font-medium mb-1">FIRST NAME</label>
                            <input type="text" id="FNAME" placeholder="ENTER YOUR NAME " className="w-full p-1 border border-gray-300 rounded" required/>
                        </div>
                        <div>
                            <label htmlFor="LNAME" className="block font-medium mb-1">LAST NAME</label>
                            <input type="text" className="w-full border border-gray-300 p-1 rounded" id="LNAME" placeholder="ENTER YOUR LAST NAME" required/>
                        </div>
                        <div>
                            <label htmlFor="EMAIL" className="block font-medium mb-1" >EMAIL</label>
                            <input type="text" className="border boder-gray-300 w-full p-1 rounded" id="EMAIL" placeholder="ENTER YOUR EMAIL" required/>
                        </div>
                        <div>
                            <label htmlFor="PHON_NO" className="block mb-1 font-medium">PHONE NUMBER</label>
                            <input type="number" className="w-full border boder-gray-300 p-1 rounded" id="PHON_NO" placeholder="930833496" required/>
                        </div>
                        <div>
                            <label htmlFor="COUNTRY" className="block font-medium mb-1">COUNTRY</label>
                            <input type='text' id="COUNTRY" className="w-full border border-gray p-1 rounded" placeholder="Ethiopia" required/>
                        </div>
                  </div>
                 <div className="flex-1 space-y-4">
                    <div>
                        <label htmlFor="REGION"class className="block font-medium mb-1">REGION</label>
                        <input type="text" id="REGION" className="w-full border border-gray-300 p-1 rounded" placeholder="SOUTH ETHIOPIA" required/>
                    </div>
                    <div>
                        <label htmlFor="CITY" className="block font-medium mb-1">CITY</label>
                        <input type="text" id="CITY" className="w-full border border-gray-300 rounded p-1" placeholder="ARBA MINCH" required/>
                    </div>
                    <div>
                        <label htmlFor="SUBCITY" className="block font-medium mb-1">SUBCITY</label>
                        <input id="SUBCITY" type="text" className="w-full border border-gray-300 rounded p-1" placeholder="SECHA" required/>
                    </div>
                    <div>
                        <label htmlFor="PASSWORD" className="block font-medium mb-1">SET PASSWORD</label>
                        <input id="PASSWORD" className="w-full border border-gray-300 p-1 rounded" type="password" required/>
                    </div>
                    <div>
                        <label htmlFor="CONFIRM" className="block font-medium mb-1">CONFIRM PASSWORD</label>
                        <input id="CONFIRM" className="w-full border border-gray-300 p-1 rounded " type="password" required/>
                    </div>
                 </div>
                
                </div> 
                <div className="text-center mb-3 mt-8 mx-[400px]">  
                <button className="border block bg-red-700 rounded hover:bg-red-500 text-white font-bold py-2 px-4 " type="submit">Submit</button>
                </div>
            </div> 
            </form>
    );
};
export default SignupForm
