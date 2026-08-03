import React, { useState } from 'react';
import { SafeImage } from './SafeImage';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ size = 'md', showText = true, className = '' }) => {
  const [imgError, setImgError] = useState(false);

  const sizeMap = {
    sm: { icon: 'w-8 h-8', text: 'text-lg', subText: 'text-[9px]' },
    md: { icon: 'w-11 h-11', text: 'text-xl', subText: 'text-[10px]' },
    lg: { icon: 'w-16 h-16', text: 'text-3xl', subText: 'text-xs' },
    xl: { icon: 'w-24 h-24 sm:w-28 sm:h-28', text: 'text-4xl sm:text-5xl', subText: 'text-sm' },
  };

  const dimensions = sizeMap[size];

  // Direct image URL for Google Drive file 1j2cIPNZ8H5vQa9IgDb1_Z5bRqKmiBDCz
  const driveImageId = "1j2cIPNZ8H5vQa9IgDb1_Z5bRqKmiBDCz";
  const primaryLogoSrc = `https://drive.google.com/thumbnail?id=${driveImageId}&sz=w800`;

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Logo Image / Icon container */}
      <div className={`relative ${dimensions.icon} flex items-center justify-center shrink-0`}>
        {/* Glow backdrop */}
        <div className="absolute inset-0 bg-[#1A7FD4] opacity-30 blur-md rounded-xl animate-pulse"></div>

        {!imgError ? (
          <SafeImage
            src={primaryLogoSrc}
            alt="SENTINEL QR Logo"
            className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_12px_rgba(26,127,212,0.8)] transition-transform duration-300"
            onError={() => setImgError(true)}
          />
        ) : (
          /* SVG Fallback Icon if image fails to load */
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full relative z-10 drop-shadow-[0_0_10px_rgba(26,127,212,0.8)]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M50 8L15 22V48C15 70.5 30 90 50 96C70 90 85 70.5 85 48V22L50 8Z"
              fill="url(#shieldGrad)"
              stroke="#1A7FD4"
              strokeWidth="3.5"
              strokeLinejoin="round"
            />
            <rect x="30" y="28" width="16" height="16" rx="3" fill="#FFFFFF" />
            <rect x="34" y="32" width="8" height="8" rx="1.5" fill="#0A1628" />
            <rect x="54" y="28" width="16" height="16" rx="3" fill="#FFFFFF" />
            <rect x="58" y="32" width="8" height="8" rx="1.5" fill="#0A1628" />
            <rect x="30" y="52" width="16" height="16" rx="3" fill="#FFFFFF" />
            <rect x="34" y="56" width="8" height="8" rx="1.5" fill="#0A1628" />
            <rect x="54" y="52" width="8" height="8" rx="2" fill="#1A7FD4" />
            <rect x="64" y="52" width="6" height="16" rx="2" fill="#FFFFFF" />
            <rect x="54" y="62" width="8" height="6" rx="1.5" fill="#FFFFFF" />
            <line x1="20" y1="48" x2="80" y2="48" stroke="#1A7FD4" strokeWidth="2" strokeDasharray="3 3" opacity="0.8" />
            <defs>
              <linearGradient id="shieldGrad" x1="50" y1="8" x2="50" y2="96" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0A1628" />
                <stop offset="1" stopColor="#102542" />
              </linearGradient>
            </defs>
          </svg>
        )}
      </div>

      {showText && (
        <div className="flex flex-col justify-center">
          <div className={`font-poppins font-black tracking-wider leading-none text-white ${dimensions.text} flex items-center gap-1`}>
            <span>SENTINEL</span>
            <span className="text-[#1A7FD4] text-glow">QR</span>
          </div>
          <span className={`font-inter font-semibold uppercase tracking-[0.25em] text-[#8899AA] ${dimensions.subText} mt-1`}>
            Patrullaje Inteligente
          </span>
        </div>
      )}
    </div>
  );
};
