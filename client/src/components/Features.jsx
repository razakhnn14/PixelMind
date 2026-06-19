import React from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import { forwardRef } from "react";
import { Link } from "react-router-dom";
import Before3 from "../assets/Before3.jpg";
import After3 from "../assets/After3.jpg";
import Before5 from "../assets/Before5.jpg";
import After5 from "../assets/After5.jpg";
import Before4 from "../assets/Before4.jpg";
import After4 from "../assets/After4.jpg";
import Before1 from "../assets/Before1.jpg";
import After1 from "../assets/After1.jpg";
import Before2 from "../assets/Before2.jpg";
import After2 from "../assets/After2.jpg";

const Features = forwardRef((props, ref) => {
  return (
    <section
      id="section3"
      ref={ref}
      className="py-16 px-6 max-w-7xl mx-auto"
    >
      <h3 className="text-3xl font-bold text-center mb-10">Our Features</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          {
            title: "Aspect Ratio Adjustment",
            desc: "Instantly resize and crop images to your desired aspect ratio — perfect for social media.",
            page: "/aspect-ratio",
            before: Before1,
            after: After1,
          },
          {
            title: "Image Optimization",
            desc: "Reduce file sizes, improve load times, and deliver superior visual quality Images.",
            page: "/img-optimization",
            before: Before2,
            after: After2,
          },
          {
            title: "Background Remove",
            desc: "Effortlessly remove image backgrounds with AI magic.",
            page: "/remove-bg",
            before: Before3,
            after: After3,
          },
          {
            title: "Magical Background",
            desc: "Effortlessly add image backgrounds with AI magic using prompts.",
            page: "/magic-bg",
            before: Before4,
            after: After4,
          },
          {
            title: "AI Image Enhancer",
            desc: "AI Image Enhancer: Instantly boost your photo's  clarity, colors, and sharpness with smart AI!",
            page: "/ai-enhance",
            before: Before5,
            after: After5,
          },
        ].map((tool, index) => (
          <Link to={tool.page}>
            <div
              key={index}
              className="bg-gray-900 rounded-xl p-6 hover:shadow-lg hover:shadow-purple-500/30 transition cursor-pointer"
              data-aos="fade-up"
            >
              <h4 className="text-xl font-semibold mb-2">{tool.title}</h4>
              <p className="text-gray-400">{tool.desc}</p>
              <ReactCompareSlider className="rounded-lg mt-4"
                itemOne={
                  <ReactCompareSliderImage src={tool.before} alt="Before" />
                }
                itemTwo={
                  <ReactCompareSliderImage src={tool.after} alt="After" />
                }
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
});

export default Features;
