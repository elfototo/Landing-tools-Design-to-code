export default function FinalCTASection() {
  return (
    <section>
      <div className="flex flex-col px-10 gap-5">
        <h2 className="font-bold text-2xl ">
          <span className="text-[#02D2B9]">Turn your Figma designs</span> into
          React + Tailwind code
        </h2>
        <p>
          Generate structured layouts faster and spend less time rebuilding
          interfaces manually.
        </p>
        <div>
          <button className="px-6 py-2 text-white cursor-pointer hover:bg-[#01ac98] bg-[#02D2B9] rounded-full">
            <a
              href="https://www.figma.com/community/plugin/1676909519117615210"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 text-white z-10 rounded-full"
            >
              Try plugin
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}
