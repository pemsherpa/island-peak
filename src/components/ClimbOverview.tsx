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
      className="relative bg-background py-24 md:py-32"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 font-montserrat text-3xl font-bold text-snow md:text-4xl lg:text-5xl">
            The <span className="text-gradient-glacier">Climb</span> Overview
          </h2>
          <div className="section-divider mb-6" />
          <p className="mx-auto max-w-3xl font-inter text-lg text-muted-foreground">
            Locally known as <strong className="text-snow">Imja Tse</strong>, Island Peak is a spectacular summit 
            amid the giants of the Himalaya. Tucked away up the Chhukung Valley, this beautiful mountain 
            looks like an island rising from a sea of ice—dwarfed on both sides by the stupendous 
            Lhotse/Nuptse South Wall to the north and Baruntse to the south.
          </p>
        </motion.div>

        {/* Historical Context */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-12 rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 p-6 md:p-8"
        >
          <h3 className="mb-4 font-montserrat text-xl font-bold text-snow md:text-2xl">
            A Peak with Legendary History
          </h3>
          <p className="font-inter text-muted-foreground leading-relaxed">
            If you have dreamed of climbing a technical 6,000-metre Himalayan summit, Island Peak may answer your wishes. 
            It was the <strong className="text-primary">training peak used by Sir Edmund Hillary and Sherpa Tenzing Norgay in 1953</strong> before 
            their historic Everest ascent. The route they discovered is the same one used today. Island Peak remains 
            a popular training ground for Everest aspirants because the skills required—crossing crevasses with ladders, 
            using jumars on fixed lines, managing exposure on ridges—are identical to those needed on the world's highest peak.
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
          className="mt-10 rounded-2xl border border-border bg-card p-8 md:p-10"
        >
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 font-montserrat text-xl font-bold text-snow md:text-2xl">
                Views from the Summit
              </h3>
              <p className="mb-4 font-inter text-muted-foreground leading-relaxed">
                The views from the top of Island Peak are truly unforgettable, and all the more memorable 
                for the spectacular airy ridge climb to reach them. Standing at 6,189m, you're surrounded 
                by some of the world's highest mountains.
              </p>
              <p className="font-inter text-muted-foreground leading-relaxed">
                On a clear day, you'll witness <strong className="text-snow">360° panoramic views</strong> of 
                Everest, Lhotse, Makalu, Cho Oyu, Ama Dablam, and Baruntse. The Imja Glacier stretches below 
                like a frozen river, while the dramatic south wall of Nuptse towers to the north.
              </p>
            </div>
            <div>
              <h3 className="mb-4 font-montserrat text-xl font-bold text-snow md:text-2xl">
                Skills You'll Learn & Use
              </h3>
              <p className="mb-4 font-inter text-muted-foreground leading-relaxed">
                During this expedition, you will learn and practice essential high-altitude mountaineering skills:
              </p>
              <ul className="space-y-3 font-inter text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  <span>
                    <strong className="text-snow">Glacier Travel:</strong> Using climbing ropes, 
                    crossing crevasses with ladders
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  <span>
                    <strong className="text-snow">Fixed Rope Techniques:</strong> Using jumars to ascend, 
                    descenders for rappelling
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  <span>
                    <strong className="text-snow">Mixed Terrain:</strong> Scrambling on snow, ice, 
                    and rocky sections
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  <span>
                    <strong className="text-snow">Exposure Management:</strong> Navigating the narrow 
                    summit ridge safely
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* The Expedition Journey */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-6 rounded-2xl border border-border bg-card p-8 md:p-10"
        >
          <h3 className="mb-6 font-montserrat text-xl font-bold text-snow md:text-2xl">
            The Expedition Journey
          </h3>
          <div className="space-y-4 font-inter text-muted-foreground leading-relaxed">
            <p>
              The Island Peak expedition typically spans <strong className="text-snow">16-19 days</strong>, 
              including days in Kathmandu for briefings and permits. The gradual ascent up the legendary 
              Khumbu Valley provides excellent acclimatization, passing through Sherpa villages, ancient 
              monasteries, and some of the most breathtaking mountain scenery on Earth.
            </p>
            <p>
              Before tackling Island Peak, many climbers enhance their acclimatization with a hike up 
              <strong className="text-primary"> Chhukung Ri (5,550m)</strong>, which offers spectacular views 
              of the Lhotse south wall. By the time you reach Base Camp, you'll be well-acclimatized and 
              mountain fit.
            </p>
            <p>
              <strong className="text-accent">Summit Day</strong> involves crossing a crevassed glacier using 
              climbing ropes, negotiating ladders, ascending the 300m headwall on fixed lines, and finally 
              traversing the exposed summit ridge. It's demanding but achievable for those with proper 
              preparation and determination.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClimbOverview;
