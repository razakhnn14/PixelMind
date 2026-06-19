import React from 'react'

function Process() {
  return (
          <section data-aos="fade-up" className="py-16 px-6 bg-gradient-to-r from-purple-900/30 to-black">
        <h3 className="text-3xl font-bold text-center mb-10">How It Works</h3>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              step: "Step 01: Choose Your Magic",
              desc: "Pick enhancement, background removal, format change, or effects.",
            },
            {
              step: "Step 02: Upload Your Image",
              desc: "Drag & drop or select from your device.",
            },
            {
              step: "Step 03: Download & Share",
              desc: "Get your transformed image instantly.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl p-6 hover:shadow-lg hover:shadow-purple-500/30 transition cursor-pointer"
            >
              <h4 className="text-xl font-semibold mb-2">{item.step}</h4>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
  )
}

export default Process