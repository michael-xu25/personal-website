export default function AboutCard() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-3xl border border-white/20 bg-white/5 backdrop-blur-xl card-glow">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 mesh-gradient opacity-60" />
      
      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-end p-8">
        <div className="space-y-4">
          <h1 className="font-serif text-5xl md:text-6xl font-medium tracking-tight text-white">
            Michael Xu
          </h1>
          <p className="text-lg md:text-xl text-white/70 font-light max-w-md">
            Health AI Researcher
          </p>
          <p className="text-sm md:text-base text-white/50 font-light max-w-md leading-relaxed">
            Exploring the intersection of artificial intelligence and healthcare to build solutions that improve human lives.
          </p>
        </div>
      </div>
      
      {/* Subtle inner glow */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
    </div>
  );
}
