interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="mb-12">
      <h1 className="font-serif text-4xl md:text-5xl font-medium gradient-text mb-4">
        {title}
      </h1>
      {subtitle && (
        <p className="text-lg text-white/60 max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
