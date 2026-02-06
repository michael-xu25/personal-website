import { PaperIcon } from "./icons";

interface Publication {
  title: string;
  venue: string;
  description: string;
  href: string;
}

interface PublicationCardProps {
  publication: Publication;
}

const venueThemes: Record<string, { bg: string; border: string; gradient: string; color: string; badgeBg: string }> = {
  "KDD 2024": {
    bg: "bg-blue-950/40",
    border: "border-blue-400/25",
    gradient: "from-blue-500/30 to-transparent",
    color: "text-blue-300",
    badgeBg: "bg-blue-500/20",
  },
  "ICLR 2024": {
    bg: "bg-purple-950/40",
    border: "border-purple-400/25",
    gradient: "from-purple-500/30 to-transparent",
    color: "text-purple-300",
    badgeBg: "bg-purple-500/20",
  },
};

const defaultTheme = {
  bg: "bg-indigo-950/40",
  border: "border-indigo-400/25",
  gradient: "from-indigo-500/30 to-transparent",
  color: "text-indigo-300",
  badgeBg: "bg-indigo-500/20",
};

export default function PublicationCard({ publication }: PublicationCardProps) {
  const theme = venueThemes[publication.venue] || defaultTheme;
  
  return (
    <a
      href={publication.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative h-full w-full overflow-hidden rounded-3xl border ${theme.border} ${theme.bg} backdrop-blur-xl card-glow block`}
    >
      {/* Color gradient accent */}
      <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl ${theme.gradient} rounded-full blur-2xl`} />
      
      <div className="relative z-10 flex h-full items-center p-5">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <PaperIcon className={`h-4 w-4 ${theme.color}`} />
            <span className={`text-xs font-semibold uppercase tracking-wider ${theme.color}`}>
              {publication.venue}
            </span>
          </div>
          <h3 className="text-base font-medium text-white mb-1">
            {publication.title}
          </h3>
          <p className="text-xs text-white/50 leading-relaxed">
            {publication.description}
          </p>
        </div>
        
        {/* Arrow */}
        <svg
          className={`h-5 w-5 ${theme.color}/50 transition-all duration-300 group-hover:translate-x-1 flex-shrink-0 ml-4`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </div>
    </a>
  );
}
