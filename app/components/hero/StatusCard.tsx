export default function StatusCard() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-3xl border border-white/20 bg-white/5 backdrop-blur-xl card-glow">
      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-center items-center p-6 text-center">
        {/* Pulsing dot */}
        <div className="relative mb-4">
          <div className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse-dot" />
          <div className="absolute inset-0 h-3 w-3 rounded-full bg-emerald-500/50 animate-ping" />
        </div>
        
        <p className="text-sm font-medium text-white/90">
          Available for work
        </p>
        <p className="text-xs text-white/50 mt-1">
          Open to opportunities
        </p>
      </div>
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent pointer-events-none" />
    </div>
  );
}
