import { FaReact } from "react-icons/fa";
import { BsTypescript } from "react-icons/bs";
import { RiTailwindCssFill } from "react-icons/ri";

export default function TechnologiesSection() {
  const tech = [
    {
      id: 1,
      title: "React",
      icon: <FaReact />,
    },
    {
      id: 2,
      title: "TypeScript",
      icon: <BsTypescript />,
    },
    {
      id: 2,
      title: "Tailwind CSS",
      icon: <RiTailwindCssFill />,
    },
  ];

  return (
    <section className="flex flex-col gap-10">
      <h2 className="font-bold text-2xl">
        Built for modern frontend workflows
      </h2>

      <div className="flex gap-3 items-center justify-center">
        {tech.map((item) => (
          <div
            key={item.id}
            className="bg-white/5 
backdrop-blur-xl border border-white/10 rounded-2xl shadow-lg p-3 flex gap-3 items-center"
          >
            <span>{item.icon}</span>

            {item.title}
          </div>
        ))}
      </div>
    </section>
  );
}
