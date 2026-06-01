export default function HeroSection() {

    return(
        <section>
        <div className="flex flex-col px-10 gap-5">
          <h2 className="font-bold">
            <span className="text-[#02D2B9]">From Figma</span> to structured React + Tailwind code
          </h2>
          <p>
            Generate React + Tailwind code directly from your Figma designs. Design to Code analyzes layout structure and creates meaningful Flexbox and Grid layouts whenever possible.
          </p>
          <div>
            <button className="px-6 py-2 text-white cursor-pointer bg-[#02D2B9]">
              instal Plugin
            </button>
          </div>
        </div>
      </section>
    )
}