import React, { useState } from "react";
import { Link,useLocation } from "react-router-dom";
const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location=useLocation()
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
const excludePaths=["/Signup","/Login","/"]
const showLogout=!excludePaths.includes(location.pathname);
  return (
    <div className="relative inline-block">
      <button
        onClick={toggleDropdown}
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        Menu
      </button>
      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg"
          onMouseLeave={() => setIsOpen(false)}
        >
          <ul className="py-2">
            <li className="px-4 py-2 hover:bg-gray-200">
              <a href="/profile">Profile</a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-200">
              <a href="/settings">Settings</a>
            </li>
            {showLogout &&(<li className="px-4 py-2 hover:bg-gray-200">
              <a href="/logout">Logout</a>
            </li>)}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
