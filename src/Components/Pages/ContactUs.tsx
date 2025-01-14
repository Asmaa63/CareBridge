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
      className="bg-animated min-h-screen flex items-center justify-center px-4"
    >
      <div className="max-w-5xl w-full rounded-lg  overflow-hidden">
        {/* Header Section */}
        <div className=" text-center text-white m-6">
          <h1 className="text-4xl font-bold ">Contact Us</h1>
          <p className="mt-2 text-lg ">
            Serving patients across the United States.
          </p>
        </div>

        {/* Form Section */}
        <div className="p-8 bg-white shadow-lg m-6">
          <h2 className="text-2xl font-bold text-center mb-6">SMS-Compliant Opt-in Form</h2>
          <form className="space-y-6">
            {/* First Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name*
                </label>
                <input
                  type="text"
                  id="firstName"
                  required
                  className="bg-gray-100 mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-900 focus:ring-opacity-50"
                  placeholder="Jane"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name*
                </label>
                <input
                  type="text"
                  id="lastName"
                  required
                  className="bg-gray-100 mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-900 focus:ring-opacity-50"
                  placeholder="McNeil"
                />
              </div>
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="companyName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Company Name*
                </label>
                <input
                  type="text"
                  id="companyName"
                  required
                  className="bg-gray-100 mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-900 focus:ring-opacity-50"
                  placeholder="Acme Co."
                />
              </div>
              <div>
                <label
                  htmlFor="workEmail"
                  className="block text-sm font-medium text-gray-700"
                >
                  Work Email*
                </label>
                <input
                  type="email"
                  id="workEmail"
                  required
                  className="bg-gray-100 mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-900 focus:ring-opacity-50"
                  placeholder="jane@acme.co"
                />
              </div>
            </div>

            {/* Third Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="mobileNumber"
                  className="block text-sm font-medium text-gray-700"
                >
                  Mobile Number*
                </label>
                <input
                  type="tel"
                  id="mobileNumber"
                  required
                  className="bg-gray-100 mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-900 focus:ring-opacity-50"
                  placeholder="(123) 456-7890"
                />
              </div>
            </div>

            {/* Privacy and Submit */}
            <div className="flex items-start space-x-4">
              <PrivacyPopup />
            </div>
            <button
              type="submit"
              className=" px-6 py-2 bg-[#0087be] text-white font-bold rounded-md hover:bg-blue-800 transition"
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
