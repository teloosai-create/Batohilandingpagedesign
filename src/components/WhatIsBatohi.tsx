import { useState, useMemo } from "react";
import { motion } from "motion/react";
import { BookOpen, Navigation, Languages, Shield, WifiOff } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const features = [
  {
    id: "storytelling",
    icon: BookOpen,
    label: "Storytelling",
    title: "Cultural Storytelling",
    description: "Discover the rich history and legends behind every monument, temple, and heritage site across Bihar through immersive narratives.",
    image: "https://images.unsplash.com/photo-1656663786249-7acf9bfcb79d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCaWhhciUyMHRlbXBsZSUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjM3NTMxMjV8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "navigation",
    icon: Navigation,
    label: "Navigation",
    title: "Smart Navigation",
    description: "Get accurate directions, local routes, and helpful tips to reach every destination smoothly, even in remote areas.",
    image: "https://images.unsplash.com/photo-1554341543-6eb780242777?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXZpZ2F0aW9uJTIwbWFwJTIwY29tcGFzc3xlbnwxfHx8fDE3NjM3NDYzNzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "multilingual",
    icon: Languages,
    label: "Multilingual",
    title: "Multiple Languages",
    description: "Access the entire platform in Hindi, English, and local languages to ensure every traveller feels at home.",
    image: "https://images.unsplash.com/photo-1680599022555-57fb95b64b5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjB0cmF2ZWxlcnMlMjBleHBsb3Jpbmd8ZW58MXx8fHwxNzYzNzUzMTI1fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "safety",
    icon: Shield,
    label: "Safety",
    title: "Safety Information",
    description: "Stay informed with emergency contacts, local helplines, and safety guidelines to ensure a secure travel experience.",
    image: "https://images.unsplash.com/photo-1760008864923-4c9aaba5f785?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBzYWZldHklMjBndWlkZXxlbnwxfHx8fDE3NjM3NTMxMjd8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "offline",
    icon: WifiOff,
    label: "Offline Mode",
    title: "Works Offline",
    description: "Download maps, stories, and essential information beforehand to explore Bihar even without internet connectivity.",
    image: "https://images.unsplash.com/photo-1617092883467-3eb30bc694d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCdWRkaGlzdCUyMG1vbmFzdGVyeSUyMHBlYWNlZnVsfGVufDF8fHx8MTc2Mzc1MzEyNnww&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

export function WhatIsBatohi() {
  const [activeTab, setActiveTab] = useState("storytelling");

  const activeFeature = useMemo(
    () => features.find(f => f.id === activeTab) || features[0],
    [activeTab]
  );

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 via-orange-950 to-red-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-orange-400 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-yellow-400 blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl text-white mb-4">What is Batohi?</h2>
          <p className="text-base text-orange-100 max-w-3xl mx-auto">
            Batohi is a digital travel companion designed to make exploring Bihar effortless. 
            It brings together storytelling, navigation, language accessibility, safety information, 
            and offline usability into one simple experience.
          </p>
        </motion.div>

        {/* Tab Navigation + Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Side - Tab Buttons */}
          <div className="lg:col-span-1 space-y-3">
            {features.map((feature, index) => (
              <motion.button
                key={feature.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActiveTab(feature.id)}
                className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                  activeTab === feature.id
                    ? "bg-gradient-to-r from-orange-500 to-amber-500 shadow-lg"
                    : "bg-white/5 hover:bg-white/10 border border-orange-800/30"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    activeTab === feature.id
                      ? "bg-white/20"
                      : "bg-orange-900/30"
                  }`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className={`text-sm ${
                      activeTab === feature.id ? "text-white" : "text-orange-200"
                    }`}>
                      {feature.label}
                    </p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Right Side - Active Content Display */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-2"
          >
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-orange-800/30">
              {/* Image */}
              <div className="h-64 overflow-hidden relative">
                <ImageWithFallback
                  src={activeFeature.image}
                  alt={activeFeature.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-400 to-amber-400 flex items-center justify-center">
                    <activeFeature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl text-white">{activeFeature.title}</h3>
                </div>
                <p className="text-base text-gray-300 leading-relaxed">
                  {activeFeature.description}
                </p>

                {/* Feature Highlights */}
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="bg-white/5 rounded-lg p-3 border border-orange-800/20">
                    <p className="text-xs text-orange-300">Available in</p>
                    <p className="text-sm text-white">Multiple Languages</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 border border-orange-800/20">
                    <p className="text-xs text-orange-300">Works</p>
                    <p className="text-sm text-white">Online & Offline</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
