import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import heroImage from "@/assets/hero-dental.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="El Fayez Dental Clinic"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12 md:py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-6 md:space-y-8 animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white font-cairo leading-tight">
            عيادة الفايز لطب الأسنان
          </h1>
          <p className="text-lg md:text-2xl lg:text-3xl text-white/90 font-cairo font-semibold">
            El Fayez Dental Clinic
          </p>
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20 shadow-elegant">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4 font-cairo">
              أسنانك محتاجة تقويم؟
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-white/95 mb-4 md:mb-6 font-cairo">
              سهلنالك تقويم أسنانك دلوقتي بقى بالتقسيط
            </p>
            <div className="bg-secondary/90 text-secondary-foreground rounded-xl p-4 md:p-6 mb-4 md:mb-6">
              <p className="text-xl md:text-2xl font-bold mb-2 font-cairo">
                جلسة كشف تقويم مجاناً
              </p>
              <p className="text-base md:text-lg font-cairo">
                احجز جلستك المجانية لو هتركب معانا
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => window.open('https://wa.me/201289666684', '_blank')}
              className="font-cairo"
            >
              <Phone className="ml-2" />
              احجز موعدك الآن
            </Button>
            <Button 
              variant="outline"
              size="lg"
              onClick={() => document.getElementById('branches')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white/90 hover:bg-white text-primary border-white font-cairo font-bold"
            >
              فروعنا
            </Button>
          </div>

          <p className="text-white/80 text-lg font-cairo italic">
            #you_deserve_our_care
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
