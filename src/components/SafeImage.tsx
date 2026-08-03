import React, { useState, useEffect } from 'react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbacks?: string[];
  localFallback?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  fallbacks = [],
  localFallback,
  alt = '',
  className = '',
  onError,
  ...props
}) => {
  const buildSourceList = (primarySrc?: string): string[] => {
    const list: string[] = [];
    if (primarySrc) {
      // Check if primarySrc contains a Google Drive file ID
      const driveMatch = primarySrc.match(/(?:id=|\/d\/|file\/d\/)([a-zA-Z0-9_-]{25,})/);
      if (driveMatch && driveMatch[1]) {
        const fileId = driveMatch[1];
        // Order: Thumbnail endpoint (most reliable for CORS/embedding), direct lh3, direct uc export
        list.push(`https://drive.google.com/thumbnail?id=${fileId}&sz=w1600`);
        list.push(`https://lh3.googleusercontent.com/d/${fileId}`);
        list.push(`https://drive.google.com/uc?export=view&id=${fileId}`);
      } else {
        list.push(primarySrc);
      }
    }

    if (fallbacks && fallbacks.length > 0) {
      fallbacks.forEach((f) => {
        if (f && !list.includes(f)) list.push(f);
      });
    }

    if (localFallback && !list.includes(localFallback)) {
      list.push(localFallback);
    }

    return list;
  };

  const [sources, setSources] = useState<string[]>(() => buildSourceList(src));
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const newList = buildSourceList(src);
    setSources(newList);
    setCurrentIndex(0);
  }, [src, localFallback]);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (currentIndex + 1 < sources.length) {
      setCurrentIndex((prev) => prev + 1);
    } else if (onError) {
      onError(e);
    }
  };

  const currentSource = sources[currentIndex] || src || localFallback || '';

  return (
    <img
      {...props}
      src={currentSource}
      alt={alt}
      className={className}
      referrerPolicy="no-referrer"
      onError={handleImageError}
    />
  );
};
