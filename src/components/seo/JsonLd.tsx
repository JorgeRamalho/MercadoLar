import { APP_CONFIG } from '@/config';
import { SITE_URL } from '@typescript/data/seo';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: APP_CONFIG.nome,
  url: SITE_URL,
  logo: `${SITE_URL}/brand/mercadolar-logo-800.webp`,
  description: APP_CONFIG.slogan,
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: APP_CONFIG.telefone,
    contactType: 'customer service',
    areaServed: 'BR',
    availableLanguage: 'Portuguese',
  },
  sameAs: [
    'https://www.instagram.com/mercadolar',
    'https://www.youtube.com/@mercadolar',
  ],
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'GroceryStore',
  name: APP_CONFIG.nome,
  image: `${SITE_URL}/brand/mercadolar-hero-banner-800.webp`,
  url: SITE_URL,
  telephone: APP_CONFIG.telefone,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'São Paulo',
    addressRegion: 'SP',
    addressCountry: 'BR',
  },
};

export function JsonLd() {
  return (
    <>
      <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
    </>
  );
}
