import { motion } from "framer-motion";
import { Mountain, Mail, Phone, MapPin, Instagram, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-deep border-t border-border">
      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-montserrat text-3xl font-bold text-snow md:text-4xl">
            Ready to Reach the Summit?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl font-inter text-lg text-muted-foreground">
            Join our next expedition to Island Peak. Limited spots available for
            spring and autumn seasons.
          </p>
          <button className="btn-summit rounded-full px-10 py-5 font-montserrat text-base font-bold uppercase tracking-wider text-accent-foreground">
            Book Your Expedition
          </button>
        </motion.div>

        {/* Footer Content */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Mountain className="h-8 w-8 text-primary" />
              <span className="font-montserrat text-xl font-bold text-snow">
                Island Peak
              </span>
            </div>
            <p className="font-inter text-sm text-muted-foreground leading-relaxed">
              Professional guided expeditions to Island Peak (Imja Tse) in
              Nepal's stunning Khumbu region. Your gateway to 6,000 meters.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-montserrat text-sm font-bold uppercase tracking-wider text-snow">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["Overview", "Route", "Climbing", "Gear", "Permits", "Gallery", "Safety"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="font-inter text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-montserrat text-sm font-bold uppercase tracking-wider text-snow">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <a
                  href="mailto:info@islandpeak.com"
                  className="font-inter text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  info@islandpeak.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="font-inter text-sm text-muted-foreground">
                  +977 1-4XXXXXX
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary mt-1" />
                <span className="font-inter text-sm text-muted-foreground">
                  Thamel, Kathmandu
                  <br />
                  Nepal
                </span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4 font-montserrat text-sm font-bold uppercase tracking-wider text-snow">
              Follow Our Expeditions
            </h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-card text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-card text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-card text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
            <p className="mt-4 font-inter text-xs text-muted-foreground">
              #IslandPeakExpedition
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-border pt-8 text-center">
          <p className="font-inter text-sm text-muted-foreground">
            © {currentYear} Island Peak Expeditions. All rights reserved.
          </p>
          <p className="mt-2 font-inter text-xs text-muted-foreground">
            Climb responsibly. Leave no trace. Respect the mountains.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
