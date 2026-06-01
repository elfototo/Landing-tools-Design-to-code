type BenefitProps = {
  title: string;
  content: string;
};
export default function Benefit({ title, content }: BenefitProps) {
  return (
    <div className="bg-[#545454] p-5 flex flex-col gap-5">
      <h3 className="font-bold text-2xl">{title}</h3>
      <p>{content}</p>
    </div>
  );
}
