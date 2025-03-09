'use client';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ValueCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

const ValueCard = ({ title, description, icon }: ValueCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-medium-blue/10 border border-medium-blue/20 backdrop-blur-sm p-6 rounded-lg overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-medium-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Icon with hover effect */}
        <div className="w-12 h-12 mb-4 text-medium-blue group-hover:text-blue-gray transition-colors duration-300">
          {icon}
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-bold mb-3 text-navy">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-blue-gray">
          {description}
        </p>
      </div>

      {/* Glass effect overlay */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px] pointer-events-none" />
    </motion.div>
  );
};

export default ValueCard;
