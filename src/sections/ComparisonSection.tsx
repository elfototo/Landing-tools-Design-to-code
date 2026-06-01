import { BsRecordCircleFill } from "react-icons/bs";

type ComparisonItemsType = {
  title: string;
  background: string;
  items: string[];
};
export default function ComparisonSection() {
  const comparisons: ComparisonItemsType[] = [
    {
      title: "Typical export",
      background: "bg-[#848484]",
      items: [
        "Heavy use of absolute positioning",
        "Complex nesting",
        "Manual restructuring",
        "Additional cleanup",
      ],
    },
    {
      title: "Design to Code",
      background: "bg-[#02D2B9]",
      items: [
        "Layout-aware generation",
        "Flexbox and Grid structures",
        "Meaningful containers",
        "Easier customization",
      ],
    },
  ];

  return (
    <section>
      <h2>More than visual reproduction</h2>

      <div className="grid grid-cols-2 gap-10 pt-10">
        {comparisons.map((item) => (
          <div
            key={item.title}
            className={`p-20 ${item.background} flex flex-col gap-6`}
          >
            <h3 className="text-2xl font-bold">{item.title}</h3>
            <ul className="text-start flex flex-col gap-3">
              {item.items.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span>
                    <BsRecordCircleFill />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
