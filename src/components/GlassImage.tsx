'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { FC } from 'react';
import { useMediaQuery } from 'react-responsive';

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
  const prefersReducedMotion = useReducedMotion();
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const motionProps = prefersReducedMotion || isMobile
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.3 } }
    : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 } };

  return (
    <motion.div 
      className={`relative h-full w-full ${className}`}
      {...motionProps}
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
        <div className="absolute inset-0 bg-gradient-to-br from-navy/30 via-transparent to-navy/30"></div>
      </div>
    </motion.div>
  );
};

export default GlassImage;
