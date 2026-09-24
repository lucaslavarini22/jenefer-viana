import React from 'react';

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
      src="/assets/logo-symbol-transparent.png"
      alt="Jenefer Viana Studio Símbolo Oficial Libélula J+V"
      className={`object-contain inline-block select-none ${className}`}
      style={size ? { width: size, height: size } : undefined}
    />
  );
};
