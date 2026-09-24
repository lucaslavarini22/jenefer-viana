import React from 'react';
import symbolImg from '../assets/logo-symbol-transparent.png';

interface BrandSymbolProps {
  className?: string;
  color?: string;
  size?: number;
}

export const BrandSymbol: React.FC<BrandSymbolProps> = ({
  className = "w-8 h-8",
  size
}) => {
  return (
    <img
      src={symbolImg}
      alt="Jenefer Viana Studio Símbolo Oficial Libélula J+V"
      className={`object-contain inline-block select-none ${className}`}
      style={size ? { width: size, height: size } : undefined}
    />
  );
};
