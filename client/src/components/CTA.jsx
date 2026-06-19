import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { Link } from 'react-router-dom';

function CTA() {
  
  const {user} = useContext(AppContext);

  return (
    <section data-aos="zoom-in" className="text-center py-16 px-6">
        <h3 className="text-3xl font-bold mb-4">
          Ready to Create Stunning Images?
        </h3>
        <p className="text-gray-400 mb-6">
          Join thousands of creators and brands already using PixelMind.
        </p>
        {!user?
        <Link to="/get-started" className="bg-purple-600 px-6 py-3 rounded-lg text-lg hover:bg-purple-700 cursor-pointer">
          Get Started Now
        </Link>
        :
        <p className='text-lg inline rounded-full px-4 py-2'>Enjoy your Transformation at PixelMind.</p>
}
      </section>
  )
}

export default CTA