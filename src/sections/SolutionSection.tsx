import { BsEmojiLaughingFill } from "react-icons/bs";

type SolutionsType = {
  id: number;
  content: string;
};
export default function SolutionSection() {
  const solutions: SolutionsType[] = [
    {
      id: 1,
      content:
        "Design to Code analyzes spacing, alignment, and relationships between elements to identify meaningful layout patterns.",
    },

    {
      id: 2,
      content:
        "When possible, the plugin creates Flexbox and Grid structures, helping produce code that is easier to maintain and extend.",
    },

    {
      id: 3,
      content:
        "The goal is not simply to reproduce pixels, but to generate code that developers can actually work with.",
    },
  ];
  return (
    <section className="flex items-center gap-3">
      <div className="w-[50%] h-[300px] bg-[#848484]"></div>
      <div className="text-start w-[50%] flex flex-col gap-3">
        <h3 className="font-bold text-2xl">Built around layout structure</h3>

        <ul className="flex flex-col gap-3">
          {solutions.map((item) => (
            <li key={item.id} className="flex gap-3 items-center">
              <span><BsEmojiLaughingFill size={30} className="text-[#02D2B9]"/></span>
              {item.content}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
