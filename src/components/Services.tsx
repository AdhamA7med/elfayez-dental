import { Sparkles, Award, Clock, CreditCard } from "lucide-react";
import { Card } from "@/components/ui/card";

const Services = () => {
  const features = [
    {
      icon: Sparkles,
      title: "أحدث أجهزة التعقيم",
      description: "نستخدم أحدث تقنيات التعقيم لضمان سلامتك",
    },
    {
      icon: Award,
      title: "أطباء متخصصين",
      description: "فريق من أفضل الأطباء المتخصصين في تقويم الأسنان",
    },
    {
      icon: CreditCard,
      title: "أفضل الخامات - وأقل تكلفة",
      description: "خامات عالمية بأسعار تنافسية ونظام تقسيط مريح",
    },
    {
      icon: Clock,
      title: "متابعة دورية",
      description: "متابعة مستمرة طول فترة التقويم لضمان أفضل النتائج",
    },
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-cairo">
            ليه تختار مراكزنا؟ 🫣
          </h2>
          <p className="text-xl text-muted-foreground font-cairo">
            نوفر لك أفضل خدمة طبية بأعلى معايير الجودة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
