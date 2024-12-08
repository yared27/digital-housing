import React,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { useNavigation } from "react-router-dom";
import SignupForm from "./signup";
import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
const LoginForm = ()=>{
    const [formData,setFormData]=useState({
        EMAIL:'',
        PASSWORD:''
    })
    const [error,setError]=useState('')
    const navigate=useNavigate();
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormData({ ...formData,[name]:value});

    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const form=e.target;
        if(form.checkValidity()){
          try{
            const response=await axios.post('http://localhost:5000/auth/login',formData);
            if(response.status==200){
              navigate('/Identifier');

            }
            else{
                console.log("cant access ")
            }
          }
          catch(error){
            if(error.response){
                setError(error.response.data);
                      }
            else{
                setError('An error occurred. please try again later.')
                console.log('Error sending form data:',error);
            }

        }
        

    }
         else{
             form.reportValidity();
         }
    }
    return(
      <div className="flex flex-col items-center">
        <form onSubmit={handleSubmit} className=" mt-32 p-6 rounded bg-white shadow-lg">
            <div>
                <label className="block font-medium mb-4">EMAIL</label>
                <input type ='email' className="w-full p-2 border border-gray-300" name="EMAIL" value={formData.EMAIL} onChange={handleChange} required/>
            </div>
            <div>
                <label className="block mb-4 font-medium ">PASSWORD</label>
                <input type="password" className="border border-gray-300 w-full p-2" name="PASSWORD" value={formData.PASSWORD} onChange={handleChange} required/>
            </div>
            <div>
             <button type="submit" className="border mt-8 mx-[150px] bg-blue-900 hover:bg-blue-600 p-2 rounded w-4xl text-white">Submit</button>
             </div>
         </form> 
            <div>
              <br/>
              <a href="4" className=" text-blue-900">FORGOT PASSWORD</a>
              <br/>
              <Link to={"/SignupForm"}className="text-blue-900" > CREATE AN ACOUNT</Link>

              </div>
          </div>
      
);
};
export default LoginForm;