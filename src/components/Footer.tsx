import { Mail, Linkedin } from "lucide-react";

const footerLinks = {
  about: [
    { label: "Our Mission", href: "#" },
    { label: "Team", href: "#" },
    { label: "Partners", href: "#" }
  ],
  features: [
    { label: "Cultural Stories", href: "#" },
    { label: "Navigation", href: "#" },
    { label: "Safety Tools", href: "#" },
    { label: "Offline Mode", href: "#" }
  ],
  explore: [
    { label: "Bodh Gaya", href: "#" },
    { label: "Nalanda", href: "#" },
    { label: "Rajgir", href: "#" },
    { label: "All Destinations", href: "#" }
  ],
  contact: [
    { label: "Support", href: "#" },
    { label: "Tourism Office", href: "#" },
    { label: "Feedback", href: "#" }
  ]
};

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-xl text-white mb-3">Batohi</h3>
            <p className="text-sm text-gray-400">
              Your smart travel companion for Bihar
            </p>
          </div>

          {/* About */}
          <div>
            <h4 className="text-white mb-3 text-sm">About</h4>
            <ul className="space-y-2">
              {footerLinks.about.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-sm hover:text-orange-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-white mb-3 text-sm">Features</h4>
            <ul className="space-y-2">
              {footerLinks.features.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-sm hover:text-orange-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore Bihar */}
          <div>
            <h4 className="text-white mb-3 text-sm">Explore Bihar</h4>
            <ul className="space-y-2">
              {footerLinks.explore.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-sm hover:text-orange-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white mb-3 text-sm">Contact</h4>
            <ul className="space-y-2">
              {footerLinks.contact.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-sm hover:text-orange-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © 2025 Batohi. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="mailto:vittologyconsultants@gmail.com"
              className="w-9 h-9 rounded-full bg-gray-800 hover:bg-orange-600 flex items-center justify-center transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-gray-800 hover:bg-orange-600 flex items-center justify-center transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}