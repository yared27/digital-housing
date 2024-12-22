import {useDropzone} from 'react-dropzone';
import React, { useState } from "react";
import { Link } from "react-router-dom";
const HomesList = ()=>{
    const [FormData,setFormData]=useState({
        type:'',
        city:'',
        cost:'',
        contacts:'',
        images:[]
    });
    const handelchange=(e)=>{
        const {name,value}=e.target;
        setFormData({...FormData,[name]:value});
    }
       
    const {getRootProps,getInputProps}=useDropzone({
        accept:'image/*',
        multiple:true,
        maxFiles:3,
        onDrop:(acceptedFiles)=>{
            setFormData({
                ...FormData,
                images:acceptedFiles,
            });
        }
    });
    const handlesubmit=(e)=>{
           e.preventDefault();
           console.log(FormData);
    }
    return(
    <section>
        <h1 className="font-medium bold m-6 text-center" >
            Upload Your property Details
        </h1>
        <form onSubmit={handlesubmit} className='max-w-md mx-auto my-5 p-6 bg-white shadow-lg rounded h-[500px] overflow-y-auto' >
            <div {...getRootProps()} className='border border-gray-500 bg-blue-900 hover:bg-red-400 p-8  my-4 w-full   flex items-center rounded-md cursor-pointer '>
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
                <input type="text" id="description" name='contacts' value={FormData.contacts} className="border border-gray-300 p-2 w-full rounded" onChange={handelchange} required/>
            </div>
            <div>
                <label htmlFor='cost' className='border border-gray-800 block p-2 mt-2 mb-2 rounded'>Cost</label>
                <input type='phone-umber' id='cost' name='cost' value={FormData.cost} className='w-full border border-gray300 rounded p-2'   onChange={handelchange} required/>
            </div>
            <div>
                <label htmlFor='city' className='block border border-gray-800 rounded-md p-2 mt-2 mb-2'>city</label>
                <input type='text' id='city' name='city'className='border border-gray-300 w-full p-2 rounded-md' value={FormData.city} onChange={handelchange} required/>

            </div>
            <div>
                <label htmlFor='type' className='block mt-2 mb-2 p-2 border border-gray-800 rounded-md'>Type</label>
                <input id='type' className='border border-gray-300 p-2 w-full rounded-md mb-2' placeholder='vila' name='type' value={FormData.type} onChange={handelchange} required/>
            </div>
            <div>
              <button type='submit' className=' mx-[150px] rounded border border-gray-100 bg-green-500 px-6 py-2'>submit</button>
            </div>
           
        </form>
       {FormData.images.length>0 &&(FormData.images.map((file,index)=>{
        <img
        key={index}
        src={URL.createObjectURL(file)}
        alt={`Preview ${index}`}
        className='w-24 h-24'
        />
       }))}

    </section>

    );

}
export default HomesList;
// {FormData.images.length > 0 && (
//     <div className="flex flex-wrap gap-2 mt-4">
//       {FormData.images.map((file, index) => (
//         <img
//           key={index}
//           src={URL.createObjectURL(file)}
//           alt={`Preview ${index}`}
//           className="w-24 h-24 object-cover rounded"
//         />
//       ))}
//     </div>
//   )}