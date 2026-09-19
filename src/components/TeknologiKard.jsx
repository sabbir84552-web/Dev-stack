import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function TeknologiKard() {
  const [technologies, setTechnologies] = useState([]);
  const [myStack, setMyStack] = useState([]);
  const [loading, setLoading] = useState(true); // Loading State for Challenge requirement

  // 1. JSON file theke useEffect die data fetch kora hocche akhane
  useEffect(() => {
    fetch("/teknologigulo.json")
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, []);

  // 2. Add to Stack Functionality 
  const handleAddToStack = (tech) => {
    const isAlreadyAdded = myStack.some((item) => item.id === tech.id);

    if (isAlreadyAdded) {
      toast.warning(`${tech.name} is already in your stack!`);
      return;
    }

    setMyStack((prevStack) => [...prevStack, tech]);
    toast.success(`${tech.name} added to your stack!`);
  };

  // 3. Remove Single Item Functionality  akhane theke suru
  const handleRemoveFromStack = (id, name) => {
    setMyStack((prevStack) => prevStack.filter((item) => item.id !== id));
    toast.info(`${name} removed from stack!`);
  };

  // 4. Remove All Functionality
  const handleRemoveAll = () => {
    setMyStack([]);
    toast.error("All technologies removed from stack!");
  };

  return (
    <div className="w-full my-8">
      <ToastContainer position="top-right" autoClose={2500} />

      {/* Header section */}
      <div className="mb-8 text-left">
        <h1 className="text-3xl font-extrabold text-gray-900">
          Explore the <span className="text-pink-600">Technologies</span>
        </h1>
        <p className="text-gray-500 text-sm mt-1">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {/* Challenge Part: Loading State Indicator akhna theke suru hoise */}
      {loading ? (
        <div className="flex justify-center items-center py-20">
          <p className="text-lg font-semibold text-gray-600 animate-pulse">
            Loading Technologies...
          </p>
        </div>
      ) : (
        /* Main Content Layout */
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
          {/* Technologies Cards Grid */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {technologies.map((tech) => {
              const isAdded = myStack.some((item) => item.id === tech.id);

              return (
                <div
                  key={tech.id}
                  className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between min-h-[280px]"
                >
                  <div>
                    {/* Header: Icon & Top Badge */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 flex items-center justify-center">
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                      {tech.badge && (
                        <span
                          className={`text-[11px] font-medium px-2.5 py-0.5 rounded-full border ${tech.badge.color}`}
                        >
                          {tech.badge.text}
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {tech.name}
                    </h3>

                    <p className="text-xs text-gray-500 leading-relaxed mb-4">
                      {tech.description}
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center justify-between text-xs mb-4">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-md text-[11px]">
                          {tech.category}
                        </span>
                        <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-md text-[11px]">
                          {tech.level}
                        </span>
                      </div>
                      <div className="flex items-center text-amber-500 font-semibold text-xs">
                        ★ <span className="text-gray-700 ml-1">{tech.rating}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => handleAddToStack(tech)}
                      disabled={isAdded}
                      className={`w-full font-medium text-xs py-2.5 rounded-lg transition-all ${
                        isAdded
                          ? "bg-gray-200 text-gray-500 cursor-not-allowed border border-gray-300"
                          : "bg-slate-900 hover:bg-slate-800 text-white cursor-pointer active:scale-95"
                      }`}
                    >
                      {isAdded ? "✓ Added to Stack" : "Add to Stack"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Your Stack Sidebar */}
          <div className="lg:col-span-1 bg-white border border-gray-100 rounded-2xl p-5 shadow-sm sticky top-6">
            <h2 className="text-base font-bold text-gray-900 mb-1">Your Stack</h2>
            <p className="text-xs text-gray-400 mb-4">
              {myStack.length > 0
                ? `${myStack.length} Technology selected`
                : "No technologies added yet."}
            </p>

            {myStack.length === 0 ? (
              <div className="border border-dashed border-gray-200 rounded-xl p-8 text-center">
                <p className="text-xs text-gray-400">Your stack is empty</p>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="space-y-2.5 max-h-[380px] overflow-y-auto pr-1">
                  {myStack.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between p-2.5 bg-white rounded-xl border border-gray-100 shadow-sm"
                    >
                      <div className="flex items-center gap-2.5">
                        <img
                          src={item.icon}
                          alt={item.name}
                          className="w-5 h-5 object-contain"
                        />
                        <p className="text-xs font-semibold text-gray-800">
                          {item.name}
                        </p>
                      </div>
                      <button
                        onClick={() => handleRemoveFromStack(item.id, item.name)}
                        className="text-gray-400 hover:text-red-500 text-xs font-bold px-1.5 py-0.5 transition-colors cursor-pointer"
                        title="Remove"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>

                <button
                  onClick={handleRemoveAll}
                  className="w-full mt-3 border border-red-200 text-red-500 hover:bg-red-50 font-medium text-xs py-2 rounded-lg transition-colors cursor-pointer"
                >
                  Remove All
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}