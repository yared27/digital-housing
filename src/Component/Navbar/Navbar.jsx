import React from "react";
import { Link } from "react-router-dom";
const Navbar = () =>{
    return (
<nav className="bg-blue-900 p-4">
    <div className="container mx-auto flex justify-end">
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