import React, { useContext } from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Credit from "../assets/Credit.svg";
import Credit2 from "../assets/Credit2.svg";
import { AppContext } from "../context/AppContext";


function Header() {
  const [open, setOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const {user,logout,credit} = useContext(AppContext)

  const handleClick = () =>{
    setOpen(false);
    logout();
  }
  
  return (
    <header className="bg-black text-white">
      <nav className="mx-auto px-4 sm:px-4 lg:px-4">
        <div className="flex items-center justify-between h-16">
          <div>
            <Link to="/" className="text-xl font-semibold tracking-tight">
              PixelMind
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-6">
            <NavLink to="/" className={({isActive})=>isActive?"bg-purple-600/50 rounded-lg px-2 py-2":""}>
              Home
            </NavLink>

            <div className="relative">
              <button
                onClick={() => setFeaturesOpen(!featuresOpen)}
                className="cursor-pointer flex items-center space-x-1"
              >
                <span >Features</span>
                <svg
                  className={`w-4 h-4 transform transition-transform duration-150 ${featuresOpen ? "rotate-180" : "rotate-0"}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {featuresOpen && (
                <div className="absolute mt-2 w-55 bg-gray-900 border rounded-md shadow-lg z-20" onClick={()=> setFeaturesOpen(!featuresOpen)}>
                  <Link to="/aspect-ratio" className="block px-4 py-2 hover:border hover:bg-gray-800">Aspect Ratio Adjustment</Link>
                  <Link to="/img-optimization" className="block px-4 py-2 hover:border hover:bg-gray-800">Image Optimization</Link>
                  <Link to="/remove-bg" className="block px-4 py-2 hover:border hover:bg-gray-800">Background Remove</Link>
                  <Link to="/magic-bg" className="block px-4 py-2 hover:border hover:bg-gray-800">Magical Background</Link>
                  <Link to="/ai-enhance" className="block px-4 py-2 hover:border hover:bg-gray-800">AI Image Enhancer</Link>
                </div>
              )}
            </div>

            <NavLink to="/pricing" className={({isActive})=>isActive?"bg-purple-600/50 rounded-lg px-2 py-2":""}>
              Pricing
            </NavLink>
            <NavLink to="/about-us" className={({isActive})=>isActive?"bg-purple-600/50 rounded-lg px-2 py-2":""}>
              About us
            </NavLink>
          </div>

          <div className="flex items-center space-x-4">
            {user?
            <div className="flex">
            <Link to="/pricing" className="flex items-center bg-purple-800/40 px-3 rounded-full">
            <img src={Credit2} className="w-9 py-1" alt="credit" />
            <p className="ps-1">Credits: {credit}</p>
            </Link>
            <Link
              to="/get-started"
              className="hidden md:inline-block ms-2 my-1 px-4 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 transition-colors duration-150 text-sm font-medium"
              onClick={logout}
            >
              Log Out
            </Link>
            </div>
            :
              <Link
              to="/get-started"
              className="hidden md:inline-block px-4 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 transition-colors duration-150 text-sm font-medium"
            >
              Get Started
            </Link>
}

            {/* For small screens */}
            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {open ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`md:hidden transition-transform duration-200 ease-in-out origin-top ${
          open ? "max-h-screen" : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-4 border-t border-gray-800">
          <NavLink to="/" onClick={() => setOpen(false)} className="block text-base font-medium hover:bg-gray-700">
            Home
          </NavLink>

          <details className="block">
            <summary className="cursor-pointer text-base font-medium hover:bg-gray-700">Features</summary>
            <div className="ml-4 mt-2 space-y-2">
              <NavLink to="/aspect-ratio" onClick={() => setOpen(false)} className="block text-sm hover:bg-purple-600">Aspect Ratio Adjustment</NavLink>
              <NavLink to="/img-optimization" onClick={() => setOpen(false)} className="block text-sm  hover:bg-purple-600">Image Optimization</NavLink>
              <NavLink to="/remove-bg" onClick={() => setOpen(false)} className="block text-sm  hover:bg-purple-600">Background Remove</NavLink>
              <NavLink to="/magic-bg" onClick={() => setOpen(false)} className="block text-sm  hover:bg-purple-600">Magical Background</NavLink>
              <NavLink to="/ai-enhance" onClick={() => setOpen(false)} className="block text-sm  hover:bg-purple-600">AI Image Enhance</NavLink>
            </div>
          </details>

          <NavLink to="/pricing" onClick={() => setOpen(false)} className="block text-base font-medium hover:bg-gray-700">
            Pricing
          </NavLink>
          <NavLink to="/about-us" onClick={() => setOpen(false)} className="block text-base font-medium hover:bg-gray-700">
            About us
          </NavLink>

          <div className="pt-2">
            {!user?(
            <NavLink
              to="/get-started"
              onClick={() => setOpen(false)}
              className="w-full inline-flex items-center justify-center px-4 py-2 rounded-full bg-purple-700 hover:bg-purple-600 transition-colors duration-150 text-sm font-medium"
            >
              Get Started
            </NavLink>
            ):(
              <NavLink
              to="/get-started"
              onClick={handleClick}
              className="w-full inline-flex items-center justify-center px-4 py-2 rounded-full bg-purple-700 hover:bg-purple-600 transition-colors duration-150 text-sm font-medium"
            >
              Log Out
            </NavLink>
            )
          }
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
