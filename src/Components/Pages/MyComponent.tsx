import React from "react";
import { FaGrinStars, FaPeopleArrows, FaStethoscope, FaTasks } from "react-icons/fa";
import bgimage from "../../assets/BlueBg.webp";
import { motion } from "framer-motion";

const StatsSection: React.FC = () => {
  const stats = [
    { id: 1, value: "1000+", label: "Happy Customers", icon: <FaGrinStars size={50} /> },
    { id: 2, value: "200+", label: "Successful Partnerships", icon: <FaPeopleArrows size={50} /> },
    { id: 3, value: "5000+", label: "Therapy Sessions Provided", icon: <FaStethoscope size={50} /> },
    { id: 4, value: "800+", label: "Customized Care Plans", icon: <FaTasks size={50} /> },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // تأخير ظهور كل عنصر
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const iconAnimation = {
  animate: {
    scale: [1, 1.2, 1],
    rotate: [0, 10, -10, 0],
  },
  transition: {
    duration: 2,
    repeat: Infinity,
    repeatType: "mirror" as const, // تعريف القيمة بشكل صريح
    ease: "easeInOut",
  },
};

  return (
    <motion.div
      className="bg-cover bg-center py-16 sm:py-20"
      style={{
        backgroundImage: `url(${bgimage})`,
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.id}
            className="flex flex-col items-center space-y-4 sm:space-y-6"
            variants={itemVariants}
          >
            <motion.span
              className="text-white"
              {...iconAnimation}
            >
              {stat.icon}
            </motion.span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white relative">
              {stat.value}
              <span className="block w-8 sm:w-12 h-1 bg-white mt-2 sm:mt-4 mx-auto"></span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-white">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default StatsSection;
