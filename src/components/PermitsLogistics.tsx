import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, Landmark, MapPin, Wallet, Clock, Users } from "lucide-react";

const permits = [
  {
    icon: FileText,
    title: "NMA Climbing Permit",
    cost: "$350 USD",
    description:
      "Required for all trekking peaks. Issued by Nepal Mountaineering Association through licensed agencies.",
    processing: "2-3 days in Kathmandu",
  },
  {
    icon: Landmark,
    title: "Sagarmatha National Park",
    cost: "NPR 3,000 (~$23 USD)",
    description:
      "Entry permit to the world's highest national park. Covers the entire Khumbu region.",
    processing: "Same day at park entrance",
  },
  {
    icon: MapPin,
    title: "TIMS Card",
    cost: "NPR 2,000 (~$15 USD)",
    description:
      "Trekkers' Information Management System card for tracking and safety.",
    processing: "1 day in Kathmandu",
  },
];

const logistics = [
  {
    icon: MapPin,
    title: "Region",
    value: "Solukhumbu District",
    detail: "Sagarmatha Zone, Province 1",
  },
  {
    icon: Users,
    title: "Team Size",
    value: "4-8 Climbers",
    detail: "Plus guides and support staff",
  },
  {
    icon: Clock,
    title: "Best Seasons",
    value: "Spring & Autumn",
    detail: "April-May / September-November",
  },
  {
    icon: Wallet,
    title: "Budget Range",
    value: "$2,500-4,500",
    detail: "Depending on services included",
  },
];

const PermitsLogistics = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="permits"
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
            Permits & <span className="text-gradient-glacier">Logistics</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="mx-auto max-w-3xl font-inter text-lg text-muted-foreground">
            Navigate the paperwork and planning. We handle most permit
            processing, but understanding the requirements helps you prepare.
          </p>
        </motion.div>

        {/* Permits Grid */}
        <div className="mb-12">
          <h3 className="mb-6 text-center font-montserrat text-xl font-bold text-snow md:text-2xl">
            Required Permits
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            {permits.map((permit, index) => (
              <motion.div
                key={permit.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 card-glow"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <permit.icon className="h-6 w-6 text-primary" />
                </div>

                <h4 className="mb-2 font-montserrat text-lg font-bold text-snow">
                  {permit.title}
                </h4>

                <p className="mb-4 font-montserrat text-2xl font-bold text-accent">
                  {permit.cost}
                </p>

                <p className="mb-4 font-inter text-sm text-muted-foreground">
                  {permit.description}
                </p>

                <div className="flex items-center gap-2 rounded-lg bg-muted/50 px-3 py-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span className="font-inter text-xs text-muted-foreground">
                    {permit.processing}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Logistics Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="rounded-2xl border border-border bg-card p-8 md:p-12"
        >
          <h3 className="mb-8 text-center font-montserrat text-xl font-bold text-snow md:text-2xl">
            Expedition Logistics
          </h3>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {logistics.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="text-center"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <p className="font-montserrat text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  {item.title}
                </p>
                <p className="mt-1 font-montserrat text-lg font-bold text-snow">
                  {item.value}
                </p>
                <p className="mt-1 font-inter text-xs text-muted-foreground">
                  {item.detail}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-12 grid gap-6 border-t border-border pt-8 md:grid-cols-2">
            <div>
              <h4 className="mb-3 font-montserrat font-bold text-snow">
                Getting There
              </h4>
              <p className="font-inter text-sm text-muted-foreground leading-relaxed">
                Fly Kathmandu → Lukla (35 min scenic flight). The Tenzing-Hillary
                Airport is one of the world's most challenging airstrips.
                Weather delays are common; build buffer days into your itinerary.
              </p>
            </div>
            <div>
              <h4 className="mb-3 font-montserrat font-bold text-snow">
                Local Support
              </h4>
              <p className="font-inter text-sm text-muted-foreground leading-relaxed">
                Porters carry loads up to Chhukung (max 25kg per porter). Above
                Base Camp, you carry your own summit pack. Sherpa guides manage
                fixed ropes, camps, and provide crucial support throughout.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PermitsLogistics;
