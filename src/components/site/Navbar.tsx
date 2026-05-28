import { useState, useEffect } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/TNR.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/why-us", label: "Why Us" },
  { to: "/projects", label: "Our Project" },
  { to: "/services", label: "Services" },
  // { to: "/faqs", label: "FAQs" },
  { to: "/career", label: "Career" },
  { to: "/blogs", label: "Blogs" },
  { to: "/contact", label: "Contact Us" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur shadow-soft" : "bg-background"
      }`}
    >
      <div className="container-x flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="The Nest Realty" className="h-15 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <a
          href="tel:+919876543210"
          className="hidden lg:inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-md text-sm font-medium hover:bg-primary-dark transition-colors"
        >
          <Phone className="h-4 w-4" /> Call Now
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container-x py-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="py-3 px-2 text-base font-medium text-foreground/80 hover:text-primary border-b border-border/50"
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <a
              href="tel:+919876543210"
              className="mt-3 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-md font-medium"
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
