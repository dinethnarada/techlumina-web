import Image from 'next/image';
import { FC } from 'react';

interface ImageWithOverlayProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

const ImageWithOverlay: FC<ImageWithOverlayProps> = ({ 
  src, 
  alt, 
  className = '',
  priority = false 
}) => {
  // Ensure the image source is defined to avoid hydration issues
  const imageSrc = typeof src === 'string' ? src : '';

  return (
    <div className={`relative h-full w-full overflow-hidden ${className}`}> 
      <Image
        src={imageSrc}
        alt={alt}
        fill
        className="object-cover object-center"
        priority={priority}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-navy/80 via-medium-blue/40 to-navy/80"></div>
    </div>
  );
};

export default ImageWithOverlay;
