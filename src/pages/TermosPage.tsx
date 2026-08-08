import { Link } from 'react-router-dom';

export function TermosPage() {
  return (
    <article className="section-padding mx-auto max-w-3xl">
      <h1 className="font-display text-3xl font-bold text-merca-blue-900 md:text-4xl">
        Termos de Uso
      </h1>
      <p className="mt-2 text-sm text-slate-500">Última atualização: agosto de 2026</p>

      <div className="prose prose-slate mt-8 max-w-none space-y-6 text-slate-600">
        <section>
          <h2 className="font-display text-xl font-semibold text-merca-blue-900">
            1. Aceitação
          </h2>
          <p className="mt-2 leading-relaxed">
            Ao utilizar o site Mercadolar, você concorda com estes Termos de Uso e com nossa{' '}
            <Link to="/privacidade" className="font-medium text-merca-blue-700 underline">
              Política de Privacidade
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-merca-blue-900">
            2. Serviços
          </h2>
          <p className="mt-2 leading-relaxed">
            O site apresenta informações sobre lojas, promoções, programa de fidelidade (Clube
            Mercadolar), MercadoCash e cartão de crédito. Funcionalidades podem ser alteradas ou
            ampliadas sem aviso prévio.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-merca-blue-900">
            3. Cadastro
          </h2>
          <p className="mt-2 leading-relaxed">
            O cadastro exige dados verdadeiros. O titular é responsável pela segurança das credenciais
            e pelo uso da conta. Promoções e benefícios seguem regulamentos específicos de cada
            programa.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-merca-blue-900">
            4. Contato
          </h2>
          <p className="mt-2 leading-relaxed">
            Dúvidas sobre estes termos:{' '}
            <a href="mailto:contato@mercadolar.com.br" className="font-medium text-merca-blue-700">
              contato@mercadolar.com.br
            </a>
            {' '}ou 0800 123 4567.
          </p>
        </section>
      </div>

      <p className="mt-10">
        <Link to="/cadastro" className="font-semibold text-merca-blue-700 hover:underline">
          ← Voltar ao cadastro
        </Link>
      </p>
    </article>
  );
}
