import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "201289666684"; // فرع شبرا

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-elegant hover:shadow-soft transition-all duration-300 hover:scale-110 group"
      aria-label="تواصل عبر واتساب"
    >
      <MessageCircle className="w-8 h-8" />
      <span className="absolute right-20 bg-card text-card-foreground px-4 py-2 rounded-lg shadow-soft opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap font-cairo text-sm">
        تواصل معنا
      </span>
    </button>
  );
};

export default WhatsAppButton;
