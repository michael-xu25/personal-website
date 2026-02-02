import PageHeader from "../components/PageHeader";
import { TrophyIcon, DumbbellIcon, DollarIcon, GameIcon } from "../components/hero/icons";

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
            className="group md:col-span-2 relative overflow-hidden rounded-3xl border border-white/20 bg-white/5 backdrop-blur-xl p-8 card-glow"
          >
            {/* Gradient accent */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-amber-500/20 to-transparent rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-amber-500/20">
                  <GameIcon className="h-6 w-6 text-amber-400" />
                </div>
                <span className="text-xs text-white/50 uppercase tracking-wider">
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
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <p className="text-2xl font-medium text-white">#1</p>
                  <p className="text-xs text-white/50">All-Time Global Rank</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <p className="text-2xl font-medium text-white">4.3M</p>
                  <p className="text-xs text-white/50">Active Players</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <p className="text-2xl font-medium text-white">30th</p>
                  <p className="text-xs text-white/50">US Nationals 2025</p>
                </div>
              </div>

              <p className="text-sm text-white/50">
                Also the youngest player to qualify for US Catan Nationals by winning a ~40 person 
                regional tournament. Placed 30th out of 142 at Nationals in Denver.
              </p>

              <div className="flex items-center gap-2 mt-6 text-sm text-white/50 group-hover:text-white/70 transition-colors">
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
          <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/5 backdrop-blur-xl p-8 card-glow">
            {/* Gradient accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-emerald-500/20 to-transparent rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-emerald-500/20">
                  <DumbbellIcon className="h-5 w-5 text-emerald-400" />
                </div>
                <span className="text-xs text-white/50 uppercase tracking-wider">
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
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  <div>
                    <p className="text-sm font-medium text-white">Cross Country</p>
                    <p className="text-xs text-white/50">Fall Season</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  <div>
                    <p className="text-sm font-medium text-white">Track & Field</p>
                    <p className="text-xs text-white/50">300m Hurdles • Spring Season</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
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
            className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/5 backdrop-blur-xl p-8 card-glow"
          >
            {/* Gradient accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-500/20 to-transparent rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-blue-500/20">
                  <DollarIcon className="h-5 w-5 text-blue-400" />
                </div>
                <span className="text-xs text-white/50 uppercase tracking-wider">
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
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-xl font-medium text-white">2nd</p>
                  <p className="text-xs text-white/50">National Finish</p>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-xl font-medium text-white">$2,500</p>
                  <p className="text-xs text-white/50">Prize Award</p>
                </div>
              </div>

              <p className="text-sm text-white/50 mb-4">
                Team captain. ~500 hours of preparation and rehearsals. Later became Co-President 
                of the Taft Econ Team with 26 active members.
              </p>

              <div className="flex items-center gap-2 text-sm text-white/50 group-hover:text-white/70 transition-colors">
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
