import React from 'react';

interface OvLogoProps {
  className?: string;
  showText?: boolean;
  monogramOnly?: boolean;
}

export default function OvLogo({ className = "", showText = true, monogramOnly = false }: OvLogoProps) {
  return (
    <div className={`flex items-center select-none ${className}`}>
      {monogramOnly ? (
        <img
          src="/icon.jpeg"
          alt="One Vision Icon"
          className="h-9 w-9 rounded-xl object-contain shadow-sm"
        />
      ) : (
        <img
          src="/ov-logo.png"
          alt="One Vision — Ideas Into Impact"
          className="h-8 sm:h-9 w-auto object-contain transition-transform duration-200 hover:scale-[1.02]"
          onError={(e) => {
            // Fallback to logo.jpeg or fallback SVG if ov-logo.png fails
            const target = e.target as HTMLImageElement;
            if (target.src.indexOf('/ov-logo.png') !== -1) {
              target.src = '/logo.jpeg';
              target.style.mixBlendMode = 'screen';
            }
          }}
        />
      )}
    </div>
  );
}
