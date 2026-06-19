import React, { useContext } from 'react'
import { Link } from "react-scroll";
import { AppContext } from '../context/AppContext';
import { NavLink } from 'react-router-dom';

function Hero() {
    const {user} = useContext(AppContext);
  return (
    <section data-aos="zoom-in" className="text-center py-20 px-6 bg-gradient-to-br from-purple-900 to-black">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Transform Your Images in Seconds
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-6">
          Enhance quality, remove backgrounds, change formats, and more — all
          powered by AI.
        </p>
        <div className="flex gap-4 justify-center">
          {!user?
          <NavLink to='/get-started' className="bg-purple-600 px-6 py-3 rounded-lg text-lg hover:bg-purple-700 cursor-pointer">
            Try It Free
          </NavLink>
          :
          <p className='bg-purple-800/40 px-6 py-3 text-lg rounded-full'>Welcome, {user}</p>
}
          <Link to="section3" smooth={true} duration={500} offset={-50} className="border border-purple-500 px-6 py-3 rounded-lg text-lg hover:bg-purple-700 cursor-pointer" >See Features</Link>
        </div>
      </section>
  )
}

export default Hero