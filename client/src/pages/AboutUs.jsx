import React from 'react'

function AboutUs() {
   return (
    <div className="min-h-screen bg-gradient-to-b from-[#1e002a] to-black text-white flex flex-col items-center px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-10">
        About Us
      </h1>

      <div className="w-full max-w-4xl bg-gray-900 rounded-lg p-8 shadow-lg border border-purple-600 space-y-6">
        <p className="text-lg leading-relaxed">
          At <span className="text-purple-400 font-semibold">PixelMind</span>, our journey began with a simple idea: to empower everyone, from casual users to creative professionals, to transform images effortlessly. We recognized the frustration of complicated photo-editing software and set out to create a tool that is both powerful and approachable.
        </p>
        <p className="text-lg leading-relaxed">
          Our platform leverages cutting-edge artificial intelligence to perform background removal, color enhancement, noise reduction, and other transformative edits in seconds. Every feature is designed to save you time while delivering studio-quality results without the steep learning curve.
        </p>
        <p className="text-lg leading-relaxed">
          But we’re more than just a tool. We are a passionate team of developers, designers, and AI researchers dedicated to making visual creativity accessible to all. We listen to our users, constantly refine our technology, and release updates that reflect your feedback.
        </p>
        <p className="text-lg leading-relaxed">
          Whether you’re an e-commerce entrepreneur polishing product photos, a content creator crafting eye-catching visuals, or someone bringing cherished memories to life, <span className="text-purple-400 font-semibold">PixelMind</span> is your partner in visual storytelling.
        </p>
        <p className="text-lg leading-relaxed">
          Join thousands of creators around the world who have chosen <span className="text-purple-400 font-semibold">PixelMind</span> to elevate their images. Together, we’re shaping the future of digital imagery—one transformation at a time.
        </p>
      </div>
    </div>
  );
}

export default AboutUs