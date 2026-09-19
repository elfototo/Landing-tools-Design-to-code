type MenuType = {
  id: number;
  section: string;
  href?: string;
  external?: boolean;
};
export default function Navbar() {
  const menu: MenuType[] = [
    { id: 1, section: "Logo", href: "#hero" },
    { id: 2, section: "Features", href: "#features" },
    { id: 3, section: "FAQ", href: "#faq" },
    {
      id: 4,
      section: "Try plugin",
      href: "https://www.figma.com/community/plugin/1676909519117615210",
      external: true,
    },
  ];

  return (
    <main className="w-full flex justify-center z-10">
      <ul className="flex justify-between w-[60%] z-10">
        {menu.map((item) => (
          <li key={item.id}>
            <a
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="cursor-pointer"
            >
              {item.section}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
