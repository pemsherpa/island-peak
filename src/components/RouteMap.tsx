import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, ArrowRight } from "lucide-react";

const routePoints = [
  {
    day: "Day 1-2",
    location: "Lukla",
    altitude: "2,860m",
    description: "Fly into Tenzing-Hillary Airport, begin trek to Phakding",
    highlight: false,
  },
  {
    day: "Day 3-4",
    location: "Namche Bazaar",
    altitude: "3,440m",
    description: "Sherpa capital, acclimatization day with Everest views",
    highlight: false,
  },
  {
    day: "Day 5-6",
    location: "Tengboche",
    altitude: "3,860m",
    description: "Famous monastery, panoramic Himalayan views",
    highlight: false,
  },
  {
    day: "Day 7-8",
    location: "Dingboche",
    altitude: "4,410m",
    description: "Acclimatization hikes, prep for higher altitude",
    highlight: false,
  },
  {
    day: "Day 9-10",
    location: "Chhukung",
    altitude: "4,730m",
    description: "Last village, acclimatization on Chhukung Ri",
    highlight: false,
  },
  {
    day: "Day 11",
    location: "Base Camp",
    altitude: "5,087m",
    description: "Trek across Imja Glacier to Island Peak Base Camp",
    highlight: true,
  },
  {
    day: "Day 12",
    location: "High Camp",
    altitude: "5,600m",
    description: "Crampon training, rest before summit push",
    highlight: true,
  },
  {
    day: "Day 13",
    location: "Summit",
    altitude: "6,189m",
    description: "Alpine start, summit and return to Base Camp",
    highlight: true,
  },
];

const RouteMap = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="route"
      ref={ref}
      className="relative bg-slate-deep py-24 md:py-32"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container relative mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 font-montserrat text-3xl font-bold text-snow md:text-4xl lg:text-5xl">
            Expedition <span className="text-gradient-glacier">Route</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="mx-auto max-w-3xl font-inter text-lg text-muted-foreground">
            Follow the classic approach through the Khumbu Valley, acclimatizing
            among legendary peaks before your summit push.
          </p>
        </motion.div>

        {/* Route Timeline */}
        <div className="relative mx-auto max-w-4xl">
          {/* Vertical Line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary to-accent md:left-1/2 md:-translate-x-1/2" />

          {routePoints.map((point, index) => (
            <motion.div
              key={point.location}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative mb-8 pl-12 md:mb-12 md:w-[calc(50%-2rem)] md:pl-0 ${
                index % 2 === 0 ? "md:text-right" : "md:ml-auto"
              }`}
            >
              {/* Timeline Node */}
              <div
                className={`absolute left-0 flex h-8 w-8 items-center justify-center rounded-full md:left-auto ${
                  index % 2 === 0 ? "md:-right-[2.5rem]" : "md:-left-[2.5rem]"
                } ${
                  point.highlight
                    ? "bg-accent shadow-lg shadow-accent/30"
                    : "bg-primary"
                }`}
              >
                <MapPin className="h-4 w-4 text-accent-foreground" />
              </div>

              {/* Content Card */}
              <div
                className={`rounded-xl border p-6 transition-all duration-300 hover:border-primary/50 ${
                  point.highlight
                    ? "border-accent/30 bg-accent/5"
                    : "border-border bg-card"
                }`}
              >
                <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                  <span className="font-montserrat text-xs font-bold uppercase tracking-wider text-primary">
                    {point.day}
                  </span>
                  {point.highlight && (
                    <span className="rounded-full bg-accent/20 px-2 py-0.5 font-montserrat text-xs font-bold text-accent">
                      Summit Phase
                    </span>
                  )}
                </div>

                <h3 className="mb-1 font-montserrat text-xl font-bold text-snow">
                  {point.location}
                </h3>
                <p className="mb-2 font-montserrat text-lg font-semibold text-primary">
                  {point.altitude}
                </p>
                <p className="font-inter text-sm text-muted-foreground">
                  {point.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Altitude Profile Hint */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 flex flex-col items-center gap-4 text-center"
        >
          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="font-inter text-sm">Total elevation gain:</span>
            <span className="font-montserrat font-bold text-snow">3,329m</span>
            <ArrowRight className="h-4 w-4 text-primary" />
            <span className="font-inter text-sm">over 13 days</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RouteMap;
