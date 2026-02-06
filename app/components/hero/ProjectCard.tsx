import { ComponentType } from "react";

interface Project {
  title: string;
  description: string;
  href: string | null;
  icon: ComponentType<{ className?: string }>;
  label: string;
}

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

const cardThemes: Record<string, { bg: string; border: string; gradient: string; iconColor: string; labelColor: string }> = {
  "Google Research": {
    bg: "bg-violet-950/40",
    border: "border-violet-400/30",
    gradient: "from-violet-500/40 via-violet-500/10",
    iconColor: "text-violet-400",
    labelColor: "text-violet-300",
  },
  "CAB Schedule Exporter": {
    bg: "bg-cyan-950/40",
    border: "border-cyan-400/30",
    gradient: "from-cyan-500/40 via-cyan-500/10",
    iconColor: "text-cyan-400",
    labelColor: "text-cyan-300",
  },
  "TB Cough Diagnosis": {
    bg: "bg-rose-950/40",
    border: "border-rose-400/30",
    gradient: "from-rose-500/40 via-rose-500/10",
    iconColor: "text-rose-400",
    labelColor: "text-rose-300",
  },
  "Catan World Record": {
    bg: "bg-amber-950/40",
    border: "border-amber-400/30",
    gradient: "from-amber-500/40 via-amber-500/10",
    iconColor: "text-amber-400",
    labelColor: "text-amber-300",
  },
  "Economics Nationals": {
    bg: "bg-blue-950/40",
    border: "border-blue-400/30",
    gradient: "from-blue-500/40 via-blue-500/10",
    iconColor: "text-blue-400",
    labelColor: "text-blue-300",
  },
};

const defaultTheme = {
  bg: "bg-indigo-950/40",
  border: "border-indigo-400/30",
  gradient: "from-indigo-500/40 via-indigo-500/10",
  iconColor: "text-indigo-400",
  labelColor: "text-indigo-300",
};

export default function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const Icon = project.icon;
  const theme = cardThemes[project.title] || defaultTheme;
  
  const CardWrapper = project.href ? 'a' : 'div';
  const linkProps = project.href ? {
    href: project.href,
    target: "_blank",
    rel: "noopener noreferrer",
  } : {};
  
  return (
    <CardWrapper
      {...linkProps}
      className={`group relative h-full w-full overflow-hidden rounded-3xl border ${theme.border} ${theme.bg} backdrop-blur-xl card-glow block ${project.href ? 'cursor-pointer' : ''}`}
    >
      {/* Colored gradient wash */}
      <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl ${theme.gradient} to-transparent rounded-full blur-2xl`} />
      <div className={`absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr ${theme.gradient} to-transparent rounded-full blur-2xl opacity-50`} />
      
      {/* Content */}
      <div className="relative z-10 flex h-full flex-col p-5">
        <div className="flex items-start justify-between flex-1">
          <div className="space-y-2 flex-1">
            <div className="flex items-center gap-2">
              <Icon className={`h-4 w-4 ${theme.iconColor}`} />
              <p className={`text-xs uppercase tracking-wider ${theme.labelColor}/70`}>
                {project.label}
              </p>
            </div>
            <h3 className={`font-medium text-white ${featured ? 'text-lg' : 'text-base'}`}>
              {project.title}
            </h3>
            <p className={`text-white/60 leading-relaxed ${featured ? 'text-sm' : 'text-xs'}`}>
              {project.description}
            </p>
          </div>
          
          {/* Arrow icon */}
          {project.href && (
            <svg
              className={`h-5 w-5 ${theme.iconColor}/50 transition-all duration-300 group-hover:${theme.iconColor} group-hover:translate-x-1 flex-shrink-0 ml-3 mt-1`}
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
          )}
        </div>
      </div>
    </CardWrapper>
  );
}
