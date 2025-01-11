import React from "react";
import HomeImage from "../../assets/Home.webp";

const Home: React.FC = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center overflow-hidden">
      {/* تعديل الـ object-fit حسب حجم الشاشة */}
      <img
        src={HomeImage}
        alt="Home"
        className="h-full w-full object-cover " // تغير إلى object-cover في الشاشات الأصغر
      />
      <div className="absolute text-black px-4 md:items-start md:left-20">
        <div className="text-center md:text-left max-w-2xl mx-auto md:mx-0">
          <h1 className="text-5xl md:text-[50px] font-bold mb-4 leading-tight text-center">
            Physical therapy, <br /> delivered to you
          </h1>
          <p className="text-lg md:text-xl mb-6 text-center py-2 font-bold">
            Call (708) 678–9145
          </p>
          <div
            className="flex flex-col sm:flex-row w-full max-w-lg font-bold bg-transparent sm:bg-white rounded-full gap-2 sm:gap-0 justify-center items-center"
          >
            <input
              type="text"
              placeholder="Enter your zip code or city"
              className="flex-1 p-3 sm:p-4 border-none outline-none text-gray-800 placeholder-gray-500 rounded-full text-center sm:text-left"
            />
            <button
              className="shadow-lg px-6 py-3 sm:py-4 bg-blue-900 text-white hover:bg-blue-700 transition-transform rounded-full sm:rounded-l-none"
            >
              CHECK AVAILABILITY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
