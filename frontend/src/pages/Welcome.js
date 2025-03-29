import React from 'react'
import { Link } from 'react-router-dom';
function Welcome(){
   return( <div className='inset-0 left-0 right-0 overflow-x-hidden   ' >
        <div className="space-x-4 w-full w-full h-screen bg-cover flex justify-left  items-center sm:text-center  " style={{backgroundImage:"url('/images/im.jpg')"}} > 
         <div>
          <h1 className='mx-[20px] text-left mb-40 animation-marquee text-white text-[40px]  font-bold'> Welcome To The DH </h1>
          </div>
        </div>
        {/* text-center mt-[210px] mb-10 text-4xl */}
        <div className='border-t w-full   md:w-lg  px-4 sm:item-left md:px-8 flex flex-col border-gray-300  bg-blue-600 min-h-screen'>
            <div className='text-center flex flex-col  sm:text-left w-full max-w-4xl '>
              <p className='	max-w-prose center sm:text-left break-words mb-[50px] w-[800px]  text-white mt-12 sm:mt-20  sm:mb-12 mx-auto px-4  md:max-w-lg lg:max-w-3xl  text-base sm:text-lg md:text-xl leading-normal '>  At Digital Housing, we revolutionize the way you find and manage homes.
                Our platform offers a seamless experience for browsing rental properties,
                exploring virtual tours, and managing your housing needs online. 
                Whether you're a renter looking for the perfect space or a landlord wanting to showcase your property, 
                we've got you covered with modern technology and user-friendly features.
                Start your journey with us today and discover a smarter, easier way to manage your housing experience!</p>
            </div>
           <div className='flex px-12 space-x-2 '>
           <Link to="/SignupForm">
            <button className='bg-blue-900 bg-blue-500 mb-2 hover:bg-blue-700 text-white font-bold mx-[20px] py-2 px-4 rounded'>Sign Up </button>
            </Link>
            <Link to="/LoginForm">
            <button className='bg-blue-900 bg-blue-500 hover:bg-blue-700 text-white  font-bold py-2 px-4 rounded'>Login</button>
            </Link>
            </div>
        </div>
    </div>);
}
export default Welcome;