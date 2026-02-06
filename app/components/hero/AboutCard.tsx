export default function AboutCard() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-3xl border border-violet-400/30 bg-violet-950/30 backdrop-blur-xl card-glow">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 mesh-gradient opacity-80" />
      
      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-end p-8">
        <div className="space-y-4">
          <h1 className="font-serif text-5xl md:text-6xl font-medium tracking-tight text-white drop-shadow-lg">
            Michael Xu
          </h1>
          <p className="text-lg md:text-xl text-violet-200 font-light max-w-md">
            Health AI Researcher
          </p>
          <p className="text-sm md:text-base text-white/60 font-light max-w-md leading-relaxed">
            Exploring the intersection of artificial intelligence and healthcare to build solutions that improve human lives.
          </p>
        </div>
      </div>
      
      {/* Bottom vignette */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}
