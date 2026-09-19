import React from "react";
import heroImg from "../assets/banner-stack.png";

export default function Banar() {
  return (
    <section className="py-8 sm:py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* বাম পাশ: Heading, Description, Buttons */}
          <div className="text-center md:text-left space-y-4 sm:space-y-6">
            
            {/* Heading: Plain Text + Gradient Text */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
              Build Your Ideal <br />
              <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
                Development Stack
              </span>
            </h1>

            {/* Description Text */}
            <p className="text-slate-500 text-xs sm:text-sm md:text-base leading-relaxed max-w-md mx-auto md:mx-0">
              Explore frontend, backend, database, and tooling options, compare
              them side by side, and put together the stack that fits your next
              project.
            </p>

            {/* Two Buttons: Explore Technologies (Gradient) & Learn More (Outlined) */}
            <div className="flex items-center justify-center md:justify-start gap-3 pt-2">
              {/* Button 1: Gradient */}
              <a
                href="#technologies"
                className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 hover:opacity-90 text-white font-semibold text-xs sm:text-sm px-6 py-2.5 rounded-lg shadow-sm transition-all inline-block text-center"
              >
                Explore Technologies
              </a>

              {/* Button 2: Outlined */}
              <a
                href="#learn-more"
                className="border-2 border-slate-300 hover:border-slate-400 text-slate-700 bg-transparent hover:bg-slate-50 font-semibold text-xs sm:text-sm px-6 py-2.5 rounded-lg transition-all inline-block text-center"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* ডান পাশ: Banner Graphic Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src={heroImg}
              alt="Development Stack Graphic"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
}