import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Testimonials from "@/components/Testimonials";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const TestimonialsPage = () => {
  return (
    <div className="min-h-screen font-cairo bg-background" dir="rtl">
      <Header />
      
      <div className="pt-32 pb-12 bg-gradient-subtle">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 font-cairo">
            ما يقوله عملاؤنا عنا
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-cairo mb-8 max-w-3xl mx-auto">
            نفخر بثقة عملائنا ونسعد بمشاركتهم تجاربهم الإيجابية معنا
          </p>
          <Button
            size="lg"
            onClick={() => window.open('https://wa.me/201289666684', '_blank')}
            className="font-cairo"
          >
            <Phone className="ml-2" />
            كن واحد من عملائنا السعداء
          </Button>
        </div>
      </div>

      <Testimonials />
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default TestimonialsPage;
