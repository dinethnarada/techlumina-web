'use client';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: 'light' | 'dark';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({ href, onClick, children, variant = 'light', className = '', type = 'button' }: ButtonProps) => {
  const baseStyles = "px-8 py-3 rounded-lg backdrop-blur-sm border transition-all duration-300 hover:scale-105";
  const variantStyles = variant === 'light' 
    ? "bg-medium-blue/20 hover:bg-medium-blue/30 text-navy border-medium-blue/20"
    : "bg-medium-blue/20 hover:bg-medium-blue/30 text-light-gray border-medium-blue/20";

  const Component = motion[href ? 'a' : 'button'];
  const props = href ? { href } : { onClick, type };

  return (
    <Component
      {...props}
      className={`${baseStyles} ${variantStyles} ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </Component>
  );
};

export default Button;
