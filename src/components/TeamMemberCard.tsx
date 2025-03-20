import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaLinkedin } from 'react-icons/fa';

interface TeamMemberCardProps {
  name: string;
  title: string;
  imageSrc: string;
  linkedinUrl: string;
  imagePosition?: 'center' | 'down';
}

export default function TeamMemberCard({ name, title, imageSrc, linkedinUrl, imagePosition = 'center' }: TeamMemberCardProps) {
  return (
    <motion.div
      className="relative p-6 rounded-lg bg-medium-blue/10 border border-medium-blue/20 backdrop-blur-sm"
      whileHover={{ scale: 1.02, y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      <div className="aspect-square relative mb-4 rounded-lg overflow-hidden">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className={`object-cover ${imagePosition === 'down' ? 'object-top' : 'object-center'}`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-light-gray">{name}</h3>
      <p className="text-light-gray/80 mb-4">{title}</p>
      <a
        href={linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-medium-blue hover:text-blue-gray transition-colors"
      >
        <FaLinkedin className="w-6 h-6" />
      </a>
    </motion.div>
  );
}
