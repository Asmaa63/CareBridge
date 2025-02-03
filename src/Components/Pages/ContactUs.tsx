import { useState } from 'react';
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactUs = () => {
  const [popupVisible] = useState(false);

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
        <div className="p-8 bg-white shadow-lg m-6 rounded-lg text-center">
      {/* <h1 className="text-5xl md:text-[50px] font-bold mb-6 leading-tight drop-shadow-[0_0_10px_white]">
        Rehab Services, <br /> delivered to you
      </h1> */}
      <div className="p-6 bg-white m-6 rounded-lg text-center">
      <div className="flex flex-col items-center gap-6 text-lg md:text-xl font-semibold">
        {/* Phone Section */}
        <div className="flex flex-col items-center text-gray-700 text-center">
          <FaPhoneAlt className="text-blue-500 text-3xl mb-1" />
          <span className="text-sm md:text-lg font-medium">Call</span>
          <a
            href="https://wa.me/17086789145"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg md:text-xl text-nowrap text-[#2c5899] font-bold hover:underline"
          >
            +1 (708) 678-9145
          </a>
        </div>

        {/* Email Section */}
        <div className="flex flex-col items-center text-gray-700 text-center">
          <FaEnvelope className="text-blue-500 text-3xl mb-1" />
          <span className="text-sm md:text-lg font-medium">Email</span>
          <a
  href="mailto:admin@carebridgerehab.com"
  className="text-md md:text-xl text-[#2c5899] font-bold hover:underline break-all text-wrap text-center max-w-full"
>
  admin@carebridgerehab.com
</a>

        </div>
      </div>
    </div>

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
