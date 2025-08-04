import Link from "next/link";
import { useRouter } from "next/router";
import DarkModeToggle from "./DarkModeToggle";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/internships", label: "Internship" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" }
];

export default function Navbar() {
  const router = useRouter();
  return (
    <nav className="fixed top-0 inset-x-0 backdrop-blur border-b z-20">
      <div className="max-w-5xl mx-auto flex items-center justify-between h-16 px-4">
        <Link href="/" className="font-bold text-brand">MyPortfolio</Link>
        <ul className="hidden sm:flex gap-5">
          {navItems.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`hover:text-brand transition-colors ${
                  router.pathname === href ? "text-brand" : ""
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <DarkModeToggle />
      </div>
    </nav>
  );
}