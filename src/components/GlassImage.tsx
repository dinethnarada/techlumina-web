'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FC } from 'react';

interface GlassImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  quality?: number;
}

const GlassImage: FC<GlassImageProps> = ({
  src,
  alt,
  className = '',
  priority = false,
  sizes = '(max-width: 768px) 100vw, 50vw',
  quality = 85
}) => {
  return (
    <motion.div 
      className={`relative h-full w-full ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative h-full w-full rounded-lg overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-center"
          priority={priority}
          sizes={sizes}
          quality={quality}
          loading={priority ? 'eager' : 'lazy'}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy/40 via-transparent to-navy/40"></div>
      </div>
    </motion.div>
  );
};

export default GlassImage;
