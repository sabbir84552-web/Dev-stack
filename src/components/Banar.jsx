import heroImg from "../assets/banner-stack.png";

export default function Banar() {
  return (
    <section className="py-8 sm:py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* bam Side Content Mobile-a Center, PC-te bame Align */}
          <div className="text-center md:text-left space-y-4 sm:space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
              Build Your Ideal <br />
              <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                Development Stack
              </span>
            </h1>

            <p className="text-slate-500 text-xs sm:text-sm md:text-base leading-relaxed max-w-md mx-auto md:mx-0">
              Explore frontend, backend, database, and tooling options, compare
              them side by side, and put together the stack that fits your next
              project.
            </p>

            {/*  Button gula */}
            <div className="flex items-center justify-center md:justify-start gap-3 pt-2">
              <button className="bg-gradient-to-r from-orange-500 to-pink-500 hover:opacity-95 text-white font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-lg shadow-xs transition">
                Explore Technologies
              </button>
              <button className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-lg transition">
                Learn More
              </button>
            </div>
          </div>

          {/* dain  Side Stack Graphic chobigula */}
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
