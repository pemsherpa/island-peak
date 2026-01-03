import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle, Shield, ArrowUpRight } from "lucide-react";

const climbingSections = [
  {
    title: "The Headwall",
    grade: "45-50° Ice",
    description:
      "The most technical section of the climb. A 150-meter wall of blue ice and mixed terrain requires proficiency with jumars (ascenders) and fixed-rope techniques. Guides pre-fix ropes before your summit attempt.",
    techniques: [
      "Jumar/Ascender operation",
      "Rest positions on steep ice",
      "Managing rope drag",
      "Energy conservation at altitude",
    ],
    image: "https://imgur.com/K70QZK4.jpg",
  },
  {
    title: "Summit Ridge",
    grade: "Exposed • Class 3",
    description:
      "After cresting the headwall, a spectacular knife-edge ridge leads to the true summit. This exposed traverse requires careful foot placement and confidence with exposure. Fixed ropes protect the most technical sections.",
    techniques: [
      "Knife-edge traversing",
      "Short-roping techniques",
      "Exposure management",
      "Summit photography tips",
    ],
    image: "https://imgur.com/aXcKPns.jpg",
  },
];

const ClimbingGuide = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="climbing"
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
            Climbing <span className="text-gradient-glacier">Guide</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="mx-auto max-w-3xl font-inter text-lg text-muted-foreground">
            Technical breakdown of the key climbing sections. Understanding
            these challenges is essential for summit success.
          </p>
        </motion.div>

        {/* Climbing Sections */}
        <div className="space-y-8">
          {climbingSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="overflow-hidden rounded-2xl border border-border bg-card"
            >
              <div className="grid gap-0 lg:grid-cols-2">
                {/* Section Image */}
                <div
                  className={`relative min-h-[300px] lg:min-h-[400px] ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <img
                    src={section.image}
                    alt={section.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-${index % 2 === 1 ? 'l' : 'r'} from-card via-transparent to-transparent lg:via-card/50`} />
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="rounded-full bg-accent/10 px-3 py-1 font-montserrat text-xs font-bold uppercase tracking-wider text-accent">
                      {section.grade}
                    </span>
                  </div>

                  <h3 className="mb-4 font-montserrat text-2xl font-bold text-snow md:text-3xl">
                    {section.title}
                  </h3>

                  <p className="mb-6 font-inter text-muted-foreground leading-relaxed">
                    {section.description}
                  </p>

                  <h4 className="mb-3 font-montserrat text-sm font-bold uppercase tracking-wider text-primary">
                    Key Techniques
                  </h4>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {section.techniques.map((technique) => (
                      <li
                        key={technique}
                        className="flex items-center gap-2 font-inter text-sm text-muted-foreground"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {technique}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Safety Warning */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 flex items-start gap-4 rounded-xl border border-accent/30 bg-accent/5 p-6"
        >
          <AlertTriangle className="h-6 w-6 flex-shrink-0 text-accent" />
          <div>
            <h4 className="mb-2 font-montserrat font-bold text-snow">
              Technical Prerequisites
            </h4>
            <p className="font-inter text-sm text-muted-foreground">
              Climbers should have prior experience with crampons, ice axes, and
              basic rope work. We provide comprehensive training at Base Camp,
              but familiarity with these tools significantly increases your
              summit chances. Consider a mountaineering course before your
              expedition.
            </p>
          </div>
        </motion.div>

        {/* Crevasse Crossing Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-6 flex items-start gap-4 rounded-xl border border-primary/30 bg-primary/5 p-6"
        >
          <Shield className="h-6 w-6 flex-shrink-0 text-primary" />
          <div>
            <h4 className="mb-2 font-montserrat font-bold text-snow">
              Crevasse Crossing Protocol
            </h4>
            <p className="font-inter text-sm text-muted-foreground">
              The approach to the headwall crosses the Imja Glacier where
              crevasses may be present. Teams rope together with 8-10 meter
              intervals. Fixed aluminum ladders may be placed over larger
              crevasses depending on conditions. Your guides will brief you on
              self-arrest and rescue techniques at Base Camp.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClimbingGuide;
