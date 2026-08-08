import type { ImgHTMLAttributes } from 'react';
import { IMAGE_WIDTHS, type OptimizedImageAsset } from '@/config';

type OptimizedImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'srcSet'> & {
  asset: OptimizedImageAsset;
  priority?: boolean;
};

export function OptimizedImage({
  asset,
  alt,
  className,
  priority = false,
  sizes = '(max-width: 768px) 100vw, 50vw',
  ...rest
}: OptimizedImageProps) {
  const webpSrcSet = IMAGE_WIDTHS
    .map((w) => `/brand/${asset}-${w}.webp ${w}w`)
    .join(', ');
  const fallbackSrc = `/brand/${asset}-800.webp`;
  const pngFallback = `/brand/${asset}.png`;

  return (
    <picture>
      <source type="image/webp" srcSet={webpSrcSet} sizes={sizes} />
      <img
        src={fallbackSrc}
        alt={alt}
        className={className}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
        onError={(e) => {
          const img = e.currentTarget;
          if (img.src.endsWith('.webp')) {
            img.src = pngFallback;
          }
        }}
        {...rest}
      />
    </picture>
  );
}
