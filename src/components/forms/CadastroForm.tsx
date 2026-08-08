import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import {
  CreditCard,
  User,
  MapPin,
  CheckCircle2,
  Gift,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Loader2,
} from 'lucide-react';
import type { CadastroCliente, TipoCliente } from '@typescript/types';
import {
  formatCEP,
  formatCPF,
  formatPhone,
  validateCPF,
  validateEmail,
} from '@typescript/utils/validation';
import { fetchAddressByCEP } from '@typescript/utils/viacep';
import { APP_CONFIG } from '@/config';
import { CardOfferPanel } from './CardOfferPanel';

const initialForm: CadastroCliente = {
  nome: '',
  cpf: '',
  email: '',
  telefone: '',
  whatsapp: '',
  dataNascimento: '',
  cep: '',
  endereco: '',
  numero: '',
  complemento: '',
  bairro: '',
  cidade: '',
  estado: '',
  tipoCliente: 'varejo',
  programaClube: true,
  programaMercadoCash: true,
  cartaoCredito: true,
  rendaMensal: '',
  aceitaCartao: false,
  aceitaTermos: false,
  aceitaPromocoes: true,
};

type FormErrors = Partial<Record<keyof CadastroCliente, string>>;

const STEPS = [
  { id: 1, icon: User, label: 'Dados Pessoais' },
  { id: 2, icon: MapPin, label: 'Endereço' },
  { id: 3, icon: CreditCard, label: 'Clube & Cartão' },
  { id: 4, icon: Sparkles, label: 'Confirmar' },
];

export function CadastroForm() {
  const [form, setForm] = useState<CadastroCliente>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [cartaoGerado, setCartaoGerado] = useState('');
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [cepLoading, setCepLoading] = useState(false);
  const [cepError, setCepError] = useState('');

  const update = <K extends keyof CadastroCliente>(field: K, value: CadastroCliente[K]) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validateStep = (s: number): boolean => {
    const newErrors: FormErrors = {};

    if (s === 1) {
      if (!form.nome.trim()) newErrors.nome = 'Nome é obrigatório';
      if (!validateCPF(form.cpf)) newErrors.cpf = 'CPF inválido';
      if (!validateEmail(form.email)) newErrors.email = 'E-mail inválido';
      if (form.telefone.replace(/\D/g, '').length < 10) newErrors.telefone = 'Telefone inválido';
      if (!form.dataNascimento) newErrors.dataNascimento = 'Data de nascimento obrigatória';
    }

    if (s === 2) {
      if (form.cep.replace(/\D/g, '').length !== 8) newErrors.cep = 'CEP inválido';
      if (!form.endereco.trim()) newErrors.endereco = 'Endereço obrigatório';
      if (!form.numero.trim()) newErrors.numero = 'Número obrigatório';
      if (!form.bairro.trim()) newErrors.bairro = 'Bairro obrigatório';
      if (!form.cidade.trim()) newErrors.cidade = 'Cidade obrigatória';
      if (!form.estado.trim()) newErrors.estado = 'Estado obrigatório';
    }

    if (s === 3) {
      if (form.cartaoCredito && !form.rendaMensal) newErrors.rendaMensal = 'Informe a renda para análise';
      if (!form.programaClube && !form.programaMercadoCash && !form.cartaoCredito) {
        newErrors.programaClube = 'Selecione ao menos um programa';
      }
    }

    if (s === 4) {
      if (!form.aceitaTermos) newErrors.aceitaTermos = 'Aceite os termos para continuar';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const avancar = () => {
    if (validateStep(step)) setStep((s) => Math.min(s + 1, 4));
  };

  const voltar = () => setStep((s) => Math.max(s - 1, 1));

  const gerarNumeroCartao = (cpf: string): string => {
    const digits = cpf.replace(/\D/g, '').slice(-6);
    const random = Math.floor(1000 + Math.random() * 9000);
    return `6042 ${digits.slice(0, 2)}${digits.slice(2, 4)} ${digits.slice(4, 6)}${random.toString().slice(0, 2)} ${random}`;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validateStep(4)) return;

    setSubmitting(true);
    await new Promise((resolve) => window.setTimeout(resolve, 900));
    setCartaoGerado(gerarNumeroCartao(form.cpf));
    setSubmitted(true);
    setSubmitting(false);
  };

  const handleCepBlur = async () => {
    const digits = form.cep.replace(/\D/g, '');
    if (digits.length !== 8) return;

    setCepLoading(true);
    setCepError('');
    try {
      const address = await fetchAddressByCEP(form.cep);
      if (!address) {
        setCepError('CEP não encontrado. Preencha o endereço manualmente.');
        return;
      }
      setForm((prev) => ({
        ...prev,
        endereco: address.endereco || prev.endereco,
        bairro: address.bairro || prev.bairro,
        cidade: address.cidade,
        estado: address.estado,
      }));
    } catch {
      setCepError('Não foi possível buscar o CEP. Tente novamente.');
    } finally {
      setCepLoading(false);
    }
  };

  const inputClass = (field: keyof CadastroCliente) =>
    `w-full rounded-xl border px-4 py-3 text-sm transition focus:outline-none focus:ring-2 focus:ring-merca-blue-500/30 ${
      errors[field] ? 'border-merca-red-500 bg-red-50' : 'border-slate-200 bg-white'
    }`;

  if (submitted) {
    const programas = [
      form.programaClube && 'Clube Mercadolar',
      form.programaMercadoCash && 'MercadoCash',
      form.cartaoCredito && 'Cartão Crédito',
    ].filter(Boolean);

    return (
      <div className="mx-auto max-w-lg text-center">
        <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-merca-green-500/10">
          <CheckCircle2 size={48} className="text-merca-green-500" />
        </div>
        <h3 className="font-display text-2xl font-bold text-merca-blue-900">
          Cadastro realizado com sucesso!
        </h3>
        <p className="mt-2 text-slate-600">
          Bem-vindo(a), <strong>{form.nome.split(' ')[0]}</strong>! Seus programas estão ativos.
        </p>

        <div className="card-hover mx-auto mt-8 max-w-sm overflow-hidden rounded-2xl bg-gradient-to-br from-merca-blue-900 via-merca-blue-700 to-merca-green-600 p-6 text-left text-white shadow-2xl">
          <div className="mb-6 flex items-center justify-between">
            <span className="font-display text-lg font-bold">Mercadolar</span>
            <CreditCard size={28} className="text-merca-gold-400" />
          </div>
          <p className="font-mono text-lg tracking-widest">{cartaoGerado}</p>
          <div className="mt-4 flex justify-between text-sm">
            <div>
              <p className="text-white/60">Titular</p>
              <p className="font-semibold uppercase">{form.nome}</p>
            </div>
            <div>
              <p className="text-white/60">Programas</p>
              <p className="font-semibold">{programas.join(' + ')}</p>
            </div>
          </div>
          <div className="mt-4 space-y-2">
            <div className="rounded-lg bg-white/10 px-3 py-2 text-sm">
              <Gift size={14} className="mr-1 inline text-merca-gold-400" />
              <strong>{APP_CONFIG.pontosBoasVindas} pontos</strong> de boas-vindas ativos!
            </div>
            {form.programaMercadoCash && (
              <div className="rounded-lg bg-white/10 px-3 py-2 text-sm">
                💰 MercadoCash: <strong>{APP_CONFIG.cashbackInicial} cashback</strong> na 1ª compra
              </div>
            )}
            {form.aceitaCartao && (
              <div className="rounded-lg bg-merca-gold-400/20 px-3 py-2 text-sm">
                📬 Cartão físico enviado para: {form.endereco}, {form.numero}
              </div>
            )}
          </div>
        </div>

        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setForm(initialForm);
            setCartaoGerado('');
            setStep(1);
          }}
          className="mt-8 text-sm font-medium text-merca-blue-700 underline"
        >
          Fazer novo cadastro
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-5">
      {/* Painel lateral de oferta — desktop */}
      <div className="hidden lg:col-span-2 lg:block">
        <div className="sticky top-28">
          <CardOfferPanel
            programaClube={form.programaClube}
            programaMercadoCash={form.programaMercadoCash}
            cartaoCredito={form.cartaoCredito}
            aceitaCartao={form.aceitaCartao}
            onToggle={(field, value) => update(field, value)}
          />
        </div>
      </div>

      {/* Formulário */}
      <form onSubmit={handleSubmit} className="lg:col-span-3">
        {/* Progresso */}
        <div className="mb-8 grid grid-cols-4 gap-2">
          {STEPS.map(({ id, icon: Icon, label }) => (
            <div
              key={id}
              className={`flex flex-col items-center rounded-xl border p-3 text-center transition ${
                step === id
                  ? 'border-merca-blue-700 bg-merca-blue-50'
                  : step > id
                    ? 'border-merca-green-500 bg-merca-green-500/5'
                    : 'border-slate-100 bg-slate-50'
              }`}
            >
              <div
                className={`mb-1 flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold ${
                  step >= id ? 'bg-merca-blue-700 text-white' : 'bg-slate-200 text-slate-500'
                }`}
              >
                {step > id ? '✓' : id}
              </div>
              <Icon size={14} className="mb-0.5 text-merca-blue-700" />
              <span className="text-[10px] font-medium leading-tight">{label}</span>
            </div>
          ))}
        </div>

        {/* Step 1 — Dados pessoais */}
        {step === 1 && (
          <fieldset className="animate-fade-in rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <legend className="px-2 font-display text-lg font-semibold text-merca-blue-900">
              Dados Pessoais
            </legend>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="md:col-span-2">
                <label className="mb-1 block text-sm font-medium">Nome completo *</label>
                <input className={inputClass('nome')} value={form.nome} onChange={(e) => update('nome', e.target.value)} placeholder="Seu nome completo" />
                {errors.nome && <p className="mt-1 text-xs text-merca-red-500">{errors.nome}</p>}
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">CPF *</label>
                <input className={inputClass('cpf')} value={form.cpf} onChange={(e) => update('cpf', formatCPF(e.target.value))} placeholder="000.000.000-00" maxLength={14} />
                {errors.cpf && <p className="mt-1 text-xs text-merca-red-500">{errors.cpf}</p>}
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Data de nascimento *</label>
                <input type="date" className={inputClass('dataNascimento')} value={form.dataNascimento} onChange={(e) => update('dataNascimento', e.target.value)} />
                {errors.dataNascimento && <p className="mt-1 text-xs text-merca-red-500">{errors.dataNascimento}</p>}
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">E-mail *</label>
                <input type="email" className={inputClass('email')} value={form.email} onChange={(e) => update('email', e.target.value)} placeholder="seu@email.com" />
                {errors.email && <p className="mt-1 text-xs text-merca-red-500">{errors.email}</p>}
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Telefone *</label>
                <input className={inputClass('telefone')} value={form.telefone} onChange={(e) => update('telefone', formatPhone(e.target.value))} placeholder="(00) 00000-0000" maxLength={15} />
                {errors.telefone && <p className="mt-1 text-xs text-merca-red-500">{errors.telefone}</p>}
              </div>
              <div className="md:col-span-2">
                <label className="mb-1 block text-sm font-medium">WhatsApp</label>
                <input className={inputClass('whatsapp')} value={form.whatsapp} onChange={(e) => update('whatsapp', formatPhone(e.target.value))} placeholder="(00) 00000-0000 (opcional)" maxLength={15} />
              </div>
            </div>
          </fieldset>
        )}

        {/* Step 2 — Endereço */}
        {step === 2 && (
          <fieldset className="animate-fade-in rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <legend className="px-2 font-display text-lg font-semibold text-merca-blue-900">
              Endereço para entrega do cartão
            </legend>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium">CEP *</label>
                <div className="relative">
                  <input
                    className={inputClass('cep')}
                    value={form.cep}
                    onChange={(e) => update('cep', formatCEP(e.target.value))}
                    onBlur={handleCepBlur}
                    placeholder="00000-000"
                    maxLength={9}
                    aria-describedby={cepError ? 'cep-hint' : undefined}
                  />
                  {cepLoading && (
                    <Loader2
                      size={18}
                      className="absolute right-3 top-1/2 -translate-y-1/2 animate-spin text-merca-blue-700"
                      aria-hidden
                    />
                  )}
                </div>
                {errors.cep && <p className="mt-1 text-xs text-merca-red-500">{errors.cep}</p>}
                {cepError && (
                  <p id="cep-hint" className="mt-1 text-xs text-amber-600">{cepError}</p>
                )}
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Bairro *</label>
                <input className={inputClass('bairro')} value={form.bairro} onChange={(e) => update('bairro', e.target.value)} placeholder="Seu bairro" />
                {errors.bairro && <p className="mt-1 text-xs text-merca-red-500">{errors.bairro}</p>}
              </div>
              <div className="md:col-span-2">
                <label className="mb-1 block text-sm font-medium">Rua / Avenida *</label>
                <input className={inputClass('endereco')} value={form.endereco} onChange={(e) => update('endereco', e.target.value)} placeholder="Nome da rua" />
                {errors.endereco && <p className="mt-1 text-xs text-merca-red-500">{errors.endereco}</p>}
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Número *</label>
                <input className={inputClass('numero')} value={form.numero} onChange={(e) => update('numero', e.target.value)} placeholder="123" />
                {errors.numero && <p className="mt-1 text-xs text-merca-red-500">{errors.numero}</p>}
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Complemento</label>
                <input className={inputClass('complemento')} value={form.complemento} onChange={(e) => update('complemento', e.target.value)} placeholder="Apto, bloco..." />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Cidade *</label>
                <input className={inputClass('cidade')} value={form.cidade} onChange={(e) => update('cidade', e.target.value)} placeholder="Sua cidade" />
                {errors.cidade && <p className="mt-1 text-xs text-merca-red-500">{errors.cidade}</p>}
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Estado *</label>
                <select className={inputClass('estado')} value={form.estado} onChange={(e) => update('estado', e.target.value)}>
                  <option value="">Selecione</option>
                  {['SP', 'RJ', 'MG', 'PR', 'RS', 'SC', 'BA', 'PE', 'CE', 'GO', 'DF', 'AM', 'PA'].map((uf) => (
                    <option key={uf} value={uf}>{uf}</option>
                  ))}
                </select>
                {errors.estado && <p className="mt-1 text-xs text-merca-red-500">{errors.estado}</p>}
              </div>
            </div>
          </fieldset>
        )}

        {/* Step 3 — Programas (mobile mostra painel aqui) */}
        {step === 3 && (
          <div className="animate-fade-in space-y-6">
            <fieldset className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <legend className="px-2 font-display text-lg font-semibold text-merca-blue-900">
                Perfil de compra
              </legend>
              <div className="mt-4 space-y-2">
                {([
                  ['varejo', 'Varejo — Compras do dia a dia'],
                  ['atacado', 'Atacado — Grandes volumes'],
                  ['ambos', 'Ambos — Varejo e Atacado'],
                ] as [TipoCliente, string][]).map(([value, label]) => (
                  <label key={value} className={`flex cursor-pointer items-center gap-3 rounded-xl border p-3 transition ${form.tipoCliente === value ? 'border-merca-blue-700 bg-merca-blue-50' : 'border-slate-200'}`}>
                    <input type="radio" name="tipoCliente" checked={form.tipoCliente === value} onChange={() => update('tipoCliente', value)} className="accent-merca-blue-700" />
                    <span className="text-sm">{label}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="lg:hidden">
              <CardOfferPanel
                programaClube={form.programaClube}
                programaMercadoCash={form.programaMercadoCash}
                cartaoCredito={form.cartaoCredito}
                aceitaCartao={form.aceitaCartao}
                onToggle={(field, value) => update(field, value)}
              />
            </div>

            {form.cartaoCredito && (
              <fieldset className="rounded-2xl border border-amber-200 bg-amber-50/50 p-6 shadow-sm">
                <legend className="px-2 font-display text-lg font-semibold text-merca-blue-900">
                  Análise de crédito
                </legend>
                <div className="mt-4">
                  <label className="mb-1 block text-sm font-medium">Renda mensal aproximada *</label>
                  <select className={inputClass('rendaMensal')} value={form.rendaMensal} onChange={(e) => update('rendaMensal', e.target.value)}>
                    <option value="">Selecione</option>
                    <option value="ate2000">Até R$ 2.000</option>
                    <option value="2000-4000">R$ 2.000 a R$ 4.000</option>
                    <option value="4000-8000">R$ 4.000 a R$ 8.000</option>
                    <option value="acima8000">Acima de R$ 8.000</option>
                  </select>
                  {errors.rendaMensal && <p className="mt-1 text-xs text-merca-red-500">{errors.rendaMensal}</p>}
                  <p className="mt-2 text-xs text-slate-500">Limite pré-aprovado em até 2 minutos. Sem consulta ao SPC/Serasa nesta etapa.</p>
                </div>
              </fieldset>
            )}
            {errors.programaClube && <p className="text-xs text-merca-red-500">{errors.programaClube}</p>}
          </div>
        )}

        {/* Step 4 — Confirmação */}
        {step === 4 && (
          <div className="animate-fade-in space-y-6">
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <h3 className="font-display text-lg font-semibold text-merca-blue-900">Resumo do cadastro</h3>
              <dl className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between border-b border-slate-50 py-2">
                  <dt className="text-slate-500">Nome</dt>
                  <dd className="font-medium">{form.nome}</dd>
                </div>
                <div className="flex justify-between border-b border-slate-50 py-2">
                  <dt className="text-slate-500">Telefone</dt>
                  <dd className="font-medium">{form.telefone}</dd>
                </div>
                <div className="flex justify-between border-b border-slate-50 py-2">
                  <dt className="text-slate-500">Endereço</dt>
                  <dd className="text-right font-medium">{form.endereco}, {form.numero} — {form.bairro}</dd>
                </div>
                <div className="flex justify-between py-2">
                  <dt className="text-slate-500">Programas</dt>
                  <dd className="font-medium text-merca-green-600">
                    {[form.programaClube && 'Clube', form.programaMercadoCash && 'MercadoCash', form.cartaoCredito && 'Crédito'].filter(Boolean).join(' + ')}
                  </dd>
                </div>
              </dl>
            </div>

            <div className="space-y-3 rounded-2xl border border-slate-100 bg-slate-50 p-6">
              <label className="flex cursor-pointer items-start gap-3">
                <input type="checkbox" checked={form.aceitaTermos} onChange={(e) => update('aceitaTermos', e.target.checked)} className="mt-1 accent-merca-blue-700" />
                <span className="text-sm text-slate-600">
                  Li e aceito os{' '}
                  <Link to="/termos" className="font-medium text-merca-blue-700 underline">
                    Termos de Uso
                  </Link>{' '}
                  e a{' '}
                  <Link to="/privacidade" className="font-medium text-merca-blue-700 underline">
                    Política de Privacidade
                  </Link>{' '}
                  *
                </span>
              </label>
              {errors.aceitaTermos && <p className="text-xs text-merca-red-500">{errors.aceitaTermos}</p>}
              <label className="flex cursor-pointer items-start gap-3">
                <input type="checkbox" checked={form.aceitaPromocoes} onChange={(e) => update('aceitaPromocoes', e.target.checked)} className="mt-1 accent-merca-blue-700" />
                <span className="text-sm text-slate-600">Quero receber ofertas Do Chão à Mesa e promoções por e-mail e WhatsApp</span>
              </label>
            </div>
          </div>
        )}

        {/* Navegação */}
        <div className="mt-8 flex gap-4">
          {step > 1 && (
            <button type="button" onClick={voltar} className="flex items-center gap-2 rounded-xl border border-slate-200 px-6 py-3 font-medium text-slate-600 transition hover:bg-slate-50">
              <ChevronLeft size={18} /> Voltar
            </button>
          )}
          {step < 4 ? (
            <button type="button" onClick={avancar} className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-merca-blue-700 py-3 font-display font-bold text-white transition hover:bg-merca-blue-900">
              Continuar <ChevronRight size={18} />
            </button>
          ) : (
            <button
              type="submit"
              disabled={submitting}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-merca-green-500 py-4 font-display text-lg font-bold text-white shadow-lg transition hover:bg-merca-green-600 disabled:opacity-70"
            >
              {submitting ? (
                <>
                  <Loader2 size={20} className="animate-spin" aria-hidden />
                  Processando cadastro…
                </>
              ) : (
                <>
                  <CreditCard size={20} aria-hidden />
                  Criar conta e gerar meu cartão
                </>
              )}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
