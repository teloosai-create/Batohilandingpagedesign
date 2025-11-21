import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const destinations = [
  {
    name: "Bodh Gaya",
    image: "https://images.unsplash.com/photo-1655306160334-ddedcbb5f431?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCb2RoJTIwR2F5YSUyMHRlbXBsZXxlbnwxfHx8fDE3NjM3NTIwNTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    name: "Nalanda University Ruins",
    image: "https://images.unsplash.com/photo-1672579738105-227fa89d0527?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYSUyMGhlcml0YWdlJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc2Mzc1MjA1OXww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    name: "Rajgir Ropeway",
    image: "https://images.unsplash.com/photo-1648975482235-b6e58254a773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSYWpnaXIlMjBtb3VudGFpbnMlMjBJbmRpYXxlbnwxfHx8fDE3NjM3NTIwNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    name: "Golghar",
    image: "https://images.unsplash.com/photo-1660695189679-2435e67245a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCaWhhciUyMEluZGlhJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc2Mzc1MjA1OXww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    name: "Vikramshila University",
    image: "https://images.unsplash.com/photo-1672579738105-227fa89d0527?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYSUyMGhlcml0YWdlJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc2Mzc1MjA1OXww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    name: "Vaishali Stupa",
    image: "https://images.unsplash.com/photo-1701249515636-68a6f5d7d784?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwQnVkZGhpc3QlMjBzdHVwYXxlbnwxfHx8fDE3NjM3NTIwNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    name: "Kesaria Stupa",
    image: "https://images.unsplash.com/photo-1701249515636-68a6f5d7d784?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwQnVkZGhpc3QlMjBzdHVwYXxlbnwxfHx8fDE3NjM3NTIwNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    name: "Patna Museum",
    image: "https://images.unsplash.com/photo-1753439159487-4e5a70f67ba2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBtdXNldW0lMjBhcnRpZmFjdHN8ZW58MXx8fHwxNzYzNzQ4ODQwfDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    name: "Barabar Caves",
    image: "https://images.unsplash.com/photo-1751964383659-27cd4c303bdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwY2F2ZXMlMjBJbmRpYXxlbnwxfHx8fDE3NjM3NTIwNTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    name: "Takht Sri Patna Sahib",
    image: "https://images.unsplash.com/photo-1621377099913-ac1ec4848e52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTaWtoJTIwdGVtcGxlJTIwZ29sZGVufGVufDF8fHx8MTc2Mzc1MjA1OHww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    name: "Kakolat Waterfall",
    image: "https://images.unsplash.com/photo-1625023455567-09b002682d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcmZhbGwlMjBJbmRpYSUyMG5hdHVyZXxlbnwxfHx8fDE3NjM3NTIwNTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    name: "Madhubani Art Region",
    image: "https://images.unsplash.com/photo-1660695189679-2435e67245a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCaWhhciUyMEluZGlhJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc2Mzc1MjA1OXww&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

export function Vision() {
  return (
    <section id="vision" className="py-20 bg-gradient-to-br from-gray-900 via-red-950 to-orange-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-orange-400 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-yellow-400 blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Vision Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl text-white mb-4">Our Vision</h2>
          <p className="text-2xl text-orange-200 max-w-4xl mx-auto italic">
            "To help every traveller not only visit Bihar, but feel Bihar."
          </p>
        </motion.div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {destinations.map((destination, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className="group cursor-pointer"
            >
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-orange-900/50">
                <div className="aspect-square overflow-hidden">
                  <ImageWithFallback
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-3">
                  <h3 className="text-center text-sm text-white">{destination.name}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Context */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-base text-orange-200 max-w-3xl mx-auto">
            From ancient stupas to sacred temples, from historical universities to natural wonders—
            Bihar's heritage awaits your discovery.
          </p>
        </motion.div>
      </div>
    </section>
  );
}