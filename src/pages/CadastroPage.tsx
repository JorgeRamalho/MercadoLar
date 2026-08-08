import { UserPlus, CreditCard, Wallet, Crown } from 'lucide-react';
import { SectionTitle } from '../components/ui/SectionTitle';
import { CadastroForm } from '../components/forms/CadastroForm';
import { ofertaCartaoDestaque } from '@typescript/data/beneficios';

export function CadastroPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-merca-green-500 to-merca-blue-700 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center md:px-8">
          <UserPlus size={40} className="mx-auto mb-4" />
          <h1 className="font-display text-4xl font-extrabold md:text-5xl">
            Cadastre-se no Mercadolar
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg opacity-90">
            Clube de fidelidade, MercadoCash e cartão de crédito — tudo grátis, em um só cadastro.
          </p>
          <div className="mx-auto mt-8 flex max-w-lg flex-wrap justify-center gap-4">
            {[
              { icon: Crown, label: 'Clube Mercadolar' },
              { icon: Wallet, label: 'MercadoCash' },
              { icon: CreditCard, label: 'Cartão Crédito' },
            ].map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium backdrop-blur-sm"
              >
                <Icon size={16} />
                {label}
              </span>
            ))}
          </div>
          <p className="mt-6 font-display text-xl font-bold text-merca-gold-300">
            {ofertaCartaoDestaque.economia}
          </p>
        </div>
      </section>

      <section className="section-padding mx-auto max-w-7xl">
        <SectionTitle
          badge="Fidelidade"
          title="Cadastro de Cliente & Cartão"
          subtitle="Nome, telefone, endereço e escolha dos programas Clube, MercadoCash e cartão de crédito."
        />
        <CadastroForm />
      </section>
    </>
  );
}
