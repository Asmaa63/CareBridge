import React from "react";
import { FaStethoscope, FaPhoneAlt, FaUserMd, FaUserCheck } from "react-icons/fa";
import { motion } from "framer-motion";

interface CardProps {
  title: string;
  description: string;
  icon: JSX.Element;
  bgColor: string;
}

const Card: React.FC<CardProps> = ({ title, description, icon, bgColor }) => {
  return (
    <div className={`p-10 ${bgColor} text-center w-full sm:w-1/2 md:w-1/4`}>
      <div className="relative flex justify-center items-center mb-4">
        {/* دائرة تدور حول الأيقونة */}
        <div className="absolute w-20 h-20 border-4 border-dashed rounded-full border-white animate-spin-slow"></div>
        {/* أيقونة */}
        <div className="bg-white rounded-full p-4">{icon}</div>
      </div>
      <h3 className="text-xl text-white font-semibold mb-2">{title}</h3>
      <p className="text-white">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  return (
    <motion.div
      className="flex flex-wrap justify-center w-full"
      initial={{ opacity: 0, y: 50 }} // تبدأ مخفية مع تحريك لأسفل
      whileInView={{ opacity: 1, y: 0 }} // تظهر عند التمرير
      viewport={{ once: true }} // يتم تطبيق الأنيميشن مرة واحدة فقط
      transition={{ duration: 0.8, ease: "easeOut" }} // مدة الأنيميشن وسهولة الحركات
    >
      <Card
        title="Best Treatment"
        description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
        icon={<FaStethoscope size={30} />}
        bgColor="bg-[#48b3d3]"
      />
      <Card
        title="Emergency Help"
        description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
        icon={<FaPhoneAlt size={30} />}
        bgColor="bg-[#63c4d1]"
      />
      <Card
        title="Medical Staff"
        description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
        icon={<FaUserMd size={30} />}
        bgColor="bg-[#41bdbd]"
      />
      <Card
        title="Qualified Doctors"
        description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
        icon={<FaUserCheck size={30} />}
        bgColor="bg-[#37c3a8]"
      />
    </motion.div>
  );
};

export default Features;
