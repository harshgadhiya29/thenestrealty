import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container-x py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        
        {/* Logo & Social */}
        <div>
          <img
            src={logo}
            alt="The Nest Realty"
            className="h-16 w-auto bg-white/95 rounded p-2"
          />

          <p className="mt-4 text-sm text-white/70 leading-relaxed">
            The Nest Realty Build your memories with your Dream Nest.
            Trusted real estate partner in Ahmedabad.
          </p>

          <div className="flex gap-3 mt-5">
            {[
              {
                icon: Facebook,
                link: "https://www.facebook.com/profile.php?id=61569187020817",
              },
              {
                icon: Instagram,
                link: "https://www.instagram.com/thenest_realty/",
              },
            ].map(({ icon: Icon, link }, i) => (
              <a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Social link"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg mb-4 text-primary">Quick Links</h4>

          <ul className="space-y-2 text-sm text-white/70">
            {[
              ["/", "Home"],
              ["/about", "About Us"],
              ["/services", "Services"],
              ["/projects", "Projects"],
              ["/why-us", "Why Us"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link
                  to={to}
                  className="hover:text-primary transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-lg mb-4 text-primary">Company</h4>

          <ul className="space-y-2 text-sm text-white/70">
            {[
              ["/career", "Career"],
              ["/blogs", "Blogs"],
              ["/faqs", "FAQs"],
              ["/contact", "Contact Us"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link
                  to={to}
                  className="hover:text-primary transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg mb-4 text-primary">Get in Touch</h4>

          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex gap-2">
              <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
509,Hilltown Impressa, Opp.Parikh Hospital, Nikol, Ahmedabad, India 380049
            </li>

            <li className="flex gap-2">
              <Phone className="h-4 w-4 text-primary mt-0.5 shrink-0" />
              +91 98765 43210
            </li>

            <li className="flex gap-2">
              <Mail className="h-4 w-4 text-primary mt-0.5 shrink-0" />
              hello@thenestrealty.in
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-x py-5 text-xs text-white/50 flex flex-col md:flex-row justify-between gap-2">
          <span>
            © {new Date().getFullYear()} The Nest Realty. All rights reserved.
          </span>

          <span>Powered by ❤️ Sane Creative Studio</span>
        </div>
      </div>
    </footer>
  );
}