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

export default function PublicationCard({ publication }: PublicationCardProps) {
  return (
    <a
      href={publication.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative h-full w-full overflow-hidden rounded-3xl border border-white/20 bg-white/5 backdrop-blur-xl card-glow block"
    >
      {/* Subtle gradient accent */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-2xl" />
      
      <div className="relative z-10 flex h-full items-center p-5">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <PaperIcon className="h-4 w-4 text-white/50" />
            <span className="text-xs font-medium text-blue-400/80 uppercase tracking-wider">
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
          className="h-5 w-5 text-white/30 transition-all duration-300 group-hover:text-white/60 group-hover:translate-x-1 flex-shrink-0 ml-4"
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
