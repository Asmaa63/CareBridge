import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaMobileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.footer
      className="bg-[#171717] text-white py-10 flex flex-col items-center text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="max-w-6xl w-full px-6 flex flex-wrap  justify-around md:flex-nowrap md:text-left text-center">
        <motion.div variants={itemVariants} className="w-full md:w-1/2 lg:w-1/3 mb-6 md:mb-0">
          <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
          <ul className="space-y-4 text-base">
            <li className="flex justify-center md:justify-start items-center">
              <a href="mailto:admin@carebridgerehab.com" className="flex items-center text-gray-400 hover:text-[#0087be] transition">
                <FaEnvelope className="mr-3 text-3xl" />
                <span className="text-md">admin@carebridgerehab.com</span>
              </a>
            </li>
            <li className="flex justify-center md:justify-start items-center">
              <a href="tel:+1 (708) 6789145" className="flex items-center text-gray-400 hover:text-[#0087be] transition">
                <FaMobileAlt className="mr-3 text-4xl" />
                <span className="text-md">+1 (708) 678-9145</span>
              </a>
            </li>
          </ul>
        </motion.div>

        <motion.div variants={itemVariants} className="w-full md:w-1/2 lg:w-1/3">
          <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-base">
            {[{ name: "Home", path: "/" }, { name: "About Us", path: "/about" }, { name: "Services", path: "/services" }, { name: "Contact Us", path: "/contact" }, { name: "Privacy Policy", path: "/privacy" }].map((link) => (
              <li key={link.name}>
                <Link to={link.path} className="flex justify-center md:justify-start items-center text-gray-400 hover:text-[#0087be] transition">
                  <span className="mr-2 text-[#0087be] text-sm font-bold">&#10148;</span>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
      <div className="text-center text-sm text-gray-500 mt-6">Copyright © 2025 CareBridge Rehab. All Rights Reserved</div>
    </motion.footer>
  );
};

export default Footer;