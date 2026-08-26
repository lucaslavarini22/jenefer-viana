import React from 'react';
import { BrandSymbol } from './BrandSymbol';

interface BrandLogoProps {
  className?: string;
  symbolSize?: number;
  textColor?: string;
  symbolColor?: string;
  variant?: 'horizontal' | 'stacked' | 'symbol-only';
  align?: 'left' | 'center';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  symbolSize = 36,
  textColor = '#F2EADF',
  symbolColor = '#C19A55',
  variant = 'horizontal',
  align = 'left',
}) => {
  if (variant === 'symbol-only') {
    return <BrandSymbol className={className} size={symbolSize} color={symbolColor} />;
  }

  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col ${align === 'center' ? 'items-center text-center' : 'items-start'} ${className}`}>
        <BrandSymbol size={symbolSize} color={symbolColor} className="mb-2.5" />
        <div className="flex flex-col">
          <span
            className="font-playfair text-base sm:text-lg tracking-[0.24em] uppercase font-semibold leading-tight"
            style={{ color: textColor }}
          >
            JENEFER VIANA
          </span>
          <span
            className="text-[9px] sm:text-[10px] tracking-[0.45em] uppercase font-light mt-1 text-[#C19A55]"
          >
            STUDIO
          </span>
        </div>
      </div>
    );
  }

  // Horizontal variant (default)
  return (
    <div className={`flex items-center gap-3.5 sm:gap-4 ${align === 'center' ? 'justify-center' : ''} ${className}`}>
      <div className="shrink-0 flex items-center justify-center">
        <BrandSymbol size={symbolSize} color={symbolColor} />
      </div>
      <div className="flex flex-col justify-center">
        <span
          className="font-playfair text-sm sm:text-base md:text-lg tracking-[0.22em] uppercase font-medium leading-none"
          style={{ color: textColor }}
        >
          JENEFER VIANA
        </span>
        <span
          className="text-[8px] sm:text-[9px] tracking-[0.45em] uppercase font-light mt-1.5 text-[#C19A55]"
        >
          STUDIO
        </span>
      </div>
    </div>
  );
};
