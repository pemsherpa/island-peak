import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ClimbOverview from "@/components/ClimbOverview";
import RouteMap from "@/components/RouteMap";
import ClimbingGuide from "@/components/ClimbingGuide";
import GearChecklist from "@/components/GearChecklist";
import PermitsLogistics from "@/components/PermitsLogistics";
import Gallery from "@/components/Gallery";
import SafetyAcclimatization from "@/components/SafetyAcclimatization";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <ClimbOverview />
        <RouteMap />
        <ClimbingGuide />
        <GearChecklist />
        <PermitsLogistics />
        <Gallery />
        <SafetyAcclimatization />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
