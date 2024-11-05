import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useNavigation } from "react-router-dom";
import SignupForm from "./signup";
const LoginForm = ()=>{
    const navigate=useNavigate()
    function handleSubmit(event){
        event.preventDefault();
        const form=event.target;
        if(form.checkValidity()){
            navigate('/Identifier')
        }
        else{
            form.reportValidity()
        }

    }
    return(
      <div className="flex flex-col items-center">
        <form onSubmit={handleSubmit} className=" mt-32 p-6 rounded bg-white shadow-lg">
            <div>
                <label className="block font-medium mb-4">EMAIL</label>
                <input className="w-full p-2 border border-gray-300" required/>
            </div>
            <div>
                <label className="block mb-4 font-medium ">PASSWORD</label>
                <input className="border border-gray-300 w-full p-2" required/>
            </div>
            <div>
             <button type="submit" className="border mt-8 mx-[150px] bg-blue-500 hover:bg-blue-300 p-2 rounded w-4xl text-white">Submit</button>
             </div>
         </form> 
            <div>
              <br/>
              <a href="4" className=" text-blue-500">FORGOT PASSWORD</a>
              <br/>
              <Link to={"/SignupForm"}className="text-blue-500" > CREATE AN ACOUNT</Link>

              </div>
          </div>
      
);
};
export default LoginForm;