import Benefit from "../components/Benefit";
type BenefitsType = {
  id: number;
  title: string;
  content: string;
};
export default function BenefitsSection() {
  const benefits: BenefitsType[] = [
    {
      id: 1,
      title: "React Components",
      content:
        "Generate React components ready to integrate into your project.",
    },
    {
      id: 2,
      title: "Tailwind CSS",
      content: "Export layouts using Tailwind utility classes.",
    },
    {
      id: 3,
      title: "Flexbox & Grid",
      content:
        "Create structured layouts instead of relying solely on element coordinates.",
    },
    {
      id: 2,
      title: "Works Beyond Auto Layout",
      content: "Generate code from both Auto Layout and regular Figma frames.",
    },
    {
      id: 2,
      title: "Editable Output",
      content: "Get code that is easy to understand, modify, and extend.",
    },
    {
      id: 2,
      title: "Fast Workflow",
      content: "Move from design to implementation in seconds.",
    },
  ];
  return (
    <section className="flex flex-col gap-10">
      <h2>Benefits</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
        {benefits.map((item) => (
          <Benefit key={item.id} title={item.title} content={item.content} />
        ))}
      </div>
    </section>
  );
}
