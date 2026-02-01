import { ComponentType } from "react";

interface Project {
  title: string;
  description: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
  label: string;
}

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export default function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const Icon = project.icon;
  
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative h-full w-full overflow-hidden rounded-3xl border border-white/20 bg-white/5 backdrop-blur-xl card-glow block"
    >
      {/* Subtle gradient accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full blur-2xl" />
      
      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-between p-5">
        <div className="flex items-start justify-between">
          <div className="space-y-2 flex-1">
            <div className="flex items-center gap-2">
              <Icon className="h-4 w-4 text-white/50" />
              <p className="text-xs text-white/50 uppercase tracking-wider">
                {project.label}
              </p>
            </div>
            <h3 className={`font-medium text-white ${featured ? 'text-lg' : 'text-base'}`}>
              {project.title}
            </h3>
            <p className={`text-white/50 leading-relaxed ${featured ? 'text-sm' : 'text-xs'}`}>
              {project.description}
            </p>
          </div>
        </div>
        
        {/* Arrow icon */}
        <div className="flex justify-end mt-2">
          <svg
            className="h-5 w-5 text-white/30 transition-all duration-300 group-hover:text-white/60 group-hover:translate-x-1"
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
      </div>
    </a>
  );
}
