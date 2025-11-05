import { MapPin, Phone, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Branches = () => {
  const branches = [
    {
      name: "فرع شبرا مصر",
      address: "٥٩ شارع شبرا - بجوار رنين محطة مسرة",
      details: "أعلى معمل البرج - الدور الخامس",
      phone: "01289666684",
      hours: "السبت - الخميس: 10 صباحاً - 10 مساءً",
    },
    {
      name: "فرع فيصل",
      address: "١٤٣ شارع المنشية - الطوابق",
      details: "فيصل - الجيزة",
      phone: "01222519320",
      hours: "السبت - الخميس: 10 صباحاً - 10 مساءً",
    },
  ];

  return (
    <section id="branches" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-cairo">
            فروعنا 📍
          </h2>
          <p className="text-xl text-muted-foreground font-cairo">
            اختر الفرع الأقرب ليك واحجز موعدك
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {branches.map((branch, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-card"
            >
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-secondary rounded-2xl mb-4 shadow-soft">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-card-foreground mb-4 font-cairo">
                  {branch.name}
                </h3>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div className="font-cairo text-card-foreground">
                    <p className="font-semibold">{branch.address}</p>
                    <p className="text-muted-foreground text-sm">{branch.details}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <a
                    href={`tel:${branch.phone}`}
                    className="font-cairo text-card-foreground hover:text-primary transition-colors font-bold text-lg"
                    dir="ltr"
                  >
                    {branch.phone}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                  <p className="font-cairo text-muted-foreground">{branch.hours}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  className="flex-1 font-cairo"
                  onClick={() => window.open(`https://wa.me/2${branch.phone}`, '_blank')}
                >
                  <Phone className="ml-2" />
                  احجز عبر واتساب
                </Button>
                <Button
                  variant="secondary"
                  className="flex-1 font-cairo"
                  onClick={() => window.open(`tel:${branch.phone}`)}
                >
                  اتصل الآن
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground font-cairo text-lg">
            للحجز والاستعلام، تواصل معنا على أي من الفرعين
          </p>
        </div>
      </div>
    </section>
  );
};

export default Branches;
