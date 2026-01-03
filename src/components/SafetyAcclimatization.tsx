import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle, Heart, ThermometerSnowflake, Wind, Brain, Shield } from "lucide-react";

const safetyTopics = [
  {
    icon: Brain,
    title: "Acute Mountain Sickness (AMS)",
    description:
      "The most common altitude illness. Symptoms include headache, nausea, fatigue, and dizziness. Our gradual ascent profile and acclimatization days minimize risk.",
    tips: [
      "Ascend no more than 400-500m per day above 3,000m",
      "Stay hydrated - drink 3-4 liters daily",
      "Descend immediately if symptoms worsen",
      "Diamox can help but is not a substitute for proper acclimatization",
    ],
  },
  {
    icon: ThermometerSnowflake,
    title: "Frostbite & Hypothermia",
    description:
      "Extreme cold at altitude combined with wind can cause rapid heat loss. Proper layering and recognizing early symptoms is critical.",
    tips: [
      "Keep extremities moving - wiggle toes and fingers",
      "Never ignore numbness or tingling",
      "Carry chemical hand/toe warmers as backup",
      "Stay dry - moisture dramatically increases heat loss",
    ],
  },
  {
    icon: Wind,
    title: "Weather Windows",
    description:
      "Himalayan weather is notoriously unpredictable. Summit attempts only proceed when conditions are safe. Flexibility in your schedule is essential.",
    tips: [
      "Be prepared for weather delays",
      "Trust your guide's summit decision",
      "High winds can make the ridge impassable",
      "Clear mornings often cloud by afternoon",
    ],
  },
  {
    icon: Heart,
    title: "Physical Preparation",
    description:
      "Success at altitude depends heavily on your fitness before arrival. Start training 3-6 months before your expedition.",
    tips: [
      "Cardio base: running, cycling, hiking with weight",
      "Leg strength: squats, lunges, step-ups",
      "Core stability for rope work",
      "Practice with your actual gear before the trip",
    ],
  },
];

const SafetyAcclimatization = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="safety"
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
            Safety & <span className="text-gradient-glacier">Acclimatization</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="mx-auto max-w-3xl font-inter text-lg text-muted-foreground">
            Your safety is our absolute priority. Understanding altitude
            challenges and preparation requirements is essential for every
            expedition member.
          </p>
        </motion.div>

        {/* Warning Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12 flex items-start gap-4 rounded-xl border border-accent/40 bg-accent/10 p-6"
        >
          <AlertTriangle className="h-8 w-8 flex-shrink-0 text-accent" />
          <div>
            <h3 className="mb-2 font-montserrat text-lg font-bold text-snow">
              High Altitude Climbing Carries Inherent Risks
            </h3>
            <p className="font-inter text-muted-foreground">
              Island Peak is a serious mountaineering objective. While
              classified as a "trekking peak," it requires technical climbing
              skills and carries real risks including falls, avalanche exposure,
              and altitude illness. All climbers must carry adequate travel and
              evacuation insurance covering helicopter rescue up to 6,500m.
            </p>
          </div>
        </motion.div>

        {/* Safety Topics Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {safetyTopics.map((topic, index) => (
            <motion.div
              key={topic.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="rounded-xl border border-border bg-card p-6 md:p-8"
            >
              <div className="mb-4 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <topic.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-montserrat text-xl font-bold text-snow">
                  {topic.title}
                </h3>
              </div>

              <p className="mb-6 font-inter text-muted-foreground leading-relaxed">
                {topic.description}
              </p>

              <ul className="space-y-2">
                {topic.tips.map((tip) => (
                  <li
                    key={tip}
                    className="flex items-start gap-3 font-inter text-sm text-muted-foreground"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    {tip}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Emergency Protocol */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 rounded-2xl border border-primary/30 bg-card p-8 md:p-12"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-montserrat text-2xl font-bold text-snow">
              Emergency Protocols
            </h3>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <h4 className="mb-2 font-montserrat font-bold text-snow">
                Satellite Communication
              </h4>
              <p className="font-inter text-sm text-muted-foreground">
                Our team carries satellite phones and GPS beacons. Daily check-ins
                with Kathmandu base ensure rapid response if needed.
              </p>
            </div>
            <div>
              <h4 className="mb-2 font-montserrat font-bold text-snow">
                Helicopter Evacuation
              </h4>
              <p className="font-inter text-sm text-muted-foreground">
                Helicopter rescue can reach most locations within 1-2 hours in
                good weather. Insurance covering evacuation is mandatory.
              </p>
            </div>
            <div>
              <h4 className="mb-2 font-montserrat font-bold text-snow">
                Medical Kit
              </h4>
              <p className="font-inter text-sm text-muted-foreground">
                Comprehensive medical kits including oxygen, Gamow bag, and
                medications for altitude illness are carried throughout.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SafetyAcclimatization;
