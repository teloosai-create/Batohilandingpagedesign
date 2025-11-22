import React from 'react';
import { Button } from "./ui/button";

import { MapPin, Smartphone, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState, useEffect, useCallback } from "react";

const heroSlides = [
  {
    background: "https://images.unsplash.com/photo-1741387863956-801156a94c39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYSUyMHRyYXZlbCUyMGRlc3RpbmF0aW9uJTIwc2NlbmljfGVufDF8fHx8MTc2Mzc1MzUyNnww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Batohi — Your Smart Travel Companion for Bihar",
    subtitle: "A modern digital guide that helps every traveller explore Bihar with ease, cultural richness, and meaningful experiences."
  },
  {
    background: "https://images.unsplash.com/photo-1655306160334-ddedcbb5f431?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCb2RoJTIwR2F5YSUyMHRlbXBsZXxlbnwxfHx8fDE3NjM3NTIwNTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Explore Bihar's Sacred Heritage",
    subtitle: "Discover ancient temples, Buddhist monasteries, and spiritual landmarks with guided stories and immersive experiences."
  },
  {
    background: "https://images.unsplash.com/photo-1656663786249-7acf9bfcb79d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCaWhhciUyMHRlbXBsZSUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjM3NTMxMjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Navigate Bihar with Confidence",
    subtitle: "Access offline maps, multilingual guides, and real-time navigation to make your journey smooth and memorable."
  }
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  const goToSlide = useCallback((index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  }, [currentSlide]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Carousel Background */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "tween", duration: 0.5 },
            opacity: { duration: 0.3 }
          }}
          className="absolute inset-0"
        >
          <ImageWithFallback
            src={heroSlides[currentSlide].background}
            alt="Bihar Tourism"
            className="w-full h-full object-cover blur-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-orange-900/90 to-amber-900/95" />
        </motion.div>
      </AnimatePresence>
      
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-orange-400 blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-yellow-400 blur-3xl" />
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/70 w-2"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-8 py-12 w-full z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="inline-block px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-orange-300/30">
                <p className="text-sm text-orange-200">Digital Travel Companion</p>
              </div>
              
              <h1 className="text-4xl lg:text-5xl text-white">
                {heroSlides[currentSlide].title}
              </h1>
              
              <p className="text-base text-orange-100 max-w-xl">
                {heroSlides[currentSlide].subtitle}
              </p>

              <div className="flex flex-wrap gap-3">
                <Button size="lg" className="rounded-xl shadow-lg hover:shadow-xl">
                  Get Started
                </Button>
                <Button size="lg" variant="outline" className="rounded-xl" onClick={() => handleNavClick('#vision')}>
                  Explore Destinations
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-orange-300/20">
                  <p className="text-2xl text-white">12+</p>
                  <p className="text-xs text-orange-200">Destinations</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-orange-300/20">
                  <p className="text-2xl text-white">5</p>
                  <p className="text-xs text-orange-200">Languages</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-orange-300/20">
                  <p className="text-2xl text-white">24/7</p>
                  <p className="text-xs text-orange-200">Support</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Right Visual - Feature Showcase Carousel */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Main Feature Card */}
              <motion.div 
                className="col-span-2 bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-orange-300/20"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative bg-gray-900 rounded-2xl p-3 h-80">
                  <div className="w-full h-full bg-gradient-to-br from-orange-200 to-amber-100 rounded-xl overflow-hidden relative">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1755286218783-5b8334109336?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwdHJhdmVsJTIwYXBwJTIwc2NyZWVuZmlufGVufDF8fHx8MTc2Mzc1MzUyNnww&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Batohi App"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end p-4">
                      <div>
                        <p className="text-white text-sm">Explore Bihar</p>
                        <p className="text-orange-200 text-xs">Navigate with ease</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Small Feature Cards */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-orange-300/20"
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1671375159250-b5c5fca0183a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBtb251bWVudCUyMHRvdXJpc218ZW58MXx8fHwxNjM3NTM1Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Heritage Site"
                  className="w-full h-32 object-cover"
                />
                <div className="p-3">
                  <p className="text-white text-sm">Heritage</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-orange-300/20"
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1761711951939-d55263f49534?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCaWhhciUyMGN1bHR1cmFsJTIwaGVyaXRhZ2V8ZW58MXx8fHwxNzYzNzUzNTI2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Cultural Experience"
                  className="w-full h-32 object-cover"
                />
                <div className="p-3">
                  <p className="text-white text-sm">Culture</p>
                </div>
              </motion.div>
            </div>

            {/* Floating Feature Cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl shadow-xl flex flex-col items-center justify-center"
            >
              <MapPin className="w-7 h-7 text-white mb-1" />
              <p className="text-xs text-white text-center px-1">Navigate</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl shadow-xl flex flex-col items-center justify-center"
            >
              <Smartphone className="w-7 h-7 text-white mb-1" />
              <p className="text-xs text-white text-center px-1">Smart Guide</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
