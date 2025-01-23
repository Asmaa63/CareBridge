import { useState } from 'react';
import PrivacyPopup from './PrivacyPopup';
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const [popupVisible, setPopupVisible] = useState(false);

  const sendEmail = (e:any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_2oifuq6', // Service ID
        'template_upfx0u1', // Template ID
        e.target, // Form data
        'p9VNekC4yk0f7N7fV' // Public Key
      )
      .then(
        (result:any) => {
          console.log(result.text);
          setPopupVisible(true); // Show success popup
          setTimeout(() => setPopupVisible(false), 8000); // Hide popup after 2 seconds
        },
        (error:any) => {
          console.error(error.text);
        }
      );

    e.target.reset(); // Reset the form fields
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-animated min-h-screen flex items-center justify-center px-4"
    >
      <div className="max-w-5xl w-full rounded-lg overflow-hidden">
        {/* Header Section */}
        <div className="text-center text-white m-6">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="mt-2 text-lg">
            Serving home health agencies across the greater Chicago area.
          </p>
        </div>

        {/* Form Section */}
        <div className="p-8 bg-white shadow-lg m-6">
          <form onSubmit={sendEmail} className="space-y-6">
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
                  name="firstName"
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
                  name="lastName"
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
                  name="companyName"
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
                  name="workEmail"
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
                  name="mobileNumber"
                  id="mobileNumber"
                  required
                  className="bg-gray-100 mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-900 focus:ring-opacity-50"
                  placeholder="+1 (234) 567-8910"
                />
              </div>
            </div>

            {/* Privacy and Submit */}
            <div className="flex items-start space-x-4">
              <PrivacyPopup />
            </div>
            <button
              type="submit"
              className="px-6 py-2 bg-[#0087be] text-white font-bold rounded-md hover:bg-blue-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Success Popup */}
      {popupVisible && (
        <div className="fixed text-center top-1/4 left-1/2 transform -translate-x-1/2 bg-white text-[#0087be] px-6 py-4 rounded shadow-2xl border border-[#0087be] z-50">
          Thank you for signing up with CareBridge Rehab!
           You’ll receive up to 5 messages per week.
           Message and data rates may apply.
           Text HELP for support or STOP to unsubscribe.
        </div>
      )}
    </motion.div>
  );
};

export default ContactUs;
