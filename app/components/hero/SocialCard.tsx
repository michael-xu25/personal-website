import { GitHubIcon, LinkedInIcon } from "./icons";

export default function SocialCard() {
  const socials = [
    {
      name: "GitHub",
      href: "https://github.com/michael-xu25",
      icon: GitHubIcon,
      hoverColor: "group-hover:text-violet-300",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/mxu-michael/",
      icon: LinkedInIcon,
      hoverColor: "group-hover:text-blue-300",
    },
  ];

  return (
    <div className="relative h-full w-full overflow-hidden rounded-3xl border border-indigo-400/25 bg-indigo-950/30 backdrop-blur-xl card-glow">
      {/* Gradient fill */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/15 via-transparent to-blue-500/15" />
      
      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-center items-center p-6">
        <p className="text-xs text-violet-300 mb-4 uppercase tracking-wider">
          Connect
        </p>
        <div className="flex gap-6">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 rounded-xl bg-white/5 border border-white/10 hover:border-violet-400/30 hover:bg-violet-500/10 transition-all duration-300"
              aria-label={social.name}
            >
              <social.icon className={`h-6 w-6 text-white/70 transition-all duration-300 ${social.hoverColor} group-hover:scale-110`} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
