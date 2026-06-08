import { BsEmojiFrownFill } from "react-icons/bs";
import problemImage from "../assets/333.png";

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
    <section className="flex flex-col gap-10">
      <h2>Problem</h2>
      <div className="flex gap-5 flex-col md:flex-row md:justify-between md:items-center">
        <div className="text-start flex flex-col gap-3  md:w-[50%]">
          <h3 className="font-bold text-2xl ">
            Design-to-code should save time, not create more work
          </h3>
          <ul className="flex flex-col gap-5">
            {problem.map((item) => (
              <li key={item.id} className="flex items-center gap-5">
                <span>
                  <BsEmojiFrownFill className="text-red-400" size={30} />
                </span>
                {item.content}
              </li>
            ))}
          </ul>
        </div>
        <img
          src={problemImage}
          alt="Problem illustration"
          className="md:w-[280px] w-[200px] h-auto object-contain mx-auto md:mx-0"
        />
      </div>
    </section>
  );
}
