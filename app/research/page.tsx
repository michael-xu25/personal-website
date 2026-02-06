import PageHeader from "../components/PageHeader";
import { PaperIcon } from "../components/hero/icons";

const publications = [
  {
    title: "AquaSent-TMMAE: A Self-Supervised Learning Method for Water Quality Monitoring from Spatiotemporal Data",
    venue: "KDD 2024",
    venueFullName: "30th ACM SIGKDD Conference on Knowledge Discovery and Data Mining",
    location: "Barcelona, Spain",
    authors: "Lee, C., Nabulsi, F., Xu, M., et al.",
    abstract:
      "A novel self-supervised learning approach for monitoring water quality using spatiotemporal data. The method leverages masked autoencoders to learn robust representations from environmental sensor data, enabling accurate water quality predictions with limited labeled data.",
    contribution:
      "Contributed to the model architecture design and experimental validation of the temporal masking strategy.",
    href: "https://deepspatial2024.github.io/papers/AquaSent-TMMAE.pdf",
    bg: "bg-blue-950/50",
    border: "border-blue-400/30",
    accent: "from-blue-500/40",
    venueColor: "text-blue-300",
    badgeBg: "bg-blue-500/25",
    topBorder: "from-blue-500 via-blue-500/50 to-transparent",
  },
  {
    title: "CLE-SMOTE: Addressing Extreme Imbalanced Data Classification with Contrastive Learning-Enhanced SMOTE",
    venue: "ICLR 2024",
    venueFullName: "International Conference on Learning Representations",
    location: "Vienna, Austria",
    authors: "Lee, C., Nabulsi, F., Xu, M., et al.",
    abstract:
      "A method combining contrastive learning with SMOTE to handle extreme class imbalance in classification tasks. The approach uses contrastive representations to generate more meaningful synthetic samples, improving classification performance on highly skewed datasets.",
    contribution:
      "Developed the contrastive learning integration and conducted ablation studies on synthetic sample quality.",
    href: "https://openreview.net/forum?id=e641mv2xsf",
    bg: "bg-purple-950/50",
    border: "border-purple-400/30",
    accent: "from-purple-500/40",
    venueColor: "text-purple-300",
    badgeBg: "bg-purple-500/25",
    topBorder: "from-purple-500 via-purple-500/50 to-transparent",
  },
];

export default function ResearchPage() {
  return (
    <main className="min-h-screen px-4 py-16 md:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <PageHeader
          title="Research"
          subtitle="Academic publications and peer-reviewed work."
        />

        <div className="space-y-8">
          {publications.map((pub, index) => (
            <a
              key={index}
              href={pub.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group block relative overflow-hidden rounded-3xl border ${pub.border} ${pub.bg} backdrop-blur-xl p-8 card-glow`}
            >
              {/* Top accent line */}
              <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${pub.topBorder}`} />

              {/* Gradient accent */}
              <div className={`absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl ${pub.accent} to-transparent rounded-full blur-3xl`} />

              <div className="relative z-10">
                {/* Venue Badge */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${pub.badgeBg}`}>
                    <PaperIcon className={`h-4 w-4 ${pub.venueColor}`} />
                    <span className={`text-sm font-semibold ${pub.venueColor}`}>
                      {pub.venue}
                    </span>
                  </div>
                  <span className="text-xs text-white/40">
                    {pub.location}
                  </span>
                </div>

                {/* Title */}
                <h2 className="font-serif text-xl md:text-2xl font-medium text-white mb-3 group-hover:text-white/90 transition-colors">
                  {pub.title}
                </h2>

                {/* Authors */}
                <p className="text-sm text-white/50 mb-4">
                  {pub.authors}
                </p>

                {/* Abstract */}
                <div className="mb-6">
                  <h3 className={`text-xs uppercase tracking-wider ${pub.venueColor}/60 mb-2`}>
                    Abstract
                  </h3>
                  <p className="text-white/60 leading-relaxed text-sm">
                    {pub.abstract}
                  </p>
                </div>

                {/* Contribution */}
                <div className="mb-6">
                  <h3 className={`text-xs uppercase tracking-wider ${pub.venueColor}/60 mb-2`}>
                    My Contribution
                  </h3>
                  <p className="text-white/60 leading-relaxed text-sm">
                    {pub.contribution}
                  </p>
                </div>

                {/* Venue Full Name */}
                <p className="text-xs text-white/40">
                  {pub.venueFullName}
                </p>

                {/* Read Paper Link */}
                <div className={`flex items-center gap-2 mt-6 text-sm ${pub.venueColor} opacity-70 group-hover:opacity-100 transition-opacity`}>
                  <span>Read paper</span>
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
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
          ))}
        </div>
      </div>
    </main>
  );
}
