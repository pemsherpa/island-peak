import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mountain, Calendar, Gauge, Clock, TrendingUp, Thermometer } from "lucide-react";

const stats = [
  {
    icon: Mountain,
    value: "6,189m",
    label: "Summit Altitude",
    sublabel: "20,305 ft",
  },
  {
    icon: Gauge,
    value: "PD+",
    label: "Difficulty Grade",
    sublabel: "Peu Difficile Plus",
  },
  {
    icon: Calendar,
    value: "Spring / Autumn",
    label: "Best Seasons",
    sublabel: "April-May / Sept-Nov",
  },
  {
    icon: Clock,
    value: "16-18 Days",
    label: "Expedition Duration",
    sublabel: "Including acclimatization",
  },
  {
    icon: TrendingUp,
    value: "1,100m",
    label: "Summit Day Gain",
    sublabel: "From High Camp",
  },
  {
    icon: Thermometer,
    value: "-20°C",
    label: "Summit Temperature",
    sublabel: "Can drop lower",
  },
];

const ClimbOverview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="overview"
      ref={ref}
      className="relative bg-background py-20 md:py-32"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-montserrat text-3xl font-bold text-snow md:text-4xl lg:text-5xl">
            The <span className="text-gradient-glacier">Climb</span> Overview
          </h2>
          <div className="section-divider mb-6" />
          <p className="mx-auto max-w-3xl font-inter text-lg text-muted-foreground">
            Island Peak, known locally as Imja Tse, stands as one of Nepal's most
            popular trekking peaks. Rising from the spectacular Imja Valley, it
            offers climbers a true Himalayan experience with technical
            challenges that prepare you for higher objectives.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl bg-gradient-card p-6 transition-all duration-300 card-glow hover:border-primary/50 border border-border"
            >
              <div className="mb-4 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-montserrat text-2xl font-bold text-snow md:text-3xl">
                    {stat.value}
                  </p>
                </div>
              </div>
              <p className="font-montserrat text-sm font-semibold uppercase tracking-wider text-snow/90">
                {stat.label}
              </p>
              <p className="mt-1 font-inter text-sm text-muted-foreground">
                {stat.sublabel}
              </p>

              {/* Decorative gradient */}
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/5 blur-2xl transition-all duration-500 group-hover:bg-primary/10" />
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 rounded-2xl border border-border bg-card p-8 md:p-12"
        >
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 font-montserrat text-xl font-bold text-snow md:text-2xl">
                Why Island Peak?
              </h3>
              <p className="mb-4 font-inter text-muted-foreground leading-relaxed">
                Island Peak earned its name from early Everest expeditions who
                viewed it from the surrounding ridges, where it appeared as an
                island rising from a sea of ice. The peak offers the perfect
                introduction to technical Himalayan climbing.
              </p>
              <p className="font-inter text-muted-foreground leading-relaxed">
                The climb combines high-altitude trekking through the legendary
                Khumbu region with genuine mountaineering challenges: glacier
                travel, fixed-rope ascents, and a dramatic summit ridge that
                rewards you with 360° views of Everest, Lhotse, and Makalu.
              </p>
            </div>
            <div>
              <h3 className="mb-4 font-montserrat text-xl font-bold text-snow md:text-2xl">
                Technical Summary
              </h3>
              <ul className="space-y-3 font-inter text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  <span>
                    <strong className="text-snow">Glacier Crossing:</strong> Rope
                    work and crevasse awareness required
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  <span>
                    <strong className="text-snow">Headwall (45-50°):</strong>{" "}
                    Fixed ropes and jumar ascent
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  <span>
                    <strong className="text-snow">Summit Ridge:</strong> Exposed
                    knife-edge requiring careful footwork
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  <span>
                    <strong className="text-snow">Summit Push:</strong> 6-8 hours
                    from High Camp in ideal conditions
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClimbOverview;
