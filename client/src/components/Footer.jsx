import React from 'react'

function Footer() {
  return (
    <footer className="text-center py-6 border-t border-gray-800 text-gray-500">
        © {new Date().getFullYear()} PixelMind. All rights reserved.
      </footer>
  )
}

export default Footer