// components/Footer.jsx
import Link from "next/link";
import LogoWhite from "./LogoWhite";
import Image from "next/image";

export default function Footer() {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/service", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  const socialLinks = [
    {
      icon: <i className="fa-brands fa-github" />,
      href: "https://github.com/mhr9t8",
    },
    {
      icon: <i className="fa-brands fa-linkedin text-[#007AB5]" />,
      href: "https://linkedin.com/in/mhr9t9",
    },
    {
      icon: <i className="fa-brands fa-x-twitter" />,
      href: "https://x.com/mhr9t8",
    },
    {
      icon: (
        <Image
          width={25}
          height={25}
          src="/img/fiverr.webp"
          alt="Fiverr"
          className="w-5 h-5 object-contain"
        />
      ),
      href: "https://fiverr.com/hello_rahat",
    },
    {
      icon: <i className="fa-brands fa-upwork text-[#14A800]" />,
      href: "https://www.upwork.com/freelancers/~018ffafd05aab0c72d",
    },
    {
      icon: <i className="fa-solid fa-envelope text-[#E14D3C]" />,
      href: "mailto:rahatdeveloper007@gmail.com",
    },
  ];

  return (
    <footer className="bg-black border-t border-slate-800 px-6 pt-12 pb-6">
      <div className="max-w-6xl mx-auto">
        {/* Top section */}
        <div className="flex flex-wrap justify-between gap-10 mb-10">
          {/* Logo */}
          <div>
            <div>
              <LogoWhite />
            </div>
          </div>

          {/* Nav */}
          <div className="flex flex-col gap-2">
            <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-1">
              Navigation
            </p>
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-slate-500 text-sm hover:text-blue-400 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Social */}
          <div>
            <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-3">
              Find Me On
            </p>
            <div className="flex gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-slate-800 border border-slate-700 hover:border-blue-600 hover:text-blue-400 hover:-translate-y-0.5 rounded-lg flex items-center justify-center text-slate-500 transition-all duration-200"
                >
                  {s.icon} {/* ← just render directly, no <i> wrapper */}
                </a>
              ))}
            </div>
          </div>
        </div>

        <hr className="border-slate-800 mb-5" />

        {/* Bottom */}
        <div className="flex flex-wrap justify-between items-center gap-3">
          <p className="text-slate-500 text-xs">
            MHR © {new Date().getFullYear()} 🏴 All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="/privacy-policy"
              className="text-slate-500 text-xs hover:text-blue-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="text-slate-500 text-xs hover:text-blue-400 transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
