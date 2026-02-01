import AboutCard from "./AboutCard";
import SocialCard from "./SocialCard";
import ProjectCard from "./ProjectCard";
import EducationCard from "./EducationCard";
import PublicationCard from "./PublicationCard";
import { ChromeIcon, MicrophoneIcon, TrophyIcon, GoogleIcon, TvIcon } from "./icons";

const projects = [
  {
    title: "Google Research",
    description: "External researcher developing Gemini/MedGemma's audio diagnostic capabilities with $150k GPU grant.",
    href: null,
    icon: GoogleIcon,
    label: "Research",
  },
  {
    title: "CAB Schedule Exporter",
    description: "Chrome extension to export Brown University class schedules to any calendar app.",
    href: "https://chromewebstore.google.com/detail/brown-cab-schedule-export/hpfadilcgdepmpaechlafaidlodaegok",
    icon: ChromeIcon,
    label: "Chrome Extension",
  },
  {
    title: "TB Cough Diagnosis",
    description: "ISEF Grand Award winner. AI detecting tuberculosis from cough sounds with 0.843 AUROC.",
    href: "https://isef.net/project/robo036t-diagnosing-tuberculosis-from-cough-acoustics",
    icon: MicrophoneIcon,
    label: "ISEF 2024",
  },
  {
    title: "Catan World Record",
    description: "#1 globally ranked all-time on Colonist.io with 4.3M active players.",
    href: "https://colonist.io/profile/BrickedUp25",
    icon: TrophyIcon,
    label: "Achievement",
  },
  {
    title: "Economics Nationals",
    description: "2nd place at National Economics Challenge. Quiz bowl streamed live on NBC.",
    href: "https://youtu.be/-B-9XOlMCks?t=2739",
    icon: TvIcon,
    label: "Competition",
  },
];

const publications = [
  {
    title: "AquaSent-TMMAE",
    venue: "KDD 2024",
    description: "Self-supervised learning for water quality monitoring from spatiotemporal data.",
    href: "https://deepspatial2024.github.io/papers/AquaSent-TMMAE.pdf",
  },
  {
    title: "CLE-SMOTE",
    venue: "ICLR 2024",
    description: "Contrastive learning-enhanced SMOTE for extreme imbalanced classification.",
    href: "https://openreview.net/forum?id=e641mv2xsf",
  },
];

export default function HeroSection() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center px-4 py-12 md:px-6 lg:px-8">
      <div className="w-full max-w-6xl">
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[160px]">
          {/* About Card - spans 2 columns and 2 rows */}
          <div className="col-span-1 md:col-span-2 row-span-2">
            <AboutCard />
          </div>
          
          {/* Social Card */}
          <div className="col-span-1">
            <SocialCard />
          </div>
          
          {/* Education Card */}
          <div className="col-span-1">
            <EducationCard />
          </div>
          
          {/* Google Research */}
          <div className="col-span-1">
            <ProjectCard project={projects[0]} />
          </div>
          
          {/* Economics Nationals */}
          <div className="col-span-1">
            <ProjectCard project={projects[4]} />
          </div>
          
          {/* Project Cards Row */}
          <div className="col-span-1">
            <ProjectCard project={projects[1]} />
          </div>
          
          <div className="col-span-1">
            <ProjectCard project={projects[2]} />
          </div>
          
          {/* Catan - spans 2 columns */}
          <div className="col-span-1 md:col-span-2">
            <ProjectCard project={projects[3]} featured />
          </div>
          
          {/* Publications Row */}
          <div className="col-span-1 md:col-span-2">
            <PublicationCard publication={publications[0]} />
          </div>
          
          <div className="col-span-1 md:col-span-2">
            <PublicationCard publication={publications[1]} />
          </div>
        </div>
      </div>
    </section>
  );
}
