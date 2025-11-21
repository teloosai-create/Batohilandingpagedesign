import { useState } from "react";
import { motion } from "motion/react";
import { Heart, Compass, ShieldCheck, Award, TrendingUp, Sparkles } from "lucide-react";

const travelerBenefits = [
  {
    icon: Heart,
    title: "Immersive Cultural Experience",
    description: "Connect deeply with Bihar's heritage through authentic stories, traditions, and local insights that bring history to life."
  },
  {
    icon: Compass,
    title: "Smooth & Guided Exploration",
    description: "Navigate confidently with comprehensive guides, clear directions, and helpful tips for every step of your journey."
  },
  {
    icon: ShieldCheck,
    title: "Safe & Accessible Travel",
    description: "Travel with peace of mind using safety features, emergency contacts, and multilingual support designed for your comfort."
  }
];

const governmentBenefits = [
  {
    icon: Award,
    title: "Strong State Branding",
    description: "Showcase Bihar's cultural wealth and tourism potential through a modern, professional digital platform."
  },
  {
    icon: TrendingUp,
    title: "Better Tourism Insights",
    description: "Track visitor patterns, popular destinations, and tourism trends to make informed policy decisions."
  },
  {
    icon: Sparkles,
    title: "Modern Digital Tourism Model",
    description: "Lead the way in digital tourism innovation with a platform that sets new standards for visitor experience."
  }
];

function FlipCard({ benefit, index }: { benefit: any; index: number }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="h-64 perspective-1000"
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-white to-orange-50 rounded-2xl shadow-lg border border-orange-100 flex flex-col items-center justify-center p-6"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-400 to-amber-400 flex items-center justify-center mb-4">
            <benefit.icon className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-base text-gray-900 text-center">{benefit.title}</h3>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl shadow-xl flex items-center justify-center p-6"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)"
          }}
        >
          <p className="text-white text-center text-sm">{benefit.description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function WhyBatohi() {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-900 via-amber-900 to-red-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-orange-400 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-yellow-400 blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl text-white mb-3">Why Batohi?</h2>
          <p className="text-base text-orange-100">Hover or tap to discover the benefits</p>
        </motion.div>

        {/* For Travellers */}
        <div className="mb-16">
          <h3 className="text-2xl text-white mb-6 text-center">For Travellers</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {travelerBenefits.map((benefit, index) => (
              <FlipCard key={index} benefit={benefit} index={index} />
            ))}
          </div>
        </div>

        {/* For Government */}
        <div>
          <h3 className="text-2xl text-white mb-6 text-center">For Government</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {governmentBenefits.map((benefit, index) => (
              <FlipCard key={index} benefit={benefit} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}