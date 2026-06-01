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
      style: "col-span-2 col-start-2",
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
      style: "col-span-2 col-start-2",
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
    <section>
      <div className="grid grid-cols-6 gap-6">
        {features.map((item) => (
          <Feature key={item.id} title={item.title} content={item.content} style={item.style}/>
        ))}
      </div>
    </section>
  );
}
