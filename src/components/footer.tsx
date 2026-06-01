type ListFooterType = {
  title: string;
  url: string;
};
const listFooter: ListFooterType[] = [
  {
    title: "Figma Plugin",
    url: "",
  },
  {
    title: "Documentation",
    url: "",
  },
  {
    title: "GitHub",
    url: "",
  },
];
export default function Footer() {
  return (
    <section className="py-10 text-gray-400 text-start text-sm">
      <hr className="py-5" />

      <div className="flex flex-col gap-5">
        <h3 className="font-bold text-lg">Design to Code</h3>

        <ul className="flex flex-col gap-2">
          {listFooter.map((item) => (
            <li key={item.title} className="underline">
              <a href="">{item.title}</a>
            </li>
          ))}
        </ul>
        <p>© 2026 Design to Code</p>
      </div>
    </section>
  );
}
