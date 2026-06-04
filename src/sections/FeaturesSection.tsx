import Feature from "../components/Feature";

type FeaturesType = {
  id: number;
  title: string;
  content: string;
  style: string;
};
export default function FeaturesSection() {
  const features: FeaturesType[] = [
    {
      id: 1,
      title: "React + Tailwind Generation",
      content:
        "Convert Figma designs into React components styled with Tailwind CSS.",
      style: "col-span-2 md:col-start-2",
    },
    {
      id: 2,
      title: "Layout Detection",
      content:
        "Identify rows, columns, and common layout patterns automatically.",
      style: "col-span-2",
    },
    {
      id: 3,
      title: "Virtual Containers",
      content:
        "Create layout containers when they are implied by the design but not explicitly present in the Figma file.",
      style: "col-span-2",
    },
    {
      id: 4,
      title: "Auto Layout Support",
      content: "Generate code from Auto Layout structures.",
      style: "col-span-2",
    },
    {
      id: 5,
      title: "Regular Frame Support",
      content:
        "Work with standard Figma frames without requiring extensive preparation.",
      style: "col-span-2",
    },
    {
      id: 6,
      title: "Cleaner Output",
      content: "Produce code that is easier to read and customize.",
      style: "col-span-2 md:col-start-2",
    },
    {
      id: 7,
      title: "Faster Development",
      content:
        "Start from generated code instead of building every screen from scratch.",
      style: "col-span-2",
    },
  ];
  return (
    <section className=" flex flex-col gap-10">
      <h2>Features</h2>
      <div className="relative">
        <div className="hidden md:block absolute z-0 w-[1273px] h-[742px] shrink-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <svg
            className="z-[0] absolute left-0 top-[306px] w-[679px] h-[436px] shrink-0   [filter:blur(160px)]"
            viewBox="0 0 679 436"
            overflow="visible"
          >
            <path
              d="M679 218 C679 338.398 527.001 436 339.5 436 C151.999 436 0 338.398 0 218 C0 97.6019 151.999 0 339.5 0 C527.001 0 679 97.6019 679 218 Z"
              fill="rgba(2,210,185,1)"
            />
          </svg>
          <svg
            className="z-[1] absolute left-[594px] top-0 w-[679px] h-[436px] shrink-0   [filter:blur(160px)]"
            viewBox="0 0 679 436"
            overflow="visible"
          >
            <path
              d="M679 218 C679 338.398 527.001 436 339.5 436 C151.999 436 0 338.398 0 218 C0 97.6019 151.999 0 339.5 0 C527.001 0 679 97.6019 679 218 Z"
              fill="rgba(222,165,255,1)"
            />
          </svg>
        </div>

        <div className="grid md:grid-cols-6 lg:gap-6 grid-cols-1 gap-3">
          {features.map((item) => (
            <Feature
              key={item.id}
              title={item.title}
              content={item.content}
              style={item.style}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
