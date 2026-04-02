import Image, { ImageProps } from 'next/image';

// Detect environment: in production (GitHub Pages), prefix with /PortFolio_3D
const isProduction = process.env.NODE_ENV === 'production';
const basePath = isProduction ? '/PortFolio_3D' : '';

interface BaseImageProps extends Omit<ImageProps, 'src'> {
  src: string;
}

export default function BaseImage({ src, alt, ...props }: BaseImageProps) {
  const prefixedSrc = basePath && src.startsWith('/') && !src.startsWith(basePath)
    ? `${basePath}${src}` 
    : src;
  
  return (
    <Image
      src={prefixedSrc}
      alt={alt}
      {...props}
    />
  );
}
