import React from 'react'
import { Link } from 'react-router-dom';
function Welcome(){
   return( <div>
        <div className="space-x-4  text-center h-screen bg-cover " style={{backgroundImage:"url('/images/im.jpg')"}} >  

        </div>
        {/* text-center mt-[210px] mb-10 text-4xl */}
        <div className='border-t  mt-[200 items-center px] flex flex-col border-gray-300  bg-blue-900 h-screen'>
           <h1 className=' animation-marquee text-white text-[40px] mb-2 mt-[100px] font-bold'> Welcome To The DH </h1>
           <div className='flex space-x-4 '>
           <Link to="/SignupForm">
            <button className='bg-blue-900 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded'>Sign Up </button>
            </Link>
            <Link to="/LoginForm">
            <button className='bg-blue-900 hover:bg-blue-500 text-white  font-bold py-2 px-4 rounded'>Login</button>
            </Link>
            </div>
        </div>
    </div>);
}
export default Welcome;