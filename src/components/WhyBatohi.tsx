import React from 'react';
import { motion } from "framer-motion";
import { Heart, Compass, ShieldCheck, Award, TrendingUp, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Immersive Cultural Experience",
    description: "Connect deeply with Bihar's heritage through authentic stories, traditions, and local insights."
  },
  {
    icon: Compass,
    title: "Smooth & Guided Exploration",
    description: "Navigate confidently with comprehensive guides, clear directions, and helpful tips for your journey."
  },
  {
    icon: ShieldCheck,
    title: "Safe & Accessible Travel",
    description: "Travel with peace of mind using safety features, emergency contacts, and multilingual support."
  },
  {
    icon: Award,
    title: "Curated & Authentic Experiences",
    description: "Discover the best of Bihar's cultural wealth through a professionally curated digital platform."
  },
  {
    icon: TrendingUp,
    title: "Data-Driven Improvements",
    description: "Benefit from a constantly improving experience based on visitor patterns and popular destinations."
  },
  {
    icon: Sparkles,
    title: "Modern Digital Companion",
    description: "Lead the way in digital tourism innovation with a platform that sets new standards for visitor experience."
  }
];

function BenefitCard({ benefit, index }: { benefit: any; index: number }) {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
      variants={{
        rest: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { delay: index * 0.1, type: "spring", stiffness: 100 }
        }
      }}
      className="h-full rounded-2xl p-6 border transition-all duration-300 cursor-pointer bg-gradient-to-br from-gray-900 to-orange-950 border-orange-800/50 hover:border-orange-600 hover:shadow-orange-500/20 shadow-lg"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br from-orange-500 to-amber-500">
          <benefit.icon className="w-7 h-7 text-white" />
        </div>
      </div>
      <h3 className="text-lg text-white mb-2">{benefit.title}</h3>
      <motion.div 
        variants={{ 
          rest: { opacity: 0, height: 0, y: 10 }, 
          hover: { opacity: 1, height: 'auto', y: 0 }
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="text-sm text-gray-400 leading-relaxed pt-4 mt-4 border-t border-white/10">
          {benefit.description}
        </p>
      </motion.div>
    </motion.div>
  );
}

export function WhyBatohi() {
  return (
    <section id="why-batohi" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute -top-1/2 left-0 w-full h-full bg-gradient-radial from-orange-600 via-transparent to-transparent blur-3xl animate-pulse-slow" />
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Why Choose Batohi?</h2>
          <p className="text-lg text-orange-200 max-w-3xl mx-auto">
            A comprehensive solution for a modern and seamless travel experience in Bihar.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} benefit={benefit} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
