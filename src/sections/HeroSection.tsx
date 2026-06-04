export default function HeroSection() {
  return (
    <section className="relative">
      <div className="absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1131px] h-[733px] shrink-0">
        <svg
          className="z-[0] absolute left-[452px] top-0 w-[679px] h-[436px] shrink-0   [filter:blur(160px)]"
          viewBox="0 0 679 436"
          overflow="visible"
        >
          <path
            d="M679 218 C679 338.398 527.001 436 339.5 436 C151.999 436 0 338.398 0 218 C0 97.6019 151.999 0 339.5 0 C527.001 0 679 97.6019 679 218 Z"
            fill="rgba(2,210,185,1)"
          />
        </svg>
        <svg
          className="z-[1] absolute left-0 top-[297px] w-[679px] h-[436px] shrink-0   [filter:blur(160px)]"
          viewBox="0 0 679 436"
          overflow="visible"
        >
          <path
            d="M679 218 C679 338.398 527.001 436 339.5 436 C151.999 436 0 338.398 0 218 C0 97.6019 151.999 0 339.5 0 C527.001 0 679 97.6019 679 218 Z"
            fill="rgba(222,165,255,1)"
          />
        </svg>
      </div>

      <div className="flex flex-col px-10 gap-5 z-10">
        <h2 className="font-bold z-10">
          <span className="text-[#02D2B9]">From Figma</span> to structured React
          + Tailwind code
        </h2>
        <p className="z-10">
          Generate React + Tailwind code directly from your Figma designs.
          Design to Code analyzes layout structure and creates meaningful
          Flexbox and Grid layouts whenever possible.
        </p>
        <div className="relative z-10">
          <button className="px-6 py-2 text-white cursor-pointer bg-[#02D2B9] z-10">
            instal Plugin
          </button>
        </div>
      </div>
    </section>
  );
}
