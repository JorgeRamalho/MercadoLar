import { Link } from 'react-router-dom';
import { BRAND, BRAND_ASSETS } from '@/config';

interface BrandLogoProps {
  variant?: 'default' | 'white' | 'icon';
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
  linkToHome?: boolean;
}

const sizes = {
  sm: { icon: 'h-8 w-8', logo: 'h-8', text: 'text-base' },
  md: { icon: 'h-10 w-10', logo: 'h-10', text: 'text-xl' },
  lg: { icon: 'h-14 w-14', logo: 'h-14', text: 'text-2xl' },
};

export function BrandLogo({
  variant = 'default',
  showText = true,
  size = 'md',
  linkToHome = true,
}: BrandLogoProps) {
  const s = sizes[size];

  const logoSrc =
    variant === 'white'
      ? BRAND_ASSETS.logoWhite
      : variant === 'icon'
        ? BRAND_ASSETS.logoIcon
        : BRAND_ASSETS.logoIcon;

  const content = (
    <div className="flex items-center gap-2.5">
      <img
        src={logoSrc}
        alt={`Logo ${BRAND.nome}`}
        className={`${variant === 'icon' && !showText ? s.icon : s.logo} shrink-0 rounded-xl object-contain`}
      />
      {showText && variant !== 'icon' && (
        <div>
          <span
            className={`font-display font-bold tracking-tight ${s.text} ${
              variant === 'white' ? 'text-white' : 'text-inherit'
            }`}
          >
            {BRAND.nome}
          </span>
          <span
            className={`block text-[10px] font-medium uppercase tracking-widest ${
              variant === 'white' ? 'text-merca-gold-400' : 'text-merca-green-500'
            }`}
          >
            {BRAND.tagline}
          </span>
        </div>
      )}
    </div>
  );

  if (linkToHome) {
    return (
      <Link to="/" className="transition-opacity hover:opacity-90">
        {content}
      </Link>
    );
  }

  return content;
}
