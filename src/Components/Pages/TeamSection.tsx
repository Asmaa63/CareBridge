import React from "react";
import { FaUserMd } from "react-icons/fa";
import { motion } from "framer-motion";
import man1 from "../../assets/man1.webp";

const TeamSection: React.FC = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Amir Beltagi",
      role: "PT, MS, PhD",
    },
    {
      id: 2,
      name: "Dr Ricky Doe",
      role: "Assistant Surgeon",
    },
    {
      id: 3,
      name: "Dr Ricky Doe",
      role: "Assistant Surgeon",
    },
    {
      id: 4,
      name: "Dr Ricky Doe",
      role: "Assistant Surgeon",
    },
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
      className="py-16 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // تظهر عند رؤية 30% من القسم
      variants={containerVariants}
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">Our Team</h2>
        <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium.Sed ut perspici atis unde omnis iste
          natus error sit voluptatem accusantium doloremque laudantium.
        </p>
      </div>

      <motion.div
        className="max-w-5xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center"
        variants={containerVariants}
      >
        {teamMembers.map((member) => (
          <motion.div
            key={member.id}
            className="flex flex-col items-center text-center space-y-4"
            variants={itemVariants}
          >
            <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center shadow-md overflow-hidden">
              {member.id === 1 ? (
                <img
                  src={man1}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <FaUserMd className="text-6xl" style={{ color: "#2c5899" }} />
              )}
            </div>
            <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
            <p className="text-base text-gray-600">{member.role}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default TeamSection;
