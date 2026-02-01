import { GitHubIcon, LinkedInIcon } from "./icons";

export default function SocialCard() {
  const socials = [
    {
      name: "GitHub",
      href: "https://github.com/michael-xu25",
      icon: GitHubIcon,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/mxu-michael/",
      icon: LinkedInIcon,
    },
  ];

  return (
    <div className="relative h-full w-full overflow-hidden rounded-3xl border border-white/20 bg-white/5 backdrop-blur-xl card-glow">
      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-center items-center p-6">
        <p className="text-xs text-white/50 mb-4 uppercase tracking-wider">
          Connect
        </p>
        <div className="flex gap-6">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              aria-label={social.name}
            >
              <social.icon className="h-6 w-6 text-white/60 transition-all duration-300 group-hover:text-white group-hover:scale-110" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
