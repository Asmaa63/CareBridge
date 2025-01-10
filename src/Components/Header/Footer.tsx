import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaGoogle,
  FaVk,
  FaLinkedinIn,
  FaYoutube,
  FaEnvelope,
  FaMobileAlt,
  FaMapMarkedAlt,
} from "react-icons/fa";

const Footer: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // تأخير ظهور العناصر
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.footer
      className="bg-[#171717] text-white py-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // تظهر عند رؤية 30% من الفوتر
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6">
        {/* Get in Touch */}
        <motion.div variants={itemVariants}>
          <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
          <ul className="space-y-4 text-base">
            <li className="flex items-center">
              <FaEnvelope className="text-gray-400 mr-3 text-3xl hover:text-[#0087be] transition cursor-pointer" />
              <span className="text-md text-gray-400">free@psdfreebies.com</span>
            </li>
            <li className="flex items-center">
              <FaMobileAlt className="text-gray-400 mr-3 text-4xl hover:text-[#0087be] transition cursor-pointer" />
              <span className="text-md text-gray-400">+123 456 7890, +123 456 7880</span>
            </li>
            <li className="flex items-center">
              <FaMapMarkedAlt className="text-gray-400 mr-3 text-5xl hover:text-[#0087be] transition cursor-pointer" />
              <span className="text-md text-gray-400">
                123, Main Road, New City, My Country 123456
              </span>
            </li>
          </ul>
          <div className="flex space-x-6 mt-6">
            {/* Social Media Icons */}
            {[FaFacebookF, FaGoogle, FaVk, FaLinkedinIn, FaYoutube].map(
              (Icon, index) => (
                <a
                  href="#"
                  key={index}
                  className="text-gray-400 text-3xl hover:text-[#0087be] transition cursor-pointer"
                >
                  <Icon />
                </a>
              )
            )}
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div className="md:ml-10 sm:ml-0" variants={itemVariants}>
          <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-base">
            {["About us", "Blog", "Contact us", "FAQ", "Insurance"].map(
              (link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="flex items-center text-gray-400 hover:text-[#0087be] transition"
                  >
                    <span
                      className="mr-2"
                      style={{
                        color: "#0087be",
                        fontSize: "12px",
                        fontWeight: "bold",
                      }}
                    >
                      &#10148;
                    </span>
                    {link}
                  </a>
                </li>
              )
            )}
          </ul>
        </motion.div>

        {/* Our Services */}
        <motion.div variants={itemVariants}>
          <h3 className="text-2xl font-bold mb-4">Our Services</h3>
          <ul className="space-y-2 text-base">
            {[
              "Work Injuries",
              "Sport Injuries",
              "Cold Laser Therapy",
              "Massage Therapy",
              "Physiotherapy",
              "Chiropractic Therapy",
            ].map((service) => (
              <li key={service}>
                <a
                  href="#"
                  className="flex items-center text-gray-400 hover:text-[#0087be] transition"
                >
                  <span
                    className="mr-2"
                    style={{
                      color: "#0087be",
                      fontSize: "12px",
                      fontWeight: "bold",
                    }}
                  >
                    &#10148;
                  </span>
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Enquiry Form */}
        <motion.div variants={itemVariants}>
          <h3 className="text-2xl font-bold mb-4">Enquiry Form</h3>
          <form className="space-y-4 text-base">
            <input
              type="text"
              placeholder="Name"
              className="w-full bg-transparent border-b border-gray-600 py-1 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Phone"
              className="w-full bg-transparent border-b border-gray-600 py-1 focus:outline-none"
            />
            <textarea
              placeholder="Message"
              className="w-full bg-transparent border-b border-gray-600 py-1 focus:outline-none"
            />
            <button
              type="submit"
              className=" bg-[#0087be] text-white text-sm font-bold px-8 py-2 rounded-full shadow hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              SUBMIT
            </button>
          </form>
        </motion.div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-10">
        Copyright © 2025 CareBridge Rehab. All Rights Reserved
      </div>
    </motion.footer>
  );
};

export default Footer;
