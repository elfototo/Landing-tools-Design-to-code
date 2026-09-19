import StepWork from "../components/StepWork";

type StepsType = {
  id: number;
  span: string;
  title: string;
  content: string;
  isReversed: boolean;
};
export default function StepsWorksSection() {
  const steps: StepsType[] = [
    {
      id: 1,
      span: "Select",
      title: " a frame",
      content: "Choose the design you want to convert.",
      isReversed: true,
    },
    {
      id: 2,
      span: "Run",
      title: " the plugin",
      content: "Launch Design to Code directly inside Figma.",
      isReversed: false,
    },
    {
      id: 3,
      span: "Generate",
      title: " code",
      content: "Analyze the design and create React + Tailwind output.",
      isReversed: true,
    },
    {
      id: 4,
      span: "Copy",
      title: " into your project",
      content: "Use the generated code as a starting point for development.",
      isReversed: false,
    },
  ];

  return (
    <section className="flex flex-col gap-10">
      <h2>How it works</h2>

      <div className="relative grid grid-cols-2 gap-x-10 gap-y-10">
        {steps.map((item) => (
          <StepWork
            key={item.id}
            title={item.title}
            content={item.content}
            selected={item.span}
            id={item.id}
          />
        ))}

        {/* vertical line */}
        <div className="pointer-events-none absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gray-300" />

        {/* horizontal line */}
        <div className="pointer-events-none absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-gray-300" />
      </div>
    </section>
  );
}
