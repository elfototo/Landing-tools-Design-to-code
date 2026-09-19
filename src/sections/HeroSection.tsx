export default function HeroSection() {
  return (
    <section className="z-10 relative">
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
          <button className="px-6 py-2 text-white cursor-pointer bg-[#02D2B9]  hover:bg-[#01ac98] z-10 rounded-full">
            <a
              href="https://www.figma.com/community/plugin/1676909519117615210"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              Try plugin
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}
