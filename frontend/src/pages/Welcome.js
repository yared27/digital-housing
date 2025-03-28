import React from 'react'
import { Link } from 'react-router-dom';
function Welcome(){
   return( <div>
        <div className="space-x-4 w-full max-w-8xl h-screen bg-cover flex justify-left  items-center sm:text-center  " style={{backgroundImage:"url('/images/im.jpg')"}} > 
         <div>
          <h1 className='mx-[20px] text-left mb-40 animation-marquee text-white text-[40px]  font-bold'> Welcome To The DH </h1>
          </div>
        </div>
        {/* text-center mt-[210px] mb-10 text-4xl */}
        <div className='border-t w-full max-w-8xl  items-center px-4 sm:px-6 md:px-8 flex flex-col border-gray-300  bg-blue-600 h-screen'>
            <div className='text-center w-full max-w-3xl sm:text-left w-full max-w-4xl '>
              <h1 className=' text-center sm:text-left  mb-[50px] w-[800px] text-[20px] text-white mt-12 sm:mt-20 mb-8 sm:mb-12 mx-auto px-4 max-w-md md:max-w-lg lg:max-w-xl  text-base sm:text-lg md:text-xl leading-normal `'>  At Digital Housing, we revolutionize the way you find and manage homes.
                Our platform offers a seamless experience for browsing rental properties,
                exploring virtual tours, and managing your housing needs online. 
                Whether you're a renter looking for the perfect space or a landlord wanting to showcase your property, 
                we've got you covered with modern technology and user-friendly features.
                Start your journey with us today and discover a smarter, easier way to manage your housing experience!</h1>
            </div>
           <div className='flex space-x-4 '>
           <Link to="/SignupForm">
            <button className='bg-blue-900 bg-blue-500 hover:bg-blue-700 text-white font-bold mx-[20px] py-2 px-4 rounded'>Sign Up </button>
            </Link>
            <Link to="/LoginForm">
            <button className='bg-blue-900 bg-blue-500 hover:bg-blue-700 text-white  font-bold py-2 px-4 rounded'>Login</button>
            </Link>
            </div>
        </div>
    </div>);
}
export default Welcome;