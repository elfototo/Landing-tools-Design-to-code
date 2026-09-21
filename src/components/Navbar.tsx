"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";

type MenuType = {
  id: number;
  section: ReactNode;
  href?: string;
  external?: boolean;
};

export default function Navbar() {
  const menu: MenuType[] = [
    {
      id: 1,
      section: (
        <img src="/Baton_logo.png" width={100} height={100} alt="Baton logo" />
      ),
      href: "#hero",
    },
    { id: 4, section: "Benefits", href: "#benefits" },
    { id: 5, section: "Problem", href: "#problem" },
    { id: 7, section: "How it works", href: "#steps" },
    { id: 2, section: "Features", href: "#features" },
    { id: 8, section: "Comparison", href: "#comparison" },
    { id: 9, section: "Stack", href: "#stack" },
    { id: 10, section: "FAQ", href: "#faq" },
    {
      id: 11,
      section: "Try plugin",
      href: "https://www.figma.com/community/plugin/1676909519117615210",
      external: true,
    },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Блокируем скролл страницы при открытом меню
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <main
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 sm:top-5 sm:relative ${
        isScrolled && !isMenuOpen
          ? "bg-white/5 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      {/* ================= MOBILE ================= */}

      <div className="sm:hidden">
        {/* Header */}
        <div
          className={`relative z-[70] h-[70px] flex items-center justify-center px-2 transition-colors duration-300 ${
            isMenuOpen ? "bg-black/20 backdrop-blur-sm shadow-sm" : ""
          }`}
        >
          {/* Logo */}
          <a href="#hero" onClick={closeMenu}>
            <img
              src="/Baton_logo.png"
              width={115}
              height={100}
              alt="Baton logo"
              className="relative z-[80]"
            />
          </a>

          {/* Burger / Close */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="absolute right-6 top-1/2 z-[80] flex h-12 w-12 -translate-y-1/2 items-center justify-center transition-all duration-300 active:scale-95 cursor-pointer"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            <div className="relative flex h-6 w-6 flex-col justify-center">
              {/* Top */}
              <span
                className={`absolute left-0 h-[2px] w-6 rounded-full bg-white transition-all duration-300 ${
                  isMenuOpen ? "top-1/2 rotate-45" : "top-[6px]"
                }`}
              />

              {/* Middle */}
              <span
                className={`absolute left-0 top-1/2 h-[2px] w-6 rounded-full bg-white transition-all duration-200 ${
                  isMenuOpen ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100"
                }`}
              />

              {/* Bottom */}
              <span
                className={`absolute left-0 h-[2px] w-6 rounded-full bg-white transition-all duration-300 ${
                  isMenuOpen ? "top-1/2 -rotate-45" : "bottom-[6px]"
                }`}
              />
            </div>
          </button>
        </div>

        {/* Fullscreen menu */}
        <div
          className={`fixed inset-0 z-[60] bg-[#02D2B9] text-white transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isMenuOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-full opacity-0"
          }`}
        >
          {/* Menu content */}
          <div className="flex h-full flex-col px-8 pb-10 pt-[100px]">
            {/* Navigation */}
            <nav className="flex flex-col gap-2">
              {menu.slice(1).map((item, index) => (
                <a
                  key={item.id}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  onClick={closeMenu}
                  className={`group flex items-center justify-between border-b border-white/30 py-3 text-2xl font-medium transition-all duration-500 ${
                    isMenuOpen
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                  style={{
                    transitionDelay: isMenuOpen
                      ? `${index * 80 + 150}ms`
                      : "0ms",
                  }}
                >
                  <span>{item.section}</span>

                  {/* Arrow */}
                  <span className="text-2xl transition-transform duration-300 group-hover:translate-x-2">
                    →
                  </span>
                </a>
              ))}
            </nav>

            {/* Bottom decoration */}
            <div
              className={`mt-auto transition-all duration-700 ${
                isMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}
            >
              <div className="mb-4 h-px w-full bg-white/30" />

              <p className="text-sm text-white">
                Baton — Figma to React + Tailwind
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= DESKTOP ================= */}

      <ul className="hidden items-center justify-between sm:flex">
        {menu.slice(0, -1).map((item) => (
          <li key={item.id}>
            <a
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="cursor-pointer text-sm text-white/50 hover:text-white "
            >
              {item.section}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
