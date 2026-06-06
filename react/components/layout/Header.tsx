import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, User, MapPin } from 'lucide-react';
import { BrandLogo } from '../brand/BrandLogo';

const navLinks = [
  { to: '/', label: 'Início' },
  { to: '/varejo', label: 'Varejo' },
  { to: '/atacado', label: 'Atacado' },
  { to: '/clube', label: 'Clube Mercadolar' },
  { to: '/promocoes', label: 'Promoções' },
  { to: '/cadastro', label: 'Cadastre-se' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-merca-blue-900 text-white shadow-lg">
      <div className="bg-merca-red-500 px-4 py-1.5 text-center text-sm font-medium">
        🎉 Cashback de até 5% no Clube Mercadolar — Cadastre-se grátis!
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <BrandLogo variant="white" size="md" />

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-white/10 ${
                location.pathname === link.to ? 'bg-white/15 text-merca-gold-400' : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button type="button" className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm hover:bg-white/10">
            <MapPin size={16} />
            Lojas
          </button>
          <button type="button" className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm hover:bg-white/10">
            <User size={16} />
            Minha Conta
          </button>
          <button type="button" className="relative rounded-lg bg-merca-green-500 px-4 py-2 text-sm font-semibold transition hover:bg-merca-green-600">
            <ShoppingCart size={18} />
          </button>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 px-4 py-4 lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={`block rounded-lg px-4 py-3 font-medium ${
                location.pathname === link.to ? 'bg-white/15 text-merca-gold-400' : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
