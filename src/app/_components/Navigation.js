"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/service", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const baseLink = "transition-all duration-300 ease-in-out hover:scale-105";

const activeLink =
  "bg-linear-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent";

const inactiveLink =
  "text-foreground hover:text-3xl hover:bg-linear-to-r hover:from-blue-700 hover:to-purple-700 hover:bg-clip-text hover:text-transparent";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const getLinkClass = (href) => {
    const isActive = pathname === href;

    return `${baseLink} ${isActive ? activeLink : inactiveLink}`;
  };

  return (
    <nav>
      {/* Desktop */}
      <ul className="hidden sm:flex justify-center items-center gap-7 text-2xl font-semibold">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className={getLinkClass(link.href)}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile button */}
      <button
        className="sm:hidden text-xl cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        {open ? "✕" : "☰"}
      </button>

      {/* Mobile menu */}
      {open && (
        <ul className="absolute left-0 w-full bg-[#6a7a8a]/90 flex flex-col items-center gap-4 py-4 text-2xl font-semibold sm:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={getLinkClass(link.href)}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
