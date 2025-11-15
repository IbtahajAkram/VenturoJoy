import { motion } from "framer-motion";
import { Plane, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { NavLink } from "@/components/NavLink";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-background to-muted border-t border-border/50">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className=" p-2 rounded-xl">
                <Plane className="w-6 h-6 text-primary" />
              </div>
              <span className="text-2xl font-bold text-primary">VenturoJoy</span>
            </div>
            <p className="text-muted-foreground mb-6">
              Your gateway to extraordinary adventures and unforgettable experiences around the globe.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter].map((Icon, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/features", label: "Features" },
                { to: "/catalog", label: "Destinations" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h3 className="text-lg font-bold mb-4">Popular Destinations</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="hover:text-primary cursor-pointer transition-colors">Maldives</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Paris, France</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Swiss Alps</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Tokyo, Japan</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Bali, Indonesia</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>info@VenturoJoy.com</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>123 Travel Street, Adventure City, AC 12345</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>&copy; {currentYear} VenturoJoy. All rights reserved. Made By Muhammad Zawwar Akram</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
            </div>
          </div>
          {/* .. */}
          {/* .. */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
