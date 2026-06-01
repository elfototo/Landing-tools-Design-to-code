import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

type AccordionItem = {
  id: number;
  title: string;
  content: string;
};

const accordion: AccordionItem[] = [
  {
    id: 1,
    title: "Does it require Auto Layout?",
    content:
      "No. The plugin works with both Auto Layout designs and regular Figma frames.",
  },
  {
    id: 2,
    title: "Will the generated code always be perfect?",
    content:
      "Generated code is intended to provide a strong starting point for development while preserving meaningful layout structure whenever possible.",
  },
  {
    id: 3,
    title: "Can I modify the generated code?",
    content:
      "Yes. The output is designed to be editable and easy to customize.",
  },
  {
    id: 4,
    title: "Which technologies are currently supported?",
    content: "React, TypeScript, and Tailwind CSS.",
  },
];

export default function FAQAccordion() {
  const [selected, setSelected] = useState(1);

  return (
    <div className="border border-white">
      {accordion.map((item) => (
        <div key={item.id} className="grid">
          <button
            onClick={() => setSelected(item.id)}
            className=" bg-[#02D2B9] p-3 flex items-center gap-3"
          >
            {selected === item.id ? (
              
                <IoIosArrowForward />
              
            ) : (
              
                <IoIosArrowDown />
              
            )}
            {item.title}
          </button>

          {selected === item.id && <p className="p-10 text-start">{item.content}</p>}
        </div>
      ))}
    </div>
  );
}
