import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Mountain, Footprints, Clock, TrendingUp } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const itineraryData = [
  {
    day: 1,
    title: "Arrival in Kathmandu",
    altitude: "1,400m",
    distance: null,
    duration: null,
    highlights: ["Airport pickup", "Hotel transfer", "Welcome dinner"],
    description:
      "Arrive at Tribhuvan International Airport where our team will greet you. Transfer to your hotel in Thamel, Kathmandu's vibrant tourist district. Evening briefing and welcome dinner to meet your fellow climbers and expedition leaders.",
    type: "rest",
  },
  {
    day: 2,
    title: "Kathmandu - Permit Day",
    altitude: "1,400m",
    distance: null,
    duration: null,
    highlights: ["NMA permit collection", "Gear check", "Final briefing"],
    description:
      "A busy preparation day in Kathmandu. We'll visit the Nepal Mountaineering Association (NMA) to collect climbing permits, conduct a thorough gear check, and hold a detailed expedition briefing. Free time to explore Thamel for any last-minute purchases.",
    type: "rest",
  },
  {
    day: 3,
    title: "Fly Kathmandu to Lukla, Trek to Phakding",
    altitude: "2,610m",
    distance: "8 km",
    duration: "3-4 hours",
    highlights: ["Scenic mountain flight", "Tenzing-Hillary Airport", "Dudh Kosi River"],
    description:
      "Early morning flight to Lukla's Tenzing-Hillary Airport - one of the world's most dramatic landings. Begin trekking through Sherpa villages, descending alongside the roaring Dudh Kosi River to Phakding. Your first night at altitude.",
    type: "trek",
  },
  {
    day: 4,
    title: "Phakding to Namche Bazaar",
    altitude: "3,440m",
    distance: "11 km",
    duration: "5-6 hours",
    highlights: ["Hillary Suspension Bridge", "First Everest views", "Sagarmatha Park entry"],
    description:
      "Cross the famous Hillary Suspension Bridge and enter Sagarmatha National Park. The trail climbs steeply through rhododendron forests. First views of Everest appear as you approach Namche Bazaar, the bustling Sherpa capital perched in a horseshoe-shaped valley.",
    type: "trek",
  },
  {
    day: 5,
    title: "Acclimatization Day in Namche",
    altitude: "3,440m",
    distance: "Optional hike",
    duration: null,
    highlights: ["Everest View Hotel hike", "Sherpa museum", "Local market"],
    description:
      "Essential rest day following the golden rule: climb high, sleep low. Morning hike to the Everest View Hotel (3,880m) for spectacular panoramas. Afternoon to explore Namche's shops, bakeries, and the fascinating Sherpa Culture Museum.",
    type: "rest",
  },
  {
    day: 6,
    title: "Namche to Tengboche",
    altitude: "3,860m",
    distance: "10 km",
    duration: "5-6 hours",
    highlights: ["Tengboche Monastery", "Ama Dablam views", "Rhododendron forests"],
    description:
      "Traverse through beautiful forests with stunning views of Ama Dablam, Everest, and Lhotse. Arrive at Tengboche, home to the region's largest and most famous Buddhist monastery. Evening monastery visit if timing permits.",
    type: "trek",
  },
  {
    day: 7,
    title: "Tengboche to Dingboche",
    altitude: "4,410m",
    distance: "12 km",
    duration: "5-6 hours",
    highlights: ["Imja Valley entry", "Stone walls & yak pastures", "Alpine zone"],
    description:
      "Descend through forest to cross the Imja Khola, then climb through Pangboche. The landscape transitions to high alpine as you enter the Imja Valley. Dingboche sits in a wide valley with dramatic views of Island Peak and Ama Dablam.",
    type: "trek",
  },
  {
    day: 8,
    title: "Acclimatization Day in Dingboche",
    altitude: "4,410m",
    distance: "Hike to 5,000m",
    duration: "3-4 hours",
    highlights: ["Nagarjun Hill hike", "Island Peak views", "Altitude preparation"],
    description:
      "Critical acclimatization day before pushing higher. Morning hike to Nagarjun Hill (5,000m) for exceptional views of Makalu, Lhotse, and your objective - Island Peak. Afternoon rest, hydration, and equipment check.",
    type: "rest",
  },
  {
    day: 9,
    title: "Dingboche to Chhukung",
    altitude: "4,730m",
    distance: "6 km",
    duration: "3-4 hours",
    highlights: ["Last permanent settlement", "Lhotse south face", "Expedition prep"],
    description:
      "Short but scenic trek to Chhukung, the last village before Island Peak. Dominated by the massive south face of Lhotse and surrounded by glaciated peaks. Afternoon for final climbing preparation and equipment familiarization.",
    type: "trek",
  },
  {
    day: 10,
    title: "Chhukung Ri Acclimatization Climb",
    altitude: "5,550m",
    distance: "4 km",
    duration: "5-6 hours",
    highlights: ["5,550m summit", "360° panorama", "Final acclimatization"],
    description:
      "Pre-dawn start to climb Chhukung Ri (5,550m). This non-technical peak offers the ultimate acclimatization and 360-degree views of Everest, Lhotse, Makalu, Ama Dablam, Baruntse, and Island Peak. Return to Chhukung for rest.",
    type: "acclimatization",
  },
  {
    day: 11,
    title: "Chhukung to Island Peak Base Camp",
    altitude: "5,087m",
    distance: "5 km",
    duration: "4-5 hours",
    highlights: ["Imja Glacier crossing", "Base Camp setup", "Climbing briefing"],
    description:
      "Trek across the moraine and lateral edges of the Imja Glacier to Island Peak Base Camp. Afternoon used for crampon practice, rope work review, and detailed briefing for the summit attempt. Early dinner and rest.",
    type: "climb",
  },
  {
    day: 12,
    title: "Base Camp to High Camp",
    altitude: "5,600m",
    distance: "3 km",
    duration: "3-4 hours",
    highlights: ["Technical terrain begins", "High Camp setup", "Final prep"],
    description:
      "Ascend to High Camp situated on a rocky outcrop above the glacier. Crampon training session in the afternoon on nearby ice. Final equipment check, pack preparation for summit day. Very early sleep for the 1 AM wake-up call.",
    type: "climb",
  },
  {
    day: 13,
    title: "Summit Day - Island Peak (6,189m)",
    altitude: "6,189m",
    distance: "2 km",
    duration: "8-12 hours",
    highlights: ["Summit push", "Headwall ascent", "Himalayan panorama"],
    description:
      "Alpine start at 2 AM. Climb by headlamp across the crevassed glacier, using fixed ropes to ascend the 45-degree headwall. Navigate the exposed summit ridge to reach the top at sunrise. Descend to Base Camp or Chhukung. The day you've trained for!",
    type: "summit",
  },
  {
    day: 14,
    title: "Contingency / Descent to Chhukung",
    altitude: "4,730m",
    distance: "5 km",
    duration: "3-4 hours",
    highlights: ["Weather backup", "Celebration", "Rest & recovery"],
    description:
      "Built-in contingency day for weather or additional summit attempt if needed. Otherwise, rest and celebrate your achievement in Chhukung. Share stories with your team and begin the psychological transition from climber to trekker.",
    type: "rest",
  },
  {
    day: 15,
    title: "Chhukung to Namche Bazaar",
    altitude: "3,440m",
    distance: "20 km",
    duration: "6-7 hours",
    highlights: ["Long descent", "Warmer air", "Namche celebrations"],
    description:
      "Long descent day retracing your steps through Dingboche, Tengboche, and down to Namche Bazaar. Feel the air thicken and your energy return as you drop over 1,300m. Celebratory dinner in Namche.",
    type: "trek",
  },
  {
    day: 16,
    title: "Namche to Lukla",
    altitude: "2,860m",
    distance: "19 km",
    duration: "6-7 hours",
    highlights: ["Final trek day", "Sherpa farewell", "Lukla party"],
    description:
      "Final trekking day descending through familiar terrain to Lukla. Traditional farewell dinner with your Sherpa team, with dancing and celebration. Last night in the mountains before returning to Kathmandu.",
    type: "trek",
  },
  {
    day: 17,
    title: "Fly Lukla to Kathmandu",
    altitude: "1,400m",
    distance: null,
    duration: null,
    highlights: ["Mountain flight", "Kathmandu return", "Free time"],
    description:
      "Early morning flight back to Kathmandu (weather permitting - contingency days built in). Transfer to hotel, afternoon free for shopping, sightseeing, or massage to soothe tired muscles. Optional city tour available.",
    type: "travel",
  },
  {
    day: 18,
    title: "Departure Day",
    altitude: "1,400m",
    distance: null,
    duration: null,
    highlights: ["Airport transfer", "Departure", "Until next time!"],
    description:
      "Transfer to Tribhuvan International Airport for your departure flight. Take home incredible memories, new friendships, and the knowledge that you stood on the summit of Island Peak. Until the next adventure!",
    type: "departure",
  },
];

const getTypeStyles = (type: string) => {
  switch (type) {
    case "summit":
      return "border-accent/50 bg-accent/5";
    case "climb":
      return "border-primary/50 bg-primary/5";
    case "acclimatization":
      return "border-yellow-500/50 bg-yellow-500/5";
    case "rest":
      return "border-green-500/50 bg-green-500/5";
    default:
      return "border-border bg-card";
  }
};

const getTypeBadge = (type: string) => {
  const badges: Record<string, { label: string; className: string }> = {
    summit: { label: "Summit", className: "bg-accent text-accent-foreground" },
    climb: { label: "Climbing", className: "bg-primary text-primary-foreground" },
    acclimatization: { label: "Acclimatization", className: "bg-yellow-500 text-black" },
    rest: { label: "Rest Day", className: "bg-green-500 text-black" },
    trek: { label: "Trekking", className: "bg-muted text-muted-foreground" },
    travel: { label: "Travel", className: "bg-muted text-muted-foreground" },
    departure: { label: "Departure", className: "bg-muted text-muted-foreground" },
  };
  return badges[type] || badges.trek;
};

const Itinerary = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="itinerary"
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
            Day-by-Day <span className="text-gradient-glacier">Itinerary</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="mx-auto max-w-3xl font-inter text-lg text-muted-foreground">
            A comprehensive 18-day journey through the Khumbu Valley to the summit of Island Peak.
            Each day carefully planned for optimal acclimatization and success.
          </p>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 flex flex-wrap justify-center gap-3"
        >
          {["trek", "rest", "acclimatization", "climb", "summit"].map((type) => {
            const badge = getTypeBadge(type);
            return (
              <span
                key={type}
                className={`rounded-full px-3 py-1 text-xs font-medium ${badge.className}`}
              >
                {badge.label}
              </span>
            );
          })}
        </motion.div>

        {/* Accordion Itinerary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto max-w-4xl"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {itineraryData.map((day, index) => {
              const badge = getTypeBadge(day.type);
              return (
                <AccordionItem
                  key={day.day}
                  value={`day-${day.day}`}
                  className={`rounded-xl border px-4 transition-all duration-300 ${getTypeStyles(day.type)}`}
                >
                  <AccordionTrigger className="hover:no-underline py-4">
                    <div className="flex w-full flex-col items-start gap-2 text-left sm:flex-row sm:items-center sm:gap-4">
                      <div className="flex items-center gap-3">
                        <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 font-montserrat text-sm font-bold text-primary">
                          {day.day}
                        </span>
                        <h3 className="font-montserrat text-base font-semibold text-snow sm:text-lg">
                          {day.title}
                        </h3>
                      </div>
                      <div className="flex items-center gap-2 sm:ml-auto">
                        <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${badge.className}`}>
                          {badge.label}
                        </span>
                        <span className="rounded-full bg-muted px-2 py-0.5 font-montserrat text-xs font-bold text-primary">
                          {day.altitude}
                        </span>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4">
                    <div className="mt-2 space-y-4 pl-11">
                      {/* Stats Row */}
                      <div className="flex flex-wrap gap-4 text-sm">
                        {day.distance && (
                          <div className="flex items-center gap-1.5 text-muted-foreground">
                            <Footprints className="h-4 w-4 text-primary" />
                            <span>{day.distance}</span>
                          </div>
                        )}
                        {day.duration && (
                          <div className="flex items-center gap-1.5 text-muted-foreground">
                            <Clock className="h-4 w-4 text-primary" />
                            <span>{day.duration}</span>
                          </div>
                        )}
                        <div className="flex items-center gap-1.5 text-muted-foreground">
                          <TrendingUp className="h-4 w-4 text-primary" />
                          <span>{day.altitude}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="font-inter text-sm leading-relaxed text-muted-foreground">
                        {day.description}
                      </p>

                      {/* Highlights */}
                      <div className="flex flex-wrap gap-2">
                        {day.highlights.map((highlight, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-xs text-snow"
                          >
                            <MapPin className="h-3 w-3 text-primary" />
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default Itinerary;
