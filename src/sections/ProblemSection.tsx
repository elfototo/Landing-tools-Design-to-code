import { BsEmojiFrownFill } from "react-icons/bs";

type ProblemType = {
  id: number;
  content: string;
};
export default function ProblemSection() {
  const problem: ProblemType[] = [
    {
      id: 1,
      content:
        "Many generated layouts look correct at first glance but require extensive cleanup before they can be used in a real project",
    },
    {
      id: 2,
      content:
        "Developers often spend time restructuring containers, replacing unnecessary positioning, and rebuilding layout logic manually",
    },
  ];
  return (
    <section className="flex items-center gap-3">
      <div className="text-start w-[50%] flex flex-col gap-3">
        <h3 className="font-bold text-2xl ">
          Design-to-code should save time, not create more work
        </h3>
        <ul className="flex flex-col gap-3">
            {problem.map((item) => (
                <li key={item.id} className="flex items-center gap-3"><span><BsEmojiFrownFill className="text-red-400" size={30}/></span>{item.content}</li>
            ))}
        </ul>
      </div>
      <div className="w-[500px] h-[300px] bg-[#848484]"></div>
    </section>
  );
}
