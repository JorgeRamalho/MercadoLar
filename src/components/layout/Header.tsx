import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, User, MapPin, PartyPopper } from 'lucide-react';
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
  const [cartNotice, setCartNotice] = useState(false);
  const location = useLocation();

  const showCartNotice = () => {
    setCartNotice(true);
    window.setTimeout(() => setCartNotice(false), 4000);
  };

  return (
    <header className="sticky top-0 z-50 bg-merca-blue-900 text-white shadow-lg">
      <div className="flex items-center justify-center gap-2 bg-merca-red-500 px-4 py-1.5 text-center text-sm font-medium">
        <PartyPopper size={16} className="shrink-0" aria-hidden />
        <span>Cashback de até 5% no Clube Mercadolar — Cadastre-se grátis!</span>
      </div>

      {cartNotice && (
        <div
          role="status"
          className="bg-merca-gold-500 px-4 py-2 text-center text-sm font-semibold text-merca-blue-900"
        >
          Carrinho em breve — enquanto isso, explore nossas promoções!
        </div>
      )}

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <BrandLogo variant="white" size="md" />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
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
          <Link
            to="/lojas"
            className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm hover:bg-white/10"
          >
            <MapPin size={16} aria-hidden />
            Lojas
          </Link>
          <Link
            to="/cadastro"
            className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm hover:bg-white/10"
          >
            <User size={16} aria-hidden />
            Minha Conta
          </Link>
          <button
            type="button"
            className="relative rounded-lg bg-merca-green-500 px-4 py-2 text-sm font-semibold transition hover:bg-merca-green-600"
            aria-label="Ver carrinho (em breve)"
            onClick={showCartNotice}
          >
            <ShoppingCart size={18} aria-hidden />
          </button>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 px-4 py-4 lg:hidden" aria-label="Principal mobile">
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
          <Link
            to="/lojas"
            onClick={() => setOpen(false)}
            className="block rounded-lg px-4 py-3 font-medium"
          >
            Lojas
          </Link>
          <Link
            to="/cadastro"
            onClick={() => setOpen(false)}
            className="block rounded-lg px-4 py-3 font-medium"
          >
            Minha Conta
          </Link>
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              showCartNotice();
            }}
            className="block w-full rounded-lg px-4 py-3 text-left font-medium"
          >
            Carrinho (em breve)
          </button>
        </nav>
      )}
    </header>
  );
}
