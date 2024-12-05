import React from "react";
import HomesList from "./home_to_rent";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Identifier= ()=>{
    function navigat(){
        Navigate("/HomesList")

    }
    return(
        <div className=" flex flex-col text-center ">
        <div className="m-auto  max-w-6xl mt-20 mb-6 ">
            <p className="text-left">What is Lorem Ipsum?
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer took 
            a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
            but also the leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release 
            of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
            publishing software like Aldus PageMaker including versions of Lorem Ipsum
            </p>
        </div>
        <div>
            <h1 className="bold m-2 text-red-400">PLEASE CLICK RENTER IF YOU WANT TO RENT A HOUSE OR BULDING ELSE CLICK OWNER </h1>
            <button className="rounded text-white bg-blue-500 hover:bg-blue-300 p-2 m-4">OWNER </button>
            <button className="rounded text-white bg-blue-500 hover:bg-blue-300 p-2 m-4" onClick={navigat()}>RENTER</button>
        </div> 
        <div className=" flex py-[40px] pb-[40px] gap-[30px] text-left border bordert-gray-300  mt-[70px]">
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
        
        </div>
        </div>
    );
}
export default Identifier