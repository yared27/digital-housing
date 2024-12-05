import React from 'react'
import { Link } from 'react-router-dom';
function Welcome(){
   return( <div>
        <h1 className='text-center mt-[210px] mb-10 text-6xl animation-marquee  font-bold'> Welcome To The DH </h1>
        <div className='space-x-4 text-center'>
            <Link to="/SignupForm">
            <button className='bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded'>Sign Up </button>
            </Link>
            <Link to="/LoginForm">
            <button className='bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded'>Login</button>
            </Link>
        </div>
    </div>);
}
export default Welcome;