import { Star, Quote } from "lucide-react";
import { Card } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "أحمد محمد",
      location: "فرع شبرا",
      rating: 5,
      text: "تجربة رائعة من البداية للنهاية. الأطباء محترفين جداً والنتيجة فاقت توقعاتي. شكراً لفريق عيادة الفايز",
    },
    {
      name: "سارة أحمد",
      location: "فرع فيصل",
      rating: 5,
      text: "أفضل عيادة أسنان زرتها. التعامل راقي جداً والمتابعة مستمرة. التقويم كان مريح جداً والنتيجة مذهلة",
    },
    {
      name: "محمود حسن",
      location: "فرع شبرا",
      rating: 5,
      text: "نظام التقسيط المرن ساعدني كتير. الخدمة ممتازة والعيادة نظيفة جداً. أنصح بيها بشدة",
    },
    {
      name: "نور الدين",
      location: "فرع فيصل",
      rating: 5,
      text: "الدكاترة شرحوا كل حاجة بالتفصيل وما كانش في أي مفاجآت. النتيجة رهيبة والسعر معقول",
    },
    {
      name: "هدى عبدالله",
      location: "فرع شبرا",
      rating: 5,
      text: "كنت خايفة من التقويم بس الدكتور طمني وفعلاً ما حسيت بأي ألم. المكان مريح والمتابعة ممتازة",
    },
    {
      name: "كريم إبراهيم",
      location: "فرع فيصل",
      rating: 5,
      text: "أفضل قرار اتخذته! التقويم غيّر شكل أسناني تماماً. فريق محترف وخدمة من الدرجة الأولى",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 font-cairo">
            آراء عملائنا
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-cairo">
            اعرف تجارب مرضانا معنا
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
            >
              <Quote className="absolute top-4 left-4 w-12 h-12 text-primary/10" />
              
              <div className="relative z-10">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-card-foreground font-cairo mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                <div className="border-t border-border pt-4">
                  <p className="font-bold text-card-foreground font-cairo">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground font-cairo">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
