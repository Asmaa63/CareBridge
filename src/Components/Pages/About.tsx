import React from 'react';
import { FaUser, FaBriefcase } from 'react-icons/fa';
import aboutImage from '../../assets/About.webp'; // استبدل المسار
import { motion } from 'framer-motion';

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="mb-8 flex items-start">
      <div className="relative flex justify-center items-center mr-4">
        <div className="absolute w-16 h-16 border-4 border-dashed rounded-full border-blue-400 animate-spin-slow"></div>
        <div className="bg-blue-500 text-white rounded-full p-3 flex-shrink-0">
          {icon}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-1">{title}</h3>
        <p className="text-gray-700 text-left">{description}</p>
      </div>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <motion.div
      className="bg-white pt-10"
      initial={{ opacity: 0, y: 50 }} // تبدأ مخفية
      whileInView={{ opacity: 1, y: 0 }} // تظهر عند التمرير
      viewport={{ once: true, amount: 0.2 }} // تُطبق مرة واحدة بنسبة 20% من القسم
      transition={{ duration: 0.8, ease: 'easeOut' }} // مدة الأنيميشن
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-gray-700 leading-relaxed">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
        </div>

        {/* المحتوى الرئيسي */}
        <div className="flex flex-col md:flex-row items-start justify-center">
          <div className="md:w-1/3 px-4 py-2 md:py-8">
            <Feature
              icon={<FaUser size={24} />}
              title="Patient-centered care"
              description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
            />
            <Feature
              icon={<FaBriefcase size={24} />}
              title="Professional"
              description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
            />
          </div>

          {/* الصورة في الوضع العادي */}
          <div className="hidden md:block md:w-1/3 px-4">
            <img
              src={aboutImage}
              alt="About Us"
              className="max-w-full rounded-lg"
            />
          </div>

          <div className="md:w-1/3 px-4 py-2 md:py-8">
            <Feature
              icon={<FaUser size={24} />}
              title="Qualified Team"
              description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
            />
            <Feature
              icon={<FaBriefcase size={24} />}
              title="Dedicated Service"
              description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
            />
          </div>
        </div>

        {/* الصورة عند تصغير الشاشة */}
        <div className="block md:hidden flex justify-center">
          <img
            src={aboutImage}
            alt="About Us"
            className="w-2/3 max-w-xs rounded-lg"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default About;
