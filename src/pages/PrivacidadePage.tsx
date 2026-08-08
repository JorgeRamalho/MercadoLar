import { Link } from 'react-router-dom';

export function PrivacidadePage() {
  return (
    <article className="section-padding mx-auto max-w-3xl">
      <h1 className="font-display text-3xl font-bold text-merca-blue-900 md:text-4xl">
        Política de Privacidade
      </h1>
      <p className="mt-2 text-sm text-slate-500">Última atualização: agosto de 2026</p>

      <div className="prose prose-slate mt-8 max-w-none space-y-6 text-slate-600">
        <section>
          <h2 className="font-display text-xl font-semibold text-merca-blue-900">
            1. Dados coletados
          </h2>
          <p className="mt-2 leading-relaxed">
            No cadastro, coletamos nome, CPF, e-mail, telefone, endereço e preferências de
            programas (Clube, MercadoCash, cartão). Dados de navegação podem ser registrados para
            melhorar o site.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-merca-blue-900">
            2. Uso dos dados
          </h2>
          <p className="mt-2 leading-relaxed">
            Utilizamos os dados para gestão do cadastro, entrega de benefícios, comunicação de
            promoções (com seu consentimento) e cumprimento de obrigações legais.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-merca-blue-900">
            3. Compartilhamento
          </h2>
          <p className="mt-2 leading-relaxed">
            Não vendemos dados pessoais. Compartilhamos apenas com parceiros necessários à operação
            (ex.: operadora de cartão, logística), sob contratos de proteção de dados.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-merca-blue-900">
            4. Seus direitos (LGPD)
          </h2>
          <p className="mt-2 leading-relaxed">
            Você pode solicitar acesso, correção, exclusão ou portabilidade dos dados pelo e-mail{' '}
            <a href="mailto:contato@mercadolar.com.br" className="font-medium text-merca-blue-700">
              contato@mercadolar.com.br
            </a>
            .
          </p>
        </section>
      </div>

      <p className="mt-10">
        <Link to="/termos" className="font-semibold text-merca-blue-700 hover:underline">
          Ver Termos de Uso
        </Link>
        {' · '}
        <Link to="/cadastro" className="font-semibold text-merca-blue-700 hover:underline">
          Voltar ao cadastro
        </Link>
      </p>
    </article>
  );
}
