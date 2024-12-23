import {useDropzone} from 'react-dropzone';
import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from 'axios';
import Payemt from './payement_gate_way';
import { useNavigate } from 'react-router-dom';
const HomesList = ()=>{
    const navigate=useNavigate()
    const [FormDetails,setFormDetails]=useState({
        type:'',
        city:'',
        cost:'',
        contact:'',
        images:[]
    });
    const handelchange=(e)=>{
        const {name,value}=e.target;
        setFormDetails({...FormDetails,[name]:value});
    }
  
    const {getRootProps,getInputProps}=useDropzone({
        accept:'image/*',
        multiple:true,
        maxFiles:3,
        onDrop:(acceptedFiles)=>{
            setFormDetails({
                ...FormDetails,
                images:acceptedFiles,
            });
        }
    });
    const handlesubmit=async (e)=>{
           e.preventDefault();
           const formDataTosend=new FormData();
           formDataTosend.append('type',FormDetails.type);
           formDataTosend.append('city',FormDetails.city);
           formDataTosend.append('cost',FormDetails.cost);
           formDataTosend.append('contact',FormDetails.contact);
           FormDetails.images.forEach((file)=>{
           formDataTosend.append('images',file);
           });
        //    console.log(FormData);
           try{
            const response= await axios.post('http://localhost:5000/owner_property/owner_property',formDataTosend);
            navigate('/Payemt');
           }
           catch(error){
            console.log(error.response);
           }

           
    }
    useEffect(()=>{
        return()=>{FormDetails.images.forEach((file)=>URL.revokeObjectURL(file));};

    },
   [FormDetails.images] 
);
   
    return(

    <section>
        <h1 className="font-medium bold m-6 text-center" >
            Upload Your property Details
        </h1>
        <form onSubmit={handlesubmit} className='max-w-md mx-auto my-5 p-6 bg-white shadow-lg rounded h-[500px] overflow-y-auto' >
            <div {...getRootProps()} className='border border-gray-500 bg-blue-900 hover:bg-red-400 p-8  my-4 w-full   flex items-center rounded-md cursor-pointer ' >
                <input {...getInputProps()}/>
                <p className='text-center text-white text-gray-500 '>
                     Drag & drop up to 3 images here ,or click to select files
                </p>
            </div>
            {/* <div> */}
            {/* <label htmlFor="name" className="p-1 block border ">Name</label>
               <input type="text" id="name" name='name' value={FormData.name} className="border border-gray-300 rounded p-2" required/>
            </div> */}
           
            <div>
                <label htmlFor="decription" className='border border-gray-800 p-2 block mt-2 mb-2 rounded-md' >Contacts 
                </label>
                <input type="text" id="description" name='contact' value={FormDetails.contact} className="border border-gray-300 p-2 w-full rounded" onChange={handelchange} required/>
            </div>
            <div>
                <label htmlFor='cost' className='border border-gray-800 block p-2 mt-2 mb-2 rounded'>Cost</label>
                <input type='phone-umber' id='cost' name='cost' value={FormDetails.cost} className='w-full border border-gray300 rounded p-2'   onChange={handelchange} required/>
            </div>
            <div>
                <label htmlFor='city' className='block border border-gray-800 rounded-md p-2 mt-2 mb-2'>city</label>
                <input type='text' id='city' name='city'className='border border-gray-300 w-full p-2 rounded-md' value={FormDetails.city} onChange={handelchange} required/>

            </div>
            <div>
                <label htmlFor='type' className='block mt-2 mb-2 p-2 border border-gray-800 rounded-md'>Type</label>
                <input id='type' className='border border-gray-300 p-2 w-full rounded-md mb-2' placeholder='vila' name='type' value={FormDetails.type} onChange={handelchange} required/>
            </div>
            <div>
              <button type='submit' className=' hover:bg-red-500 mx-[150px] rounded border border-gray-100 bg-green-500 px-6 py-2'>submit</button>
            </div>
           
        </form>
       {FormDetails.images.length &&FormDetails.images.length>0 &&(FormDetails.images.map((file,index)=>{
        return (<img
        key={index}
        src={URL.createObjectURL(file)}
        alt={`Preview ${index}`}
        className='w-24 h-24'
        />)
       }))}

    </section>

    );

}
export default HomesList;
