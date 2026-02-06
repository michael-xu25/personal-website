import { GraduationCapIcon } from "./icons";

const schools = [
  { name: "Brown University", detail: "B.Sc APMA-CS, 4.0 GPA", current: true },
  { name: "The Taft School", detail: "High School", current: false },
  { name: "Shanghai American School", detail: "Middle School", current: false },
];

export default function EducationCard() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-3xl border border-blue-400/25 bg-blue-950/30 backdrop-blur-xl card-glow">
      {/* Gradient fill */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-cyan-500/10" />

      <div className="relative z-10 flex h-full flex-col justify-center p-5">
        <div className="flex items-center gap-2 mb-3">
          <GraduationCapIcon className="h-4 w-4 text-blue-400" />
          <p className="text-xs text-blue-300 uppercase tracking-wider">
            Education
          </p>
        </div>
        
        <div className="space-y-2">
          {schools.map((school, index) => (
            <div key={index} className="flex items-start gap-2">
              <div className={`mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0 ${school.current ? 'bg-blue-400' : 'bg-white/30'}`} />
              <div>
                <p className={`text-sm font-medium ${school.current ? 'text-white' : 'text-white/70'}`}>
                  {school.name}
                </p>
                <p className="text-xs text-white/40">{school.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
