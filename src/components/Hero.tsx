import { motion } from "framer-motion";
import { Mountain, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-island-peak.jpg";

const Hero = () => {
  const scrollToOverview = () => {
    document.getElementById("overview")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Island Peak (Imja Tse) summit at sunrise with prayer flags and glacier"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <Mountain className="mx-auto h-16 w-16 text-primary md:h-20 md:w-20" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-4 font-montserrat text-4xl font-black uppercase tracking-wider text-snow md:text-6xl lg:text-7xl"
        >
          Island Peak
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-2 font-montserrat text-lg font-medium tracking-widest text-glacier-light md:text-xl"
        >
          IMJA TSE • 6,189M
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-10 max-w-3xl font-inter text-xl font-light text-snow/80 md:text-2xl lg:text-3xl"
        >
          Your Gateway to 6,000 Meters
        </motion.h2>

        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          onClick={scrollToOverview}
          className="btn-summit rounded-full px-8 py-4 font-montserrat text-sm font-bold uppercase tracking-wider text-accent-foreground md:px-10 md:py-5 md:text-base"
        >
          Begin Your Expedition
        </motion.button>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
          onClick={scrollToOverview}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="h-8 w-8 text-snow/70" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
