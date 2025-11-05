import { Target, Eye, Award, Users, Clock, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import equipmentImage from "@/assets/equipment.jpg";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "رؤيتنا",
      description: "أن نكون الخيار الأول في مجال طب الأسنان من خلال تقديم أعلى معايير الجودة والرعاية الصحية",
    },
    {
      icon: Eye,
      title: "رسالتنا",
      description: "تقديم خدمات طبية متميزة في تقويم وتجميل الأسنان بأحدث التقنيات وأفضل الأسعار",
    },
    {
      icon: Award,
      title: "قيمنا",
      description: "الاحترافية، الأمانة، الجودة، والاهتمام براحة المريض في المقام الأول",
    },
  ];

  const stats = [
    { number: "10+", label: "سنوات خبرة", icon: Clock },
    { number: "5000+", label: "مريض سعيد", icon: Users },
    { number: "100%", label: "رضا العملاء", icon: Heart },
    { number: "2", label: "فرع بالقاهرة", icon: Award },
  ];

  return (
    <div className="min-h-screen font-cairo bg-background" dir="rtl">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 font-cairo">
              من نحن
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-cairo leading-relaxed">
              عيادة الفايز لطب الأسنان هي مركز طبي متخصص في تقويم وتجميل الأسنان، 
              نقدم خدماتنا بأعلى معايير الجودة العالمية منذ أكثر من 10 سنوات
            </p>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {values.map((value, index) => (
              <Card 
                key={index}
                className="p-8 text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-2"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-2xl mb-6 shadow-soft">
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-card-foreground font-cairo">
                  {value.title}
                </h3>
                <p className="text-muted-foreground font-cairo leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 lg:order-1">
              <img
                src={equipmentImage}
                alt="عيادة الفايز"
                className="rounded-2xl shadow-elegant w-full h-auto"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground font-cairo">
                لماذا عيادة الفايز؟
              </h2>
              <div className="space-y-4 text-muted-foreground font-cairo text-lg leading-relaxed">
                <p>
                  في عيادة الفايز، نؤمن بأن الابتسامة الجميلة هي حق للجميع. لذلك نوفر 
                  أحدث تقنيات تقويم وتجميل الأسنان بأسعار تنافسية ونظام تقسيط مرن.
                </p>
                <p>
                  فريقنا الطبي المتخصص يضم نخبة من أفضل أطباء الأسنان الحاصلين على 
                  أعلى الشهادات والخبرات في مجال التقويم والتجميل.
                </p>
                <p>
                  نستخدم أحدث أجهزة التعقيم والتطهير لضمان سلامة مرضانا، ونلتزم بأعلى 
                  معايير الجودة العالمية في جميع خدماتنا الطبية.
                </p>
                <p>
                  مع عيادة الفايز، أنت في أيدٍ أمينة. نحن هنا لنمنحك الابتسامة التي 
                  تستحقها بكل ثقة وأمان.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2 font-cairo">
                  {stat.number}
                </div>
                <div className="text-lg text-white/90 font-cairo">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default About;
