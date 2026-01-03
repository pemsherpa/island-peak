import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ClimbOverview from "@/components/ClimbOverview";
import AltitudeChart from "@/components/AltitudeChart";
import RouteMap from "@/components/RouteMap";
import Itinerary from "@/components/Itinerary";
import ClimbingGuide from "@/components/ClimbingGuide";
import GearChecklist from "@/components/GearChecklist";
import PermitsLogistics from "@/components/PermitsLogistics";
import Gallery from "@/components/Gallery";
import SafetyAcclimatization from "@/components/SafetyAcclimatization";
import Footer from "@/components/Footer";
import WhatsAppFloater from "@/components/WhatsAppFloater";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <ClimbOverview />
        <AltitudeChart />
        <RouteMap />
        <Itinerary />
        <ClimbingGuide />
        <GearChecklist />
        <PermitsLogistics />
        <Gallery />
        <SafetyAcclimatization />
      </main>
      <Footer />
      <WhatsAppFloater />
    </div>
  );
};

export default Index;
