import React from 'react';

interface GlitchHeaderProps {
  text: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const GlitchHeader: React.FC<GlitchHeaderProps> = ({ text, className = "", size = 'lg' }) => {
  const sizeClasses = {
    sm: "text-2xl",
    md: "text-4xl",
    lg: "text-6xl md:text-8xl",
    xl: "text-7xl md:text-9xl"
  };

  return (
    <div className={`glitch-wrapper ${className}`}>
      <h1 
        className={`glitch font-bold uppercase tracking-widest ${sizeClasses[size]}`}
        data-text={text}
      >
        {text}
      </h1>
    </div>
  );
};

export default GlitchHeader;