type StepWorkProps = {
  selected: string;
  title: string;
  content: string;
  id: number;
  isReversed: boolean
};
export default function StepWork({
  title,
  content,
  selected,
  id,
  isReversed
}: StepWorkProps) {
  return (
    <div className={`flex gap-3 items-center ${isReversed ? "flex-row-reverse" : "flex-row"}`}>
      <div className={`w-[50%] text-start flex flex-col gap-3 `}>
        <h3 className="font-bold text-2xl">
          {id}.<span className="text-[#02D2B9]"> {selected}</span>
          {title}
        </h3>
        <p>{content}</p>
      </div>
      <div className={`bg-[#848484] h-[300px] w-[50%] $`}></div>
    </div>
  );
}
