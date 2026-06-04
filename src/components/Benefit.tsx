type BenefitProps = {
  title: string;
  content: string;
  icon: React.ReactElement;
};
export default function Benefit({ title, content, icon }: BenefitProps) {
  return (
    <div
      className="p-6 flex flex-col gap-6 rounded-2xl z-10 border border-white/10"
      style={{
        background: `
    radial-gradient(
      ellipse 100% 60% at 20% 0%,
      rgba(222,165,255,0.19) 10%,
      transparent 90%
    ),
    #2d2d2d
  `,
      }}
    >
      <div className="text-start flex flex-col gap-3">
        <div className="flex gap-3 items-center">
          <div className=" ">{icon}</div>
          <h3 className="font-bold text-xl z-10">{title}</h3>
        </div>

        <p className="text-sm z-10 text-white/50">{content}</p>
      </div>
    </div>
  );
}
