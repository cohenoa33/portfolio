import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" }
];

interface NavbarProps {
  isDark: boolean;
  onToggleDarkMode: () => void;
}

export function Navbar({ isDark, onToggleDarkMode }: NavbarProps) {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "skills", "contact"];
      const scrollPosition = window.scrollY + 200;

      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 100;

      if (isAtBottom) {
        setActiveSection("contact");
        return;
      }

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-(--bg-primary) border-b-2 border-(--ring) transition-colors duration-200">
      <div className="px-6 md:px-12 py-6">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo/Name */}
          <a
            href="#home"
            onClick={(e) => handleClick(e, "#home")}
            className="hidden md:block text-sm tracking-[0.3em] uppercase hover:opacity-60 transition-opacity"
          >
            Portfolio
          </a>

          {/* Navigation Items */}
          <ul className="flex items-center gap-1">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleClick(e, item.href)}
                    className={`block px-3 md:px-6 py-2 md:py-3 text-xs tracking-[0.3em] uppercase transition-all ${
                      isActive
                        ? "bg-(--text-primary) text-(--bg-primary)"
                        : "hover:opacity-50 hover:bg-(--interactive-bg-hover)"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] opacity-40">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span>{item.label}</span>
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Dark Mode Toggle */}
          <button
            onClick={onToggleDarkMode}
            className="ml-0 md:ml-4 p-2 rounded-lg hover:opacity-80 transition-opacity"
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
