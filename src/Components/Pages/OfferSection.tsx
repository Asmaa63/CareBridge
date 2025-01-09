import React from "react";
import { motion } from "framer-motion";

const OfferSection: React.FC = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="bg-gray-200 py-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // تظهر عند رؤية 30% من القسم
      variants={containerVariants}
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center text-center md:text-left px-4 space-y-4 md:space-y-0 md:space-x-8">
        {/* النص */}
        <motion.p
          className="text-gray-800 font-bold text-lg"
          variants={itemVariants}
        >
          New Patient Special Offer Complimentary Consultation
        </motion.p>

        {/* الزر */}
        <motion.button
          className="bg-[#0087be] text-white text-sm font-bold px-6 py-2 rounded-full shadow hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
          variants={itemVariants}
        >
          READ MORE
        </motion.button>
      </div>
    </motion.div>
  );
};

export default OfferSection;
