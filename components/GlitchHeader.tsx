import React from 'react';

interface GlitchHeaderProps {
  text: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const GlitchHeader: React.FC<GlitchHeaderProps> = ({ text, className = "", size = 'lg' }) => {
  const sizeClasses = {
    sm: "text-lg md:text-xl",
    md: "text-xl md:text-3xl",
    lg: "text-2xl sm:text-4xl md:text-7xl", // Reduced base size for mobile to prevent wrapping "HEAVY WATER"
    xl: "text-4xl sm:text-6xl md:text-8xl lg:text-9xl" // Reduced base size for mobile to prevent wrapping "FARALLON"
  };

  return (
    <div className={`glitch-wrapper ${className} max-w-full`}>
      <h1 
        className={`glitch font-bold uppercase tracking-widest whitespace-nowrap ${sizeClasses[size]}`}
        data-text={text}
      >
        {text}
      </h1>
    </div>
  );
};

export default GlitchHeader;