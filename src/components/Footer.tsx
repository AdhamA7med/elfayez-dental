import { Phone, MapPin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-hero text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4 font-cairo">
              عيادة الفايز لطب الأسنان
            </h3>
            <p className="text-white/90 font-cairo mb-4">
              نقدم أفضل خدمات تقويم وتجميل الأسنان بأحدث التقنيات وأفضل الأطباء المتخصصين
            </p>
            <p className="text-white/80 font-cairo italic">
              #you_deserve_our_care
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-cairo">تواصل معنا</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <div className="font-cairo">
                  <p className="font-semibold">فرع شبرا</p>
                  <a href="tel:01289666684" className="hover:text-white/80" dir="ltr">
                    01289666684
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <div className="font-cairo">
                  <p className="font-semibold">فرع فيصل</p>
                  <a href="tel:01222519320" className="hover:text-white/80" dir="ltr">
                    01222519320
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-cairo">فروعنا</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <p className="text-sm font-cairo">
                  ٥٩ شارع شبرا - بجوار رنين محطة مسرة - أعلى معمل البرج الدور الخامس
                </p>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <p className="text-sm font-cairo">
                  ١٤٣ شارع المنشية - الطوابق - فيصل
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/80 font-cairo">
            © 2024 El Fayez Dental Clinic. جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
