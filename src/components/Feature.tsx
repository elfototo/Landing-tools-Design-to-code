type FeatureProps = {
  title: string;
  content: string;
  style: string
};
export default function Feature({ title, content, style }: FeatureProps) {
  return (
    <div
      className={`flex flex-col gap-3 p-3 bg-white/5 
backdrop-blur-xl border border-white/10 rounded-2xl shadow-lg xl:w-[350px] ${style} border border-white/40`}
    >
      <h3 className="font-bold text-2xl">{title}</h3>
      <p>{content}</p>
    </div>
  );
}
