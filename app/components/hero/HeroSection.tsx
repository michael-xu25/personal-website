import AboutCard from "./AboutCard";
import StatusCard from "./StatusCard";
import SocialCard from "./SocialCard";
import ProjectCard from "./ProjectCard";
import { ChromeIcon, MicrophoneIcon, TrophyIcon } from "./icons";

const projects = [
  {
    title: "CAB Schedule Exporter",
    description: "Chrome extension to export Brown University class schedules to any calendar app.",
    href: "https://chromewebstore.google.com/detail/brown-cab-schedule-export/hpfadilcgdepmpaechlafaidlodaegok",
    icon: ChromeIcon,
    label: "Chrome Extension",
  },
  {
    title: "TB Cough Diagnosis",
    description: "AI model diagnosing tuberculosis from cough acoustics. ISEF project.",
    href: "https://isef.net/project/robo036t-diagnosing-tuberculosis-from-cough-acoustics",
    icon: MicrophoneIcon,
    label: "Research",
  },
  {
    title: "Catan World Record",
    description: "Highest ELO rating achieved on Colonist.io competitive ladder.",
    href: "https://colonist.io/profile/BrickedUp25",
    icon: TrophyIcon,
    label: "Achievement",
  },
];

export default function HeroSection() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center px-4 py-12 md:px-6 lg:px-8">
      <div className="w-full max-w-5xl">
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[180px]">
          {/* About Card - spans 2 columns and 2 rows on large screens */}
          <div className="col-span-1 md:col-span-2 row-span-2">
            <AboutCard />
          </div>
          
          {/* Status Card - 1x1 */}
          <div className="col-span-1">
            <StatusCard />
          </div>
          
          {/* Social Card - 1x1 */}
          <div className="col-span-1">
            <SocialCard />
          </div>
          
          {/* Project Cards */}
          <div className="col-span-1">
            <ProjectCard project={projects[0]} />
          </div>
          
          <div className="col-span-1">
            <ProjectCard project={projects[1]} />
          </div>
          
          {/* Featured Achievement - spans 2 columns */}
          <div className="col-span-1 md:col-span-2">
            <ProjectCard project={projects[2]} featured />
          </div>
        </div>
      </div>
    </section>
  );
}
