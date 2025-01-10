import React from "react";
import bgimage from "../../assets/BlueBg.webp";
import { motion } from "framer-motion";

const StatsSection: React.FC = () => {
  const stats = [
    { id: 1, value: "1000+", label: "Happy Customers", icon: "💙" },
    { id: 2, value: "2017", label: "Top Hospitality", icon: "❤️" },
    { id: 3, value: "1105", label: "Innovative Approach", icon: "🚁" },
    { id: 4, value: "500+", label: "Lung Replacement", icon: "🚁" },
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

  return (
    <motion.div
      className="bg-cover bg-center py-24"
      style={{
        backgroundImage: `url(${bgimage})`,
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // تظهر عند رؤية 30% من القسم
      variants={containerVariants}
    >
      <motion.div
        className="max-w-5xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center"
        variants={containerVariants}
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.id}
            className="flex flex-col items-center space-y-4"
            variants={itemVariants}
          >
            <span className="text-5xl text-white">{stat.icon}</span>
            <h2 className="text-4xl font-bold text-white relative">
              {stat.value}
              <span className="block w-12 h-1 bg-white mt-4 mx-auto"></span>
            </h2>
            <p className="md:text-xl text-white">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default StatsSection;
