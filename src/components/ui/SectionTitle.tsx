interface SectionTitleProps {
  badge?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
}

export function SectionTitle({ badge, title, subtitle, light }: SectionTitleProps) {
  return (
    <div className="mb-12 text-center">
      {badge && (
        <span
          className={`mb-3 inline-block rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wider ${
            light ? 'bg-white/20 text-merca-gold-400' : 'bg-merca-blue-50 text-merca-blue-700'
          }`}
        >
          {badge}
        </span>
      )}
      <h2
        className={`font-display text-3xl font-bold md:text-4xl ${
          light ? 'text-white' : 'text-merca-blue-900'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mx-auto mt-3 max-w-2xl text-lg ${light ? 'text-slate-300' : 'text-slate-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
