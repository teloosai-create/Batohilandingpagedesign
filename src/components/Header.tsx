import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X, MapPin, Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Features", href: "#features" },
    { label: "Why Batohi", href: "#why-batohi" },
    { label: "Vision", href: "#vision" },
    { label: "Contact", href: "#contact" }
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          isScrolled
            ? "bg-gray-900 shadow-2xl border-b border-orange-500/20"
            : "bg-black"
        }`}
        style={{ willChange: 'background-color, box-shadow' }}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => handleNavClick('#home')}
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center shadow-lg">
                <span className="text-white text-lg">B</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl text-white">Batohi</span>
                <span className="text-xs text-orange-300 -mt-1">Travel Companion</span>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item, index) => (
                <motion.a
                  key={index}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, ease: "easeOut" }}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="px-4 py-2 text-sm text-orange-100 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <Button size="sm" variant="outline" className="rounded-lg">
                Sign In
              </Button>
              <Button size="sm" className="rounded-lg">
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </nav>
      </header>

      {/* Full Screen Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed inset-0 bg-gray-900/80 z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ willChange: 'opacity' }}
            />

            {/* Menu Content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: "easeOut" }}
              className="fixed right-0 top-0 bottom-0 w-80 bg-gradient-to-br from-gray-900 via-orange-950 to-gray-900 z-50 lg:hidden shadow-2xl border-l border-orange-500/20"
              style={{ willChange: 'transform' }}
            >
              <div className="flex flex-col h-full">
                {/* Menu Header */}
                <div className="p-6 border-b border-orange-500/20">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center shadow-lg">
                        <span className="text-white text-lg">B</span>
                      </div>
                      <div>
                        <h3 className="text-white text-lg">Batohi</h3>
                        <p className="text-xs text-orange-300">Explore Bihar</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Navigation Links */}
                <div className="flex-1 overflow-y-auto py-6 px-6">
                  <div className="space-y-2">
                    {navItems.map((item, index) => (
                      <motion.a
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, ease: "easeOut" }}
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(item.href);
                        }}
                        className="flex items-center gap-3 px-4 py-3 text-base text-orange-100 hover:text-white hover:bg-white/10 rounded-xl transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-orange-500/20 group-hover:bg-orange-500/30 flex items-center justify-center transition-colors">
                          <MapPin className="w-4 h-4 text-orange-400" />
                        </div>
                        <span>{item.label}</span>
                      </motion.a>
                    ))}
                  </div>

                  {/* Quick Contact */}
                  <div className="mt-8 pt-6 border-t border-orange-500/20">
                    <p className="text-xs text-orange-300 mb-4 px-4">Quick Contact</p>
                    <div className="space-y-3">
                      <motion.a
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, ease: "easeOut" }}
                        href="tel:+911234567890"
                        className="flex items-center gap-3 px-4 py-3 text-sm text-orange-100 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
                      >
                        <Phone className="w-4 h-4 text-orange-400" />
                        <span>+91 123 456 7890</span>
                      </motion.a>
                      <motion.a
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6, ease: "easeOut" }}
                        href="mailto:vittologyconsultants@gmail.com"
                        className="flex items-center gap-3 px-4 py-3 text-sm text-orange-100 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
                      >
                        <Mail className="w-4 h-4 text-orange-400" />
                        <span className="text-xs">vittologyconsultants@gmail.com</span>
                      </motion.a>
                    </div>
                  </div>
                </div>

                {/* Menu Footer - CTA Buttons */}
                <div className="p-6 border-t border-orange-500/20 space-y-3">
                  <Button
                    size="default"
                    variant="outline"
                    className="w-full rounded-xl"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Sign In
                  </Button>
                  <Button
                    size="default"
                    className="w-full rounded-xl"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
