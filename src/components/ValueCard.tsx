'use client';
import { ReactNode } from 'react';

interface ValueCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

const ValueCard = ({ title, description, icon }: ValueCardProps) => {
  return (
    <div
      className="group relative bg-medium-blue/10 border border-medium-blue/20 backdrop-blur-sm p-6 rounded-lg h-full transition-transform duration-300 ease-out hover:scale-[1.02] hover:-translate-y-1 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-medium-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out rounded-lg" />
      <div className="relative z-10">
        <div className="w-12 h-12 mb-4 text-medium-blue transition-colors duration-300 ease-out group-hover:text-navy">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3 text-navy transition-colors duration-300 ease-out">
          {title}
        </h3>
        <p className="text-blue-gray transition-colors duration-300 ease-out">
          {description}
        </p>
      </div>
      <div className="absolute inset-0 bg-white/5 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out rounded-lg pointer-events-none" />

    </div>
  );
};

export default ValueCard;
