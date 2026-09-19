type StepWorkProps = {
  selected: string;
  title: string;
  content: string;
  id: number;
  // isReversed: boolean
};
export default function StepWork({
  title,
  content,
  selected,
  id,
  // isReversed
}: StepWorkProps) {
  return (
    // <div className={`flex gap-3 items-center ${isReversed ? "flex-row-reverse" : "flex-row"}`}>
    //   <div className={`w-[50%] text-start flex flex-col gap-3 `}>
    //     <h3 className="font-bold text-2xl">
    //       {id}.<span className="text-[#02D2B9]"> {selected}</span>
    //       {title}
    //     </h3>
    //     <p>{content}</p>
    //   </div>
    //   <div className={`h-[300px] w-[50%]`}>
    //     <img 
    //       src={componentsImage} 
    //       alt="components" 
    //       width={300}
    //       height={300}
    //       />
    //   </div>
    // </div>

    <div className="w-full flex items-center justify-center p-20">
      <div className={`text-center flex flex-col justify-center items-center gap-3 `}>
        <h3 className="font-bold text-2xl">
          {id}.<span className="text-[#02D2B9]"> {selected}</span>
          {title}
        </h3>
        <p>{content}</p>
      </div>
      
    </div>
  );
}
