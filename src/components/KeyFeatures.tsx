import { motion } from "motion/react";
import { BookText, Map, Globe, WifiOff, PhoneCall, BarChart3 } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const features = [
  {
    icon: BookText,
    title: "Cultural Storytelling",
    description: "Immerse yourself in the rich heritage of Bihar with stories about monuments, temples, and historical landmarks.",
    image: "https://images.unsplash.com/photo-1656663786249-7acf9bfcb79d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCaWhhciUyMHRlbXBsZSUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjM3NTMxMjV8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    icon: Map,
    title: "Local Navigation Support",
    description: "Find your way easily with detailed maps, local routes, and helpful directions to every destination.",
    image: "https://images.unsplash.com/photo-1554341543-6eb780242777?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXZpZ2F0aW9uJTIwbWFwJTIwY29tcGFzc3xlbnwxfHx8fDE3NjM3NDYzNzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    icon: Globe,
    title: "Multiple Language Options",
    description: "Explore Bihar in your preferred language with support for Hindi, English, and regional languages.",
    image: "https://images.unsplash.com/photo-1680599022555-57fb95b64b5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjB0cmF2ZWxlcnMlMjBleHBsb3Jpbmd8ZW58MXx8fHwxNzYzNzUzMTI1fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    icon: WifiOff,
    title: "Works Without Internet",
    description: "Download essential content beforehand and access maps, stories, and guides even when you're offline.",
    image: "https://images.unsplash.com/photo-1617092883467-3eb30bc694d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCdWRkaGlzdCUyMG1vbmFzdGVyeSUyMHBlYWNlZnVsfGVufDF8fHx8MTc2Mzc1MzEyNnww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    icon: PhoneCall,
    title: "Quick Help & Contact Info",
    description: "Access emergency contacts, tourist helplines, and local assistance information instantly when needed.",
    image: "https://images.unsplash.com/photo-1760008864923-4c9aaba5f785?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBzYWZldHklMjBndWlkZXxlbnwxfHx8fDE3NjM3NTMxMjd8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    icon: BarChart3,
    title: "Tourism Monitoring Dashboard",
    description: "Government officials can track visitor trends, popular destinations, and tourism metrics in real-time.",
    image: "https://images.unsplash.com/photo-1684024368201-c93cb97f0cf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwSW5kaWElMjBoZXJpdGFnZXxlbnwxfHx8fDE3NjM3NTMxMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

export function KeyFeatures() {
  return (
    <section id="features" className="py-20 bg-gradient-to-br from-gray-900 via-orange-950 to-amber-950">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl text-white mb-4">Key Features</h2>
          <p className="text-base text-orange-200 max-w-2xl mx-auto">
            Everything you need for a seamless travel experience in Bihar
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-orange-900/50"
            >
              <div className="h-40 overflow-hidden">
                <ImageWithFallback
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-400 to-amber-400 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
