import React from 'react';

interface BrandSymbolProps {
  className?: string;
  color?: string;
  size?: number;
}

export const BrandSymbol: React.FC<BrandSymbolProps> = ({
  className = "w-8 h-8",
  color = "#C19A55",
  size
}) => {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={size ? { width: size, height: size } : undefined}
      aria-label="Jenefer Viana Studio Símbolo Oficial"
    >
      {/* 1. Central Body - Left vertical line curving into the 'J' tail at the bottom */}
      <path
        d="M 95 18 L 95 136 C 95 154, 88 163, 76 163 C 65 163, 62 153, 63 146"
        stroke={color}
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* 2. Central Body - Right vertical straight line */}
      <path
        d="M 105 18 L 105 140"
        stroke={color}
        strokeWidth="3.2"
        strokeLinecap="round"
      />

      {/* 3. Upper Left Wing (Top curve and Bottom curve meeting cleanly at outer tip) */}
      <path
        d="M 87 70 C 66 52, 40 48, 18 52 C 42 66, 66 76, 87 83"
        stroke={color}
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* 4. Upper Right Wing (Top curve and Bottom curve meeting cleanly at outer tip) */}
      <path
        d="M 113 70 C 134 52, 160 48, 182 52 C 158 66, 134 76, 113 83"
        stroke={color}
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* 5. Lower Left Wing (Top curve and Bottom curve meeting cleanly at outer tip) */}
      <path
        d="M 87 90 C 70 82, 52 85, 38 92 C 52 101, 70 105, 87 106"
        stroke={color}
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* 6. Lower Right Wing (Top curve and Bottom curve meeting cleanly at outer tip) */}
      <path
        d="M 113 90 C 130 82, 148 85, 162 92 C 148 101, 130 105, 113 106"
        stroke={color}
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

