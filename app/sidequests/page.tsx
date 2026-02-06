import PageHeader from "../components/PageHeader";
import { DumbbellIcon, DollarIcon, GameIcon } from "../components/hero/icons";

export default function SidequestsPage() {
  return (
    <main className="min-h-screen px-4 py-16 md:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <PageHeader
          title="Sidequests"
          subtitle="Life outside the lab. Competitions, sports, and games."
        />

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Catan Card - Full Width */}
          <a
            href="https://colonist.io/profile/BrickedUp25"
            target="_blank"
            rel="noopener noreferrer"
            className="group md:col-span-2 relative overflow-hidden rounded-3xl border border-amber-400/30 bg-amber-950/40 backdrop-blur-xl p-8 card-glow"
          >
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-amber-500 via-orange-500/50 to-transparent" />
            
            {/* Gradient accents */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-amber-500/35 via-amber-500/10 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-orange-500/20 to-transparent rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-amber-500/25">
                  <GameIcon className="h-6 w-6 text-amber-400" />
                </div>
                <span className="text-xs text-amber-300 uppercase tracking-wider">
                  Competitive Gaming
                </span>
              </div>

              <h2 className="font-serif text-3xl font-medium text-white mb-3">
                Catan World Record
              </h2>

              <p className="text-white/60 leading-relaxed mb-6 max-w-2xl">
                #1 globally ranked all-time on Colonist.io, the largest online Catan platform 
                with 4.3 million active players. The leaderboard resets every 3 months, but 
                my peak ELO stands as the highest ever recorded.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-400/25">
                  <p className="text-2xl font-medium text-amber-300">#1</p>
                  <p className="text-xs text-white/50">All-Time Global Rank</p>
                </div>
                <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-400/25">
                  <p className="text-2xl font-medium text-amber-300">4.3M</p>
                  <p className="text-xs text-white/50">Active Players</p>
                </div>
                <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-400/25">
                  <p className="text-2xl font-medium text-amber-300">30th</p>
                  <p className="text-xs text-white/50">US Nationals 2025</p>
                </div>
              </div>

              <p className="text-sm text-white/50">
                Also the youngest player to qualify for US Catan Nationals by winning a ~40 person 
                regional tournament. Placed 30th out of 142 at Nationals in Denver.
              </p>

              <div className="flex items-center gap-2 mt-6 text-sm text-amber-300 opacity-70 group-hover:opacity-100 transition-opacity">
                <span>View profile</span>
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </a>

          {/* Athletics Card */}
          <div className="relative overflow-hidden rounded-3xl border border-emerald-400/30 bg-emerald-950/40 backdrop-blur-xl p-8 card-glow">
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-500 via-emerald-500/50 to-transparent" />
            
            {/* Gradient accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-emerald-500/35 to-transparent rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-emerald-500/25">
                  <DumbbellIcon className="h-5 w-5 text-emerald-400" />
                </div>
                <span className="text-xs text-emerald-300 uppercase tracking-wider">
                  Athletics
                </span>
              </div>

              <h2 className="font-serif text-2xl font-medium text-white mb-3">
                6x Varsity Athlete
              </h2>

              <p className="text-white/60 leading-relaxed mb-6">
                Earned varsity letters in three sports across junior and senior year at The Taft School.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-emerald-500/10 border border-emerald-400/20">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  <div>
                    <p className="text-sm font-medium text-white">Cross Country</p>
                    <p className="text-xs text-white/50">Fall Season</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-emerald-500/10 border border-emerald-400/20">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  <div>
                    <p className="text-sm font-medium text-white">Track & Field</p>
                    <p className="text-xs text-white/50">300m Hurdles • Spring Season</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-emerald-500/10 border border-emerald-400/20">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  <div>
                    <p className="text-sm font-medium text-white">Wrestling</p>
                    <p className="text-xs text-white/50">165lb Weight Class • Winter Season</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Economics Card */}
          <a
            href="https://youtu.be/-B-9XOlMCks?t=2739"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-3xl border border-blue-400/30 bg-blue-950/40 backdrop-blur-xl p-8 card-glow"
          >
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-blue-500/50 to-transparent" />
            
            {/* Gradient accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-500/35 to-transparent rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-blue-500/25">
                  <DollarIcon className="h-5 w-5 text-blue-400" />
                </div>
                <span className="text-xs text-blue-300 uppercase tracking-wider">
                  Academic Competition
                </span>
              </div>

              <h2 className="font-serif text-2xl font-medium text-white mb-3">
                Economics Nationals
              </h2>

              <p className="text-white/60 leading-relaxed mb-6">
                2nd place at the National Economics Challenge in the David Ricardo Division. 
                The quiz bowl finals were streamed live on NBC.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-400/20">
                  <p className="text-xl font-medium text-blue-300">2nd</p>
                  <p className="text-xs text-white/50">National Finish</p>
                </div>
                <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-400/20">
                  <p className="text-xl font-medium text-blue-300">$2,500</p>
                  <p className="text-xs text-white/50">Prize Award</p>
                </div>
              </div>

              <p className="text-sm text-white/50 mb-4">
                Team captain. ~500 hours of preparation and rehearsals. Later became Co-President 
                of the Taft Econ Team with 26 active members.
              </p>

              <div className="flex items-center gap-2 text-sm text-blue-300 opacity-70 group-hover:opacity-100 transition-opacity">
                <span>Watch the NBC broadcast</span>
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </a>
        </div>
      </div>
    </main>
  );
}
