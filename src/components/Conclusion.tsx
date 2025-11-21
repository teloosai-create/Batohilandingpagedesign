import { motion } from "motion/react";
import { Mail } from "lucide-react";
import { Button } from "./ui/button";

export function Conclusion() {
  return (
    <section id="contact" className="py-32 bg-gradient-to-br from-red-900 via-orange-800 to-amber-700 relative overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 rounded-full bg-yellow-400 blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-orange-400 blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl text-white">
            Travel Bihar with Confidence
          </h2>

          <p className="text-base text-orange-100">
            Batohi is designed to give travellers a richer, smoother, safer journey through Bihar. 
            It brings together heritage, culture, and modern digital convenience in one place.
          </p>

          <div className="pt-4">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/20 break-all">
              <Mail className="w-5 h-5 text-orange-200 flex-shrink-0" />
              <a 
                href="mailto:vittologyconsultants@gmail.com"
                className="text-sm text-white hover:text-orange-200 transition-colors"
              >
                vittologyconsultants@gmail.com
              </a>
            </div>
          </div>

          <div className="pt-4">
            <Button 
              size="default" 
              className="bg-white text-orange-800 hover:bg-orange-50 px-6 rounded-xl shadow-xl hover:shadow-2xl transition-all"
            >
              Start Your Journey
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}