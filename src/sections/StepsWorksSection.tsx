import StepWork from "../components/StepWork";

type StepsType = {
  id: number;
  span: string;
  title: string;
  content: string;
  isReversed:boolean
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

      <div className="flex flex-col gap-10">
        {steps.map((item) => (
          <StepWork
            key={item.id}
            title={item.title}
            content={item.content}
            selected={item.span}
            id={item.id}
            isReversed={item.isReversed}
          />
        ))}
      </div>
    </section>
  );
}
