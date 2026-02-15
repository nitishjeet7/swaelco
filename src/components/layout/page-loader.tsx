import Image from "next/image";

export function PageLoader() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(59,130,246,0.28),transparent_40%),radial-gradient(circle_at_85%_20%,rgba(239,68,68,0.2),transparent_35%),radial-gradient(circle_at_50%_85%,rgba(37,99,235,0.2),transparent_45%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:44px_44px] opacity-30" />

      <div className="relative flex flex-col items-center gap-6 px-6 text-center">
        <div className="relative flex h-36 w-36 items-center justify-center">
          <span className="absolute h-full w-full rounded-full border border-blue-300/35 animate-[spin_30s_linear_infinite]" />
          <span className="absolute h-[122%] w-[122%] rounded-full border border-red-300/20 animate-[spin_30s_linear_infinite_reverse]" />
          <span className="absolute h-[140%] w-[140%] rounded-full border border-blue-400/15 animate-[pulse_4.2s_ease-in-out_infinite]" />

          <div className="relative p-1 animate-[loader-breathe_4.6s_ease-in-out_infinite]">
            <Image
              src="/LogoVector.svg"
              alt="SWAELCO"
              width={72}
              height={72}
              priority
              className="h-[72px] w-[72px] object-contain drop-shadow-[0_0_22px_rgba(59,130,246,0.75)]"
            />
          </div>
        </div>

        <div className="space-y-1">
          <p className="text-lg font-extrabold uppercase tracking-[0.32em] text-white">SWAELCO</p>
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-blue-300">Rising to New Heights</p>
        </div>

        <div className="h-1.5 w-56 overflow-hidden rounded-full border border-white/10 bg-slate-900/70">
          <div className="h-full w-1/2 animate-[loading-slide_2.8s_ease-in-out_infinite] rounded-full bg-gradient-to-r from-blue-400 via-cyan-300 to-red-400" />
        </div>

        <p className="animate-[pulse_4s_ease-in-out_infinite] text-xs text-slate-300">Preparing your experience...</p>
      </div>
    </div>
  );
}
