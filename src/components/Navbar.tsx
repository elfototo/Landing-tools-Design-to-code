type MenuType = {
  id: number;
  section: string;
};
export default function Navbar() {
  const menu: MenuType[] = [
    { id: 1, section: "Logo" },
    { id: 2, section: "Features" },
    { id: 3, section: "FAQ" },
    { id: 4, section: "Install Plugin" },
  ];

  return (
    <main className="w-full flex justify-center z-10">
      <ul className="flex justify-between w-[60%] z-10">
        {menu.map((item) => (
          <li key={item.id} className="cursor-pointer">{item.section}</li>
        ))}
      </ul>
    </main>
  );
}
