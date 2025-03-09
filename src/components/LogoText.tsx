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

  const mainText = "Tech Lumina";
  const subText = "Web Solutions";

  return (
    <div className={`space-y-${size === 'small' ? '1' : '2'} relative`}>
      <div className="absolute inset-0 bg-gradient-radial from-medium-blue/5 via-navy/5 to-transparent animate-gradient-shift rounded-full blur-xl" />
      <div className="absolute inset-0 bg-gradient-radial from-blue-gray/5 via-medium-blue/5 to-transparent animate-gradient-shift-delayed rounded-full blur-xl" />
      <h1 className={`${textSizes[size].main} font-eightgon tracking-wide flex justify-center items-center relative`}>
        {mainText.split('').map((char, index) => (
          <span key={index} className="relative px-[1px]">
            {char === ' ' ? '\u00A0' : (
              <>
                <span className="relative z-10 text-light-gray">{char}</span>
                <span 
                  className="absolute inset-0 text-medium-blue opacity-0 animate-letter-glow"
                  style={{ 
                    textShadow: '0 0 8px #5374ac, 0 0 12px #5374ac, 0 0 16px #2f456f, 0 0 20px #eff5fa',
                    animationDelay: `${index * 0.3}s`
                  }}
                >
                  {char}
                </span>
                <span 
                  className="absolute inset-0 text-light-gray opacity-0 animate-letter-glow"
                  style={{ 
                    textShadow: '0 0 4px #eff5fa, 0 0 8px #5374ac, 0 0 12px #2f456f',
                    animationDelay: `${index * 0.3 + 0.15}s`
                  }}
                >
                  {char}
                </span>
              </>
            )}
          </span>
        ))}
      </h1>
      <h2 className={`${textSizes[size].sub} font-eightgon tracking-wide flex justify-center items-center relative`}>
        {subText.split('').map((char, index) => (
          <span key={index} className="relative px-[1px]">
            {char === ' ' ? '\u00A0' : (
              <>
                <span className="relative z-10 text-light-gray/80">{char}</span>
                <span 
                  className="absolute inset-0 text-blue-gray opacity-0 animate-letter-glow-delayed"
                  style={{ 
                    textShadow: '0 0 8px #2f456f, 0 0 12px #2f456f, 0 0 16px #141c33, 0 0 20px #eff5fa',
                    animationDelay: `${index * 0.3}s`
                  }}
                >
                  {char}
                </span>
                <span 
                  className="absolute inset-0 text-light-gray/80 opacity-0 animate-letter-glow-delayed"
                  style={{ 
                    textShadow: '0 0 4px #eff5fa, 0 0 8px #2f456f, 0 0 12px #141c33',
                    animationDelay: `${index * 0.3 + 0.15}s`
                  }}
                >
                  {char}
                </span>
              </>
            )}
          </span>
        ))}
      </h2>
    </div>
  );
}
