import React,{useState} from "react";
import {useLocation, Link } from "react-router-dom";
import DropdownMenu from "../dropdown";
const Navbar_page = () =>{
    const location=useLocation();
    const [IsOpen,setIsOpen]=useState(false);
    const handleMouserEnter=()=>setIsOpen(true);
    const handleMouseleave=()=>setIsOpen(false)
    return (<div>
<nav onMouseLeave={handleMouseleave} className="bg-white dark:bg-blue-600 fixed w-full z-20 top-0 start-0 max-w-screen-3xl dark:border-gray-600">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <Link to="/SignupForm"  className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo"/>
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">D-H</span>
  </Link>
  <div   className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
    {location.pathname==='/'  && (
      <Link to={"/SignupForm"}  type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mx-4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</Link>
    )}
      <DropdownMenu/>
      <button onMouseEnter={handleMouserEnter}  type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" >
        <span class="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div className={`items-center justify-between  w-full md:flex md:w-auto md:order-1 ${IsOpen? 'block':'hidden'}`} id="navbar-sticky">
    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium  rounded-lg bg-blue-0 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-900 md:bg-gray-200 dark:bg-gray-800 md:dark:bg-blue-600">
            <li><Link to="/" aria-current={location.pathname==="/"? "page":undefined}
            className="block py-2 px-3 text-gray-900 hover:bg-gtra rounded md:bg-transparent bg-blue-700 md:text-blue-700 md:p-0 md:dark:text-blue-100"  >HOME</Link></li>
            <li><Link to="#" aria-current={location.pathname==="#"? "page":undefined} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" href="#">ABOUT</Link></li>
            <li><Link to= "%" aria-current ={location.pathname==="%"? "page":undefined} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" >SERVICE</Link></li> 
            <li><Link to="@" aria-current={location.pathname==="@"? "page":undefined} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">CONTACT</Link></li>
            </ul>
        </div>
    </div>
</nav>
  
  </div>
    );
}
export default Navbar_page;