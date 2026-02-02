import PageHeader from "../components/PageHeader";
import { GoogleIcon, MicrophoneIcon, ChromeIcon, ChartIcon } from "../components/hero/icons";

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
  },
  {
    title: "YC Radiology AI Benchmarking",
    description:
      "Co-founded a startup building an independent benchmarking platform for radiology AI through Y Combinator's Fellowship program.",
    details: [
      "Received $220k equity-free grant (40k cash, 180k compute credits)",
      "Less than 1% acceptance rate (30-50 given out per year)",
      "More exclusive than YC's main batch",
      "Planning leave from Brown in Fall 2026 if traction continues",
    ],
    icon: ChartIcon,
    label: "Y Combinator Fellowship • 2025",
    href: null,
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
                className={`group relative overflow-hidden rounded-3xl border border-white/20 bg-white/5 backdrop-blur-xl p-8 card-glow ${
                  project.href ? "cursor-pointer" : ""
                }`}
              >
                {/* Gradient accent */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full blur-3xl" />

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-white/10">
                        <Icon className="h-5 w-5 text-white/70" />
                      </div>
                      <span className="text-xs text-white/50 uppercase tracking-wider">
                        {project.label}
                      </span>
                    </div>
                    {project.href && (
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
                        <div className="flex-shrink-0 w-1.5 h-1.5 mt-1.5 rounded-full bg-white/30" />
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
