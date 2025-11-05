import { Sparkles, Award, Clock, CreditCard, Shield, Users, Stethoscope, HeartPulse } from "lucide-react";
import { Card } from "@/components/ui/card";

const Services = () => {
  const features = [
    {
      icon: Sparkles,
      title: "أحدث أجهزة التعقيم",
      description: "نستخدم أحدث تقنيات التعقيم والتطهير لضمان سلامتك الكاملة",
    },
    {
      icon: Award,
      title: "أطباء متخصصين",
      description: "فريق من أفضل الأطباء المتخصصين في تقويم وتجميل الأسنان",
    },
    {
      icon: CreditCard,
      title: "تقسيط مريح",
      description: "خامات عالمية بأسعار تنافسية مع نظام تقسيط مرن ومريح",
    },
    {
      icon: Clock,
      title: "متابعة دورية مستمرة",
      description: "متابعة دقيقة طوال فترة التقويم لضمان أفضل النتائج",
    },
    {
      icon: Shield,
      title: "ضمان الجودة",
      description: "نضمن لك أعلى معايير الجودة في الخدمة والنتائج",
    },
    {
      icon: Users,
      title: "خدمة عملاء متميزة",
      description: "فريق خدمة عملاء محترف متواجد للرد على استفساراتك",
    },
    {
      icon: Stethoscope,
      title: "تشخيص دقيق",
      description: "فحص شامل وتشخيص دقيق لحالتك قبل البدء في العلاج",
    },
    {
      icon: HeartPulse,
      title: "راحة المريض أولاً",
      description: "نهتم براحتك ونوفر بيئة علاجية مريحة ومطمئنة",
    },
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 font-cairo">
            ليه تختار مراكزنا؟
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-cairo">
            نوفر لك أفضل خدمة طبية بأعلى معايير الجودة
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-card border-border"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-4 shadow-soft">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-card-foreground font-cairo">
                {feature.title}
              </h3>
              <p className="text-muted-foreground font-cairo">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
