import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Mountain } from "lucide-react";

const navLinks = [
  { href: "#overview", label: "Overview" },
  { href: "#route", label: "Route" },
  { href: "#climbing", label: "Climbing" },
  { href: "#gear", label: "Gear" },
  { href: "#permits", label: "Permits" },
  { href: "#gallery", label: "Gallery" },
  { href: "#safety", label: "Safety" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 font-montserrat text-lg font-bold text-snow"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <Mountain className="h-6 w-6 text-primary" />
          <span className="hidden sm:inline">Island Peak</span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="font-inter text-sm font-medium text-snow/80 transition-colors hover:text-primary"
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => handleNavClick("#overview")}
              className="btn-summit rounded-full px-6 py-2.5 font-montserrat text-xs font-bold uppercase tracking-wider text-accent-foreground"
            >
              Book Now
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-snow p-2"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        className="overflow-hidden bg-background/98 backdrop-blur-md lg:hidden"
      >
        <ul className="container mx-auto flex flex-col gap-4 px-4 py-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="w-full text-left font-inter text-base font-medium text-snow/80 transition-colors hover:text-primary"
              >
                {link.label}
              </button>
            </li>
          ))}
          <li className="pt-2">
            <button
              onClick={() => handleNavClick("#overview")}
              className="btn-summit w-full rounded-full px-6 py-3 font-montserrat text-sm font-bold uppercase tracking-wider text-accent-foreground"
            >
              Book Now
            </button>
          </li>
        </ul>
      </motion.div>
    </motion.nav>
  );
};

export default Navigation;
