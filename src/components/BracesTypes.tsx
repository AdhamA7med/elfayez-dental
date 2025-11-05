import { Card } from "@/components/ui/card";
import metalBraces from "@/assets/braces-metal.jpg";
import clearBraces from "@/assets/braces-clear.jpg";

const BracesTypes = () => {
  const types = [
    {
      title: "تقويم معدني",
      image: metalBraces,
      description: "التقويم التقليدي الأكثر فعالية",
      features: ["قوي ومتين", "نتائج سريعة", "الأكثر اقتصادية"],
    },
    {
      title: "تقويم شفاف",
      image: clearBraces,
      description: "تقويم غير مرئي تقريباً",
      features: ["مظهر جمالي", "مريح للاستخدام", "فعال جداً"],
    },
    {
      title: "تقويم ثابت",
      image: metalBraces,
      description: "يبقى في مكانه طوال فترة العلاج",
      features: ["علاج مستمر", "لا يحتاج إزالة", "نتائج مضمونة"],
    },
    {
      title: "تقويم متحرك",
      image: clearBraces,
      description: "يمكن إزالته عند الحاجة",
      features: ["مرونة في الاستخدام", "سهل التنظيف", "مناسب لحالات معينة"],
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 font-cairo">
            أنواع التقويم المتاحة
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-cairo">
            اختر النوع المناسب لك من بين أحدث أنواع تقويم الأسنان
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {types.map((type, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-card"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={type.image}
                  alt={type.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 right-4 text-2xl font-bold text-white font-cairo">
                  {type.title}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground mb-4 font-cairo">
                  {type.description}
                </p>
                <ul className="space-y-2">
                  {type.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-card-foreground font-cairo"
                    >
                      <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-8 md:mt-12 text-center">
          <div className="bg-gradient-primary text-primary-foreground rounded-2xl p-6 md:p-8 max-w-3xl mx-auto shadow-elegant">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 font-cairo">
              ما الي هتحصل عليه في جلسة الكشف المجانية؟
            </h3>
            <ul className="text-right space-y-2 md:space-y-3 text-base md:text-lg font-cairo">
              <li>✅ معرفة خطة العلاج الكاملة</li>
              <li>✅ مشاهدة صور لحالات قبل وبعد شبه أسنانك</li>
              <li>✅ معرفة المدة المتوقعة للعلاج</li>
              <li>✅ استشارة مجانية مع أفضل الأطباء</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BracesTypes;
