import { Link } from 'react-router-dom';
import { Share2, MessageCircle, PlayCircle, Phone, Mail, MapPin } from 'lucide-react';
import { BrandLogo } from '../brand/BrandLogo';
import { BRAND, OPTIMIZED_ASSETS, SOCIAL_LINKS, APP_CONFIG } from '@/config';
import { OptimizedImage } from '../ui/OptimizedImage';

const socialIcons = [
  { Icon: Share2, href: SOCIAL_LINKS.instagram, label: 'Instagram Mercadolar' },
  { Icon: MessageCircle, href: SOCIAL_LINKS.whatsapp, label: 'WhatsApp Mercadolar' },
  { Icon: PlayCircle, href: SOCIAL_LINKS.youtube, label: 'YouTube Mercadolar' },
];

export function Footer() {
  return (
    <footer className="bg-merca-blue-900 text-white">
      <div className="section-padding mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4">
              <BrandLogo variant="white" size="md" />
            </div>
            <p className="text-sm leading-relaxed text-slate-300">
              {BRAND.descricao}
            </p>
            <p className="mt-2 text-sm font-semibold text-merca-gold-400">
              &ldquo;{BRAND.slogan}&rdquo;
            </p>
            <OptimizedImage
              asset={OPTIMIZED_ASSETS.avatar}
              alt="Avatar Mercadolar"
              className="mt-4 h-12 w-12 rounded-full border-2 border-merca-gold-400 object-cover"
              sizes="48px"
            />
            <div className="mt-4 flex gap-3">
              {socialIcons.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-merca-green-500"
                >
                  <Icon size={18} aria-hidden />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-display font-semibold">Navegação</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              {[
                { to: '/varejo', label: 'Varejo' },
                { to: '/atacado', label: 'Atacado' },
                { to: '/lojas', label: 'Lojas' },
                { to: '/clube', label: 'Clube Mercadolar' },
                { to: '/promocoes', label: 'Promoções' },
                { to: '/cadastro', label: 'Cadastre-se' },
              ].map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="transition hover:text-merca-gold-400">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-display font-semibold">Benefícios</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>Cashback em compras</li>
              <li>Cartão de crédito Mercadolar</li>
              <li>Programa de pontos e prêmios</li>
              <li>Encarte digital personalizado</li>
              <li>Ofertas exclusivas atacado</li>
            </ul>
          </div>

          <div id="contato">
            <h4 className="mb-4 font-display font-semibold">Contato</h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-merca-gold-400" aria-hidden />
                <a href={`tel:${APP_CONFIG.telefone.replace(/\D/g, '')}`} className="hover:text-merca-gold-400">
                  {APP_CONFIG.telefone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-merca-gold-400" aria-hidden />
                <a href={`mailto:${APP_CONFIG.email}`} className="hover:text-merca-gold-400">
                  {APP_CONFIG.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 text-merca-gold-400" aria-hidden />
                São Paulo, SP — 280+ lojas em todo o Brasil
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} Mercadolar. Todos os direitos reservados. CNPJ
            00.000.000/0001-00
          </p>
          <p className="mt-2">
            <Link to="/termos" className="hover:text-merca-gold-400">Termos de Uso</Link>
            {' · '}
            <Link to="/privacidade" className="hover:text-merca-gold-400">
              Política de Privacidade
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
