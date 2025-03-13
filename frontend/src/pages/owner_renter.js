import React from "react";
import HomesList from "./owner_page";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Identifier= ()=>{
    const navigators=useNavigate();
    const navigat=()=>{
        navigators("/HomesList")

    }
    return(
        <div className=" flex flex-col text-center ">
        <div className="m-auto flex items-center h-screen max-w-6xl mt-20 mb-6 ">
            <p className="text-left"> Our platform offers a seamless experience for browsing rental properties,
                exploring virtual tours, and managing your housing needs online. 
                Whether you're a renter looking for the perfect space or a landlord wanting to showcase your property, 
                we've got you covered with modern technology and user-friendly features.
                Start your journey with us today and discover a smarter, easier way to manage your housing experience!
                <div>
            <h1 className="bold m-2 text-red-400">PLEASE CLICK RENTER IF YOU WANT TO RENT A HOUSE OR BULDING ELSE CLICK OWNER </h1>
            <button className="rounded text-white bg-blue-900 hover:bg-blue-500 p-2 m-4">OWNER </button>
            <button className="rounded text-white bg-blue-900 hover:bg-blue-500 p-2 m-4" onClick={navigat}>RENTER</button>
        </div> 
            </p>
        </div>
        
        <section className=" flex min-h-[20px]  py-[40px] pb-[40px] text-left text-white border-t border-red-200 cover bg-blue-600 mt-auto mb-0 ">
          <div>
             <p>
            
            standard dummy text ever since the 1500s, when an unknown printer took 
            a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
            but also the leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release 
            of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
            publishing software like Aldus PageMaker including versions of Lorem Ipsum
            </p>
        </div>
    
        
        </section>
        </div>
    );
}
export default Identifier