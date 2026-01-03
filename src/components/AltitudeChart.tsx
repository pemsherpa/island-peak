import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { TrendingUp, Mountain, Footprints } from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

const altitudeData = [
  { day: "Day 1", location: "Kathmandu", altitude: 1400, description: "Arrival and briefing", distance: 0, type: "rest" },
  { day: "Day 2", location: "Lukla", altitude: 2860, description: "Scenic flight to Lukla, trek to Phakding", distance: 8, type: "trek" },
  { day: "Day 3", location: "Phakding", altitude: 2610, description: "Trek along Dudh Kosi River", distance: 8, type: "trek" },
  { day: "Day 4", location: "Namche Bazaar", altitude: 3440, description: "Steep climb to Sherpa capital", distance: 11, type: "trek" },
  { day: "Day 5", location: "Namche (Rest)", altitude: 3440, description: "Acclimatization day", distance: 0, type: "rest" },
  { day: "Day 6", location: "Tengboche", altitude: 3860, description: "Visit famous monastery", distance: 10, type: "trek" },
  { day: "Day 7", location: "Dingboche", altitude: 4410, description: "Enter the high alpine zone", distance: 12, type: "trek" },
  { day: "Day 8", location: "Dingboche (Rest)", altitude: 4410, description: "Acclimatization day", distance: 0, type: "rest" },
  { day: "Day 9", location: "Chhukung", altitude: 4730, description: "Final village before climb", distance: 6, type: "trek" },
  { day: "Day 10", location: "Chhukung Ri", altitude: 5550, description: "Acclimatization hike", distance: 4, type: "acclimatization" },
  { day: "Day 11", location: "Base Camp", altitude: 5087, description: "Cross Imja Glacier", distance: 5, type: "climb" },
  { day: "Day 12", location: "High Camp", altitude: 5600, description: "Crampon training", distance: 3, type: "climb" },
  { day: "Day 13", location: "Summit", altitude: 6189, description: "Summit push!", distance: 2, type: "summit" },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="rounded-lg border border-border bg-card p-4 shadow-xl">
        <p className="font-montserrat text-sm font-bold text-primary">{data.day}</p>
        <p className="font-montserrat text-lg font-bold text-snow">{data.location}</p>
        <p className="font-montserrat text-2xl font-bold text-accent">{data.altitude}m</p>
        <p className="mt-1 font-inter text-sm text-muted-foreground">{data.description}</p>
        {data.distance > 0 && (
          <p className="mt-1 font-inter text-xs text-muted-foreground">
            <Footprints className="mr-1 inline h-3 w-3" />
            {data.distance} km trek
          </p>
        )}
      </div>
    );
  }
  return null;
};

const AltitudeChart = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const altitudeZones = [
    { altitude: 2500, label: "Moderate Altitude", color: "hsl(var(--primary))" },
    { altitude: 3500, label: "High Altitude", color: "hsl(var(--accent))" },
    { altitude: 5500, label: "Very High Altitude", color: "hsl(var(--destructive))" },
  ];

  const stats = [
    { label: "Starting Altitude", value: "1,400m", sublabel: "Kathmandu" },
    { label: "Summit Altitude", value: "6,189m", sublabel: "Island Peak" },
    { label: "Total Elevation Gain", value: "4,789m", sublabel: "Over 13 days" },
    { label: "Total Trek Distance", value: "~69km", sublabel: "One way" },
  ];

  return (
    <section
      id="altitude"
      ref={ref}
      className="relative bg-background py-20 md:py-32"
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
            Altitude <span className="text-gradient-glacier">Profile</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="mx-auto max-w-3xl font-inter text-lg text-muted-foreground">
            Track your elevation journey from Kathmandu to the summit. The gradual ascent
            through the Khumbu Valley ensures proper acclimatization before summit day.
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="rounded-lg border border-border bg-card p-4 text-center">
              <p className="font-montserrat text-xl font-bold text-snow md:text-2xl">{stat.value}</p>
              <p className="font-inter text-xs text-primary">{stat.label}</p>
              <p className="font-inter text-xs text-muted-foreground">{stat.sublabel}</p>
            </div>
          ))}
        </motion.div>

        {/* Chart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="rounded-2xl border border-border bg-card p-4 md:p-8"
        >
          <div className="h-[400px] w-full md:h-[500px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={altitudeData}
                margin={{ top: 20, right: 20, left: 0, bottom: 20 }}
                onMouseMove={(state: any) => {
                  if (state.activeTooltipIndex !== undefined) {
                    setActiveIndex(state.activeTooltipIndex);
                  }
                }}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <defs>
                  <linearGradient id="altitudeGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity={0.8} />
                    <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity={0.5} />
                    <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity={0.1} />
                  </linearGradient>
                  <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="hsl(var(--primary))" />
                    <stop offset="100%" stopColor="hsl(var(--accent))" />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="hsl(var(--border))"
                  vertical={false}
                />
                <XAxis
                  dataKey="day"
                  tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                  tickLine={false}
                  axisLine={{ stroke: "hsl(var(--border))" }}
                  interval={0}
                  angle={-45}
                  textAnchor="end"
                  height={60}
                />
                <YAxis
                  domain={[1000, 6500]}
                  tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                  tickLine={false}
                  axisLine={{ stroke: "hsl(var(--border))" }}
                  tickFormatter={(value) => `${value}m`}
                  width={60}
                />
                <Tooltip content={<CustomTooltip />} />
                
                {/* Altitude Zone Reference Lines */}
                {altitudeZones.map((zone) => (
                  <ReferenceLine
                    key={zone.altitude}
                    y={zone.altitude}
                    stroke={zone.color}
                    strokeDasharray="5 5"
                    strokeOpacity={0.4}
                  />
                ))}
                
                <Area
                  type="monotone"
                  dataKey="altitude"
                  stroke="url(#lineGradient)"
                  strokeWidth={3}
                  fill="url(#altitudeGradient)"
                  dot={(props: any) => {
                    const { cx, cy, payload, index } = props;
                    const isActive = index === activeIndex;
                    const isSummit = payload.type === "summit";
                    const isClimb = payload.type === "climb";
                    
                    return (
                      <circle
                        key={index}
                        cx={cx}
                        cy={cy}
                        r={isActive ? 8 : isSummit ? 10 : isClimb ? 6 : 4}
                        fill={isSummit ? "hsl(var(--accent))" : isClimb ? "hsl(var(--primary))" : "hsl(var(--snow))"}
                        stroke={isSummit ? "hsl(var(--accent))" : "hsl(var(--primary))"}
                        strokeWidth={2}
                        style={{ transition: "r 0.2s ease" }}
                      />
                    );
                  }}
                  activeDot={{
                    r: 10,
                    fill: "hsl(var(--accent))",
                    stroke: "hsl(var(--snow))",
                    strokeWidth: 3,
                  }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Legend */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 border-t border-border pt-6 md:gap-8">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-snow" />
              <span className="font-inter text-xs text-muted-foreground">Trek Day</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-primary" />
              <span className="font-inter text-xs text-muted-foreground">Climbing Day</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded-full bg-accent" />
              <span className="font-inter text-xs text-muted-foreground">Summit</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-0.5 w-6 border-t-2 border-dashed border-primary/50" />
              <span className="font-inter text-xs text-muted-foreground">High Altitude Zone (3,500m+)</span>
            </div>
          </div>
        </motion.div>

        {/* Altitude Zones Explanation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 grid gap-4 md:grid-cols-3"
        >
          <div className="rounded-xl border border-primary/30 bg-primary/5 p-6">
            <div className="mb-3 flex items-center gap-3">
              <Mountain className="h-5 w-5 text-primary" />
              <h4 className="font-montserrat font-bold text-snow">Moderate Altitude</h4>
            </div>
            <p className="font-inter text-sm text-muted-foreground">
              <strong className="text-primary">1,500m - 2,500m:</strong> Most people feel normal. 
              Light exercise helps acclimatization. Stay hydrated.
            </p>
          </div>
          <div className="rounded-xl border border-accent/30 bg-accent/5 p-6">
            <div className="mb-3 flex items-center gap-3">
              <TrendingUp className="h-5 w-5 text-accent" />
              <h4 className="font-montserrat font-bold text-snow">High Altitude</h4>
            </div>
            <p className="font-inter text-sm text-muted-foreground">
              <strong className="text-accent">2,500m - 5,500m:</strong> Acclimatization becomes critical. 
              Ascend gradually, watch for AMS symptoms.
            </p>
          </div>
          <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-6">
            <div className="mb-3 flex items-center gap-3">
              <Mountain className="h-5 w-5 text-destructive" />
              <h4 className="font-montserrat font-bold text-snow">Very High Altitude</h4>
            </div>
            <p className="font-inter text-sm text-muted-foreground">
              <strong className="text-destructive">5,500m+:</strong> Summit zone. Maximum effort required. 
              Oxygen levels at ~50% of sea level.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AltitudeChart;
