import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, AlertCircle } from "lucide-react";

const gearCategories = [
  {
    title: "Personal Gear",
    essential: true,
    items: [
      { name: "Expedition down jacket (-20°C rated)", required: true },
      { name: "Gore-Tex shell jacket & pants", required: true },
      { name: "Fleece mid-layers (2-3)", required: true },
      { name: "Thermal base layers (merino/synthetic)", required: true },
      { name: "Down pants for summit", required: true },
      { name: "Buff/balaclava", required: true },
      { name: "Glacier glasses (Category 4)", required: true },
      { name: "Ski goggles for summit", required: true },
      { name: "Expedition mitts & liner gloves", required: true },
      { name: "Headlamp + spare batteries", required: true },
    ],
  },
  {
    title: "Climbing Hardware",
    essential: true,
    items: [
      { name: "Mountaineering harness", required: true },
      { name: "Jumar/Ascender (handled)", required: true },
      { name: "Figure-8 or ATC belay device", required: true },
      { name: "Locking carabiners (4-6)", required: true },
      { name: "120cm sling (2-3)", required: true },
      { name: "Prusik cord (6mm, 1.5m)", required: true },
      { name: "Ice axe (50-60cm)", required: true },
      { name: "Crampons (12-point, anti-balling)", required: true },
      { name: "Climbing helmet", required: true },
      { name: "Trekking poles", required: false },
    ],
  },
  {
    title: "Footwear",
    essential: true,
    items: [
      { name: "Double plastic/insulated boots", required: true },
      { name: "High-altitude boot liners", required: true },
      { name: "Approach trekking boots", required: true },
      { name: "Camp sandals/shoes", required: false },
      { name: "Gaiters", required: true },
      { name: "Warm wool/synthetic socks (5+ pairs)", required: true },
    ],
  },
  {
    title: "Camping & Supplies",
    essential: false,
    items: [
      { name: "4-season sleeping bag (-25°C)", required: true },
      { name: "Sleeping bag liner", required: false },
      { name: "Insulated sleeping pad", required: true },
      { name: "Insulated water bottles (2x 1L)", required: true },
      { name: "Thermos (1L)", required: false },
      { name: "Duffel bag (70-90L)", required: true },
      { name: "Daypack/summit pack (30-40L)", required: true },
      { name: "Pack cover (waterproof)", required: true },
    ],
  },
];

const GearChecklist = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="gear"
      ref={ref}
      className="relative bg-slate-deep py-24 md:py-32"
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
            Gear <span className="text-gradient-glacier">Checklist</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="mx-auto max-w-3xl font-inter text-lg text-muted-foreground">
            Quality gear is non-negotiable at 6,000 meters. This comprehensive
            list covers everything you'll need for a safe and successful summit.
          </p>
        </motion.div>

        {/* Gear Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {gearCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-xl border border-border bg-card p-6"
            >
              <div className="mb-6 flex items-center justify-between">
                <h3 className="font-montserrat text-xl font-bold text-snow">
                  {category.title}
                </h3>
                {category.essential && (
                  <span className="rounded-full bg-accent/10 px-3 py-1 font-montserrat text-xs font-bold uppercase tracking-wider text-accent">
                    Essential
                  </span>
                )}
              </div>

              <ul className="space-y-3">
                {category.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-start gap-3"
                  >
                    <div
                      className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded ${
                        item.required
                          ? "bg-primary/20 text-primary"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      <Check className="h-3 w-3" />
                    </div>
                    <span
                      className={`font-inter text-sm ${
                        item.required
                          ? "text-snow"
                          : "text-muted-foreground"
                      }`}
                    >
                      {item.name}
                      {!item.required && (
                        <span className="ml-2 text-xs text-muted-foreground">
                          (optional)
                        </span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Rental Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex items-start gap-4 rounded-xl border border-primary/30 bg-primary/5 p-6"
        >
          <AlertCircle className="h-6 w-6 flex-shrink-0 text-primary" />
          <div>
            <h4 className="mb-2 font-montserrat font-bold text-snow">
              Gear Rental Available in Kathmandu
            </h4>
            <p className="font-inter text-sm text-muted-foreground">
              Quality climbing gear can be rented from reputable shops in
              Thamel, Kathmandu. We recommend purchasing personal items (boots,
              harness) for proper fit, but hardware like ascenders and ice axes
              can be rented. Allow time for fitting and testing before departure
              to Lukla.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GearChecklist;
