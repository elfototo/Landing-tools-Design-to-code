import Benefit from "../components/Benefit";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssLine } from "react-icons/ri";
import { BiGridAlt } from "react-icons/bi";
import { TbLayoutGridAdd } from "react-icons/tb";
import { VscEditSparkle } from "react-icons/vsc";

import { LuWorkflow } from "react-icons/lu";

type BenefitsType = {
  id: number;
  title: string;
  content: string;
  icon: React.ReactElement;
};
export default function BenefitsSection() {
  const benefits: BenefitsType[] = [
    {
      id: 1,
      title: "React Components",
      content:
        "Generate React components ready to integrate into your project.",
      icon: (
        <FaReact
          size={30}
          className="text-white/50"
        />
      ),
    },
    {
      id: 2,
      title: "Tailwind CSS",
      content: "Export layouts using Tailwind utility classes.",
      icon: (
        <RiTailwindCssLine
          size={30}
          className="text-white/50"
        />
      ),
    },
    {
      id: 3,
      title: "Flexbox & Grid",
      content:
        "Create structured layouts instead of relying solely on element coordinates.",
      icon: (
        <BiGridAlt
          size={30}
          className="text-white/50"
        />
      ),
    },
    {
      id: 2,
      title: "Works Beyond Auto Layout",
      content: "Generate code from both Auto Layout and regular Figma frames.",
      icon: (
        <TbLayoutGridAdd
          size={30}
          className="text-white/50"
        />
      ),
    },
    {
      id: 2,
      title: "Editable Output",
      content: "Get code that is easy to understand, modify, and extend.",
      icon: (
        <VscEditSparkle
          size={30}
          className=" text-white/50"
        />
      ),
    },
    {
      id: 2,
      title: "Fast Workflow",
      content: "Move from design to implementation in seconds.",
      icon: (
        <LuWorkflow
          size={30}
          className="text-white/50"
        />
      ),
    },
  ];
  return (
    <section className="relative flex flex-col gap-10">
      <h2 className="z-10">Benefits</h2>

      <div className="relative">
        <div className="absolute z-0 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1131px] h-[733px] shrink-0">
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

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
          {benefits.map((item) => (
            <Benefit
              key={item.id}
              title={item.title}
              content={item.content}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
