'use client';

interface LogoTextProps {
  size?: 'small' | 'large';
}

export default function LogoText({ size = 'large' }: LogoTextProps) {
  const textSizes = {
    large: {
      main: 'text-4xl md:text-6xl lg:text-7xl',
      sub: 'text-3xl md:text-4xl lg:text-5xl'
    },
    small: {
      main: 'text-xl md:text-2xl',
      sub: 'text-lg md:text-xl'
    }
  };

  return (
    <div className={`space-y-${size === 'small' ? '1' : '2'}`}>
      <h1 className={`${textSizes[size].main} font-eightgon tracking-wide`}>
        <span className="relative inline-block">
          <span className="relative z-10 text-light-gray">Tech Lumina</span>
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[#5374ac] to-transparent opacity-0 blur-sm animate-glow-line" />
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[#5374ac] to-transparent opacity-0 animate-glow-line" />
        </span>
      </h1>
      <h2 className={`${textSizes[size].sub} font-eightgon tracking-wide`}>
        <span className="relative inline-block">
          <span className="relative z-10 text-light-gray/80">Web Solutions</span>
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[#2f456f] to-transparent opacity-0 blur-sm animate-glow-line-delayed" />
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[#2f456f] to-transparent opacity-0 animate-glow-line-delayed" />
        </span>
      </h2>
    </div>
  );
}
