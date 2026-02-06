import PageHeader from "../components/PageHeader";
import { GoogleIcon, MicrophoneIcon, ChromeIcon } from "../components/hero/icons";

const projects = [
  {
    title: "Google MedGemma Audio Diagnostics",
    description:
      "Developing audio diagnostic capabilities for Google's Gemini and MedGemma models. Received a $150k GPU space grant for an independent project to expand medical AI beyond text and images into audio-based diagnosis.",
    details: [
      "Earned opportunity through cold-email networking with ISEF alums",
      "Pitched to 250 Google engineers and advocated for a longer-term role",
      "Contributing audio pretraining foundation model as building block for downstream tasks",
      "Expanding capabilities beyond TB to broader diagnostic applications",
    ],
    icon: GoogleIcon,
    label: "Research • 2025 – Present",
    href: null,
    bg: "bg-violet-950/50",
    border: "border-violet-400/30",
    accent: "from-violet-500/40",
    iconBg: "bg-violet-500/25",
    iconColor: "text-violet-300",
    dotColor: "bg-violet-400",
    arrowColor: "text-violet-300",
    topBorder: "from-violet-500 via-violet-500/50 to-transparent",
  },
  {
    title: "TB Cough Diagnosis (SCOMAE)",
    description:
      "Smartphone application detecting Tuberculosis solely through cough sounds with state-of-the-art accuracy (0.843 AUROC). Winner of Grand and Special Awards at Regeneron ISEF 2024.",
    details: [
      "Developed using Masked Autoencoders and Supervised Contrastive Learning",
      "Pretrained generalist encoder on AudioSet (2 million 10-second clips)",
      "Fine-tuned on TB patient data for diagnostic classification",
      "Awarded $5,000 from USAID, $500 from Regeneron, $500 + internship offer from Chevron",
    ],
    icon: MicrophoneIcon,
    label: "ISEF 2024 • Grand Award",
    href: "https://isef.net/project/robo036t-diagnosing-tuberculosis-from-cough-acoustics",
    bg: "bg-rose-950/50",
    border: "border-rose-400/30",
    accent: "from-rose-500/40",
    iconBg: "bg-rose-500/25",
    iconColor: "text-rose-300",
    dotColor: "bg-rose-400",
    arrowColor: "text-rose-300",
    topBorder: "from-rose-500 via-rose-500/50 to-transparent",
  },
  {
    title: "Brown CAB Schedule Exporter",
    description:
      "Chrome extension that exports Brown University class schedules from Courses@Brown to any calendar application with one click.",
    details: [
      "Automatic .ics file generation for Google Calendar, Apple Calendar, Outlook",
      "Creates recurring events for the entire semester",
      "Includes course times, days, and locations",
      "Built as a first-year Brown CS student",
    ],
    icon: ChromeIcon,
    label: "Chrome Extension • 2026",
    href: "https://chromewebstore.google.com/detail/brown-cab-schedule-export/hpfadilcgdepmpaechlafaidlodaegok",
    bg: "bg-cyan-950/50",
    border: "border-cyan-400/30",
    accent: "from-cyan-500/40",
    iconBg: "bg-cyan-500/25",
    iconColor: "text-cyan-300",
    dotColor: "bg-cyan-400",
    arrowColor: "text-cyan-300",
    topBorder: "from-cyan-500 via-cyan-500/50 to-transparent",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen px-4 py-16 md:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <PageHeader
          title="Projects"
          subtitle="Research, tools, and ventures I've built."
        />

        <div className="grid gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            const Wrapper = project.href ? "a" : "div";
            const wrapperProps = project.href
              ? { href: project.href, target: "_blank", rel: "noopener noreferrer" }
              : {};

            return (
              <Wrapper
                key={index}
                {...wrapperProps}
                className={`group relative overflow-hidden rounded-3xl border ${project.border} ${project.bg} backdrop-blur-xl p-8 card-glow ${
                  project.href ? "cursor-pointer" : ""
                }`}
              >
                {/* Top accent line */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${project.topBorder}`} />
                
                {/* Gradient accent */}
                <div className={`absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl ${project.accent} to-transparent rounded-full blur-3xl`} />

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-xl ${project.iconBg}`}>
                        <Icon className={`h-5 w-5 ${project.iconColor}`} />
                      </div>
                      <span className={`text-xs uppercase tracking-wider ${project.iconColor}/80`}>
                        {project.label}
                      </span>
                    </div>
                    {project.href && (
                      <svg
                        className={`h-5 w-5 ${project.arrowColor}/50 transition-all duration-300 group-hover:${project.arrowColor} group-hover:translate-x-1`}
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

                  {/* Title & Description */}
                  <h2 className="font-serif text-2xl font-medium text-white mb-3">
                    {project.title}
                  </h2>
                  <p className="text-white/60 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Details */}
                  <ul className="space-y-2">
                    {project.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-white/50">
                        <div className={`flex-shrink-0 w-1.5 h-1.5 mt-1.5 rounded-full ${project.dotColor}`} />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </main>
  );
}
