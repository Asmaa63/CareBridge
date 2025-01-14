import React from 'react';
import PrivacyPopup from './PrivacyPopup';
import { motion } from "framer-motion";

type ContactUsProps = {};

const ContactUs: React.FC<ContactUsProps> = () => {
  return (
    <motion.div 
    initial={{ opacity: 0, y: 50 }} // تبدأ مخفية مع تحريك لأسفل
      whileInView={{ opacity: 1, y: 0 }} // تظهر عند التمرير
      viewport={{ once: true }} // يتم تطبيق الأنيميشن مرة واحدة فقط
      transition={{ duration: 0.8, ease: "easeOut" }}
    className="bg-animated min-h-screen flex items-center justify-center px-4">
      <div className="max-w-5xl  rounded-lg  overflow-hidden flex flex-col md:flex-row">
        {/* Left Section */}
        <div className="p-8 md:w-1/2  text-white flex flex-col justify-center text-center md:text-left">
          {/* <h2 className="text-xl font-semibold uppercase">See Textline in Action</h2> */}
          <h1 className="text-3xl md:text-5xl font-bold mt-4">Contact Us</h1>
          <p className="mt-4 text-base">
            Serving patients across the United States.
          </p>
          <button className="mt-6 px-6 py-2 border border-white text-white hover:bg-white hover:text-blue-900 transition rounded">
            See How it Works
          </button>
        </div>

        {/* Right Section */}
        <div className="p-6 m-6 bg-white md:w-3/4 shadow-lg rounded-lg">
          <h2 className="text-xl font-bold text-center">SMS-complicant Opt-in Form</h2>
          <form className="mt-6 space-y-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name*</label>
              <input
                type="text"
                id="firstName"
                required
                className="bg-gray-100 mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-900 focus:ring-opacity-50"
                placeholder="Jane"
              />
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name*</label>
              <input
                type="text"
                id="lastName"
                required
                className="bg-gray-100 mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-900 focus:ring-opacity-50"
                placeholder="McNeil"
              />
            </div>

            <div>
              <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">Company Name*</label>
              <input
                type="text"
                id="companyName"
                required
                className=" bg-gray-100 mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-900 focus:ring-opacity-50"
                placeholder="Acme Co."
              />
            </div>

            <div>
              <label htmlFor="workEmail" className="block text-sm font-medium text-gray-700">Work Email*</label>
              <input
                type="email"
                id="workEmail"
                required
                className="bg-gray-100 mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-900 focus:ring-opacity-50"
                placeholder="jane@acme.co"
              />
            </div>

            <div>
              <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700">Mobile Number*</label>
              <input
                type="tel"
                id="mobileNumber"
                required
                className="bg-gray-100 mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-900 focus:ring-opacity-50"
                placeholder="(123) 456-7890"
              />
            </div>

            <div className="flex items-start">
              <PrivacyPopup/>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-2 bg-[#0087be] text-white font-bold rounded-md hover:bg-blue-800 transition"
            >
              Send Message 
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactUs;
