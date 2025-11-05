import Hero from "@/components/Hero";
import Services from "@/components/Services";
import BracesTypes from "@/components/BracesTypes";
import Branches from "@/components/Branches";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen font-cairo" dir="rtl">
      <Hero />
      <Services />
      <BracesTypes />
      <Branches />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
