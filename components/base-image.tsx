import Image, { ImageProps } from 'next/image';

// Always prefix for GitHub Pages deployment
const basePath = '/PortFolio_3D';

interface BaseImageProps extends Omit<ImageProps, 'src'> {
  src: string;
}

export default function BaseImage({ src, alt, ...props }: BaseImageProps) {
  const prefixedSrc = src.startsWith('/') && !src.startsWith(basePath)
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
