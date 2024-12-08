import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
const SignupForm = ()=>{
    const [formData,setFormData]=useState({
        FNAME:'',
        LNAME:'',
        EMAIL:'',
        PHON_NO:'',
        COUNTRY:'',
        REGION:'',
        CITY:'',
        SUBCITY:'',
        PASSWORD:'',
        CONFIRM:''

    })
    const [error,setError]=useState('');
    const navigate =useNavigate();
    const handleChange=(e)=>{
        const {name,value}=e.target
        setFormData({ ...formData,[name]:value})
    }
    const  handleSubmit=async(e)=> {
        e.preventDefault();
        const form = e.target;
        console.log("handle called")
        if(formData.PASSWORD!==formData.CONFIRM){
            toast.error("Passwords do not match!",{
                position:'bottom-right',
                autoClose:3000
            })
            // setError('Passwords do not match.');
            return;
        }

        else if  (form.checkValidity()) {
            if (formData.PASSWORD.length<8){
                toast.error("The password must contain at least 8 character",{
                    position:'top-center',
                    autoClose:3000
                })
                return
            }
            try{
                const response=await axios.post('http://localhost:5000/auth/signup',formData, {headers:{'Content-Type':'application/json',}},);
                navigate('/Identifier');
            }
            catch(error){
                    if(error.response.status === 400){
                        toast.error("Email Already Registered ",{
                            position:'top-right',
                            autoClose:3000,
                        });
                        return;
                    }
                console.error("Error sending form data:",error);
            }
        }
        else {
            form.reportValidity();
        }
    };
    return(
            <form  onSubmit={handleSubmit}>
             <div className="max-w-4xl mx-auto p-4 mx-auto mt-7  P-8 bg-white shadow-lg rounded-lg">
               <h1 className="my-1 text-center mb-6 font-bold">  SIGN UP</h1>
                <div className="flex flex-col md:flex-row gap-8">
                 <div className="flex-1 space-y-4">
                       <div>
                            <label htmlFor="FNAME" className="block font-medium mb-1">FIRST NAME</label>
                            <input type="text" id="FNAME" placeholder="ENTER YOUR NAME " className="w-full p-1 border border-gray-300 rounded"  name="FNAME" value={formData.FNAME} onChange={handleChange} required/>
                        </div>
                        <div>
                            <label htmlFor="LNAME" className="block font-medium mb-1">LAST NAME</label>
                            <input type="text" className="w-full border border-gray-300 p-1 rounded" id="LNAME" placeholder="ENTER YOUR LAST NAME" name="LNAME" value={formData.LNAME} onChange={handleChange} required/>
                        </div>
                        <div>
                            <label htmlFor="EMAIL" className="block font-medium mb-1" >EMAIL</label>
                            <input type="text" className="border boder-gray-300 w-full p-1 rounded" id="EMAIL" placeholder="ENTER YOUR EMAIL" name='EMAIL' value={formData.EMAIL} onChange={handleChange} required/>
                        </div>
                        <div>
                            <label htmlFor="PHON_NO" className="block mb-1 font-medium">PHONE NUMBER</label>
                            <input type="number" className="w-full border boder-gray-300 p-1 rounded" id="PHON_NO" placeholder="930833496" name="PHON_NO" value={formData.PHON_NO} onChange={handleChange} required/>
                        </div>
                        <div>
                            <label htmlFor="COUNTRY" className="block font-medium mb-1">COUNTRY</label>
                            <input type='text' id="COUNTRY" className="w-full border border-gray p-1 rounded" placeholder="Ethiopia" name="COUNTRY" value={formData.COUNTRY} onChange={handleChange} required/>
                        </div>
                  </div>
                 <div className="flex-1 space-y-4">
                    <div>
                        <label htmlFor="REGION"class className="block font-medium mb-1">REGION</label>
                        <input type="text" id="REGION" className="w-full border border-gray-300 p-1 rounded" placeholder="SOUTH ETHIOPIA" name="REGION" value={formData.REGION} onChange={handleChange} required/>
                    </div>
                    <div>
                        <label htmlFor="CITY" className="block font-medium mb-1">CITY</label>
                        <input type="text" id="CITY" className="w-full border border-gray-300 rounded p-1" placeholder="ARBA MINCH" name="CITY" value={formData.CITY} onChange={handleChange} required/>
                    </div>
                    <div>
                        <label htmlFor="SUBCITY" className="block font-medium mb-1">SUBCITY</label>
                        <input id="SUBCITY" type="text" className="w-full border border-gray-300 rounded p-1" placeholder="SECHA" name="SUBCITY" value={formData.SUBCITY} onChange={handleChange} required/>
                    </div>
                    <div>
                        <label htmlFor="PASSWORD" className="block font-medium mb-1">SET PASSWORD</label>
                        <input id="PASSWORD" className="w-full border border-gray-300 p-1 rounded" type="password" name="PASSWORD" value={formData.PASSWORD} onChange={handleChange} required/>
                    </div>
                    <div>
                        <label htmlFor="CONFIRM" className="block font-medium mb-1">CONFIRM PASSWORD</label>
                        <input id="CONFIRM" className="w-full border border-gray-300 p-1 rounded " type="password" name="CONFIRM" value={formData.CONFIRM} onChange={handleChange} required/>
                    </div>
                 </div>
                </div> 
                <div className="text-center mb-3 mt-8 mx-[400px]">  
                <button className="border block bg-red-700 rounded hover:bg-red-500 text-white font-bold py-2 px-4 " type="submit" >Register</button>
                </div>
            </div> 
            </form>
    );
};
export default SignupForm
// action=" http://localhost:5000/signup_page" method="post"