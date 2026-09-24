import React from 'react';
import logoOfficialImg from '../assets/logo-official-transparent.png';

interface BrandSymbolProps {
  className?: string;
  color?: string;
  size?: number;
}

export const BrandSymbol: React.FC<BrandSymbolProps> = ({
  className = "w-12 h-12",
  size
}) => {
  return (
    <img
      src={logoOfficialImg}
      alt="Jenefer Viana Studio Logo Oficial Libélula J+V"
      className={`object-contain inline-block select-none ${className}`}
      style={size ? { width: size, height: size } : undefined}
    />
  );
};
