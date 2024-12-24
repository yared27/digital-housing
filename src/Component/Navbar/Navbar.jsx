import React from "react";
import { Link } from "react-router-dom";
const Navbar = () =>{
    return (
<nav className="bg-blue-900 p-4 fixed w-full z-20 top-0 start-0 border-b border-gray-200  ">
    <div className=" mx-w-screen-xl flex-wrap items-center justify-between mx-auto  p-4 ">
        <ul className="flex space-x-4">
            <li><Link to={"/"} className="text-white hover:text-blue-300" >HOME</Link></li>
            <li><Link to={"#"} className="text-white hover:text-blue-300" href="#">ABOUT</Link></li>
            <li><Link to= "%" className="text-white hover:text-blue-300" >SERVICE</Link></li>
            <li><Link to={"@"} className="text-white hover:text-blue-300">CONTACT</Link></li>
        </ul>
    </div>
</nav>
    );
}
export default Navbar;