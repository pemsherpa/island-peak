import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WhatsAppFloater = () => {
  const phoneNumber = "9779843190356";
  const message = encodeURIComponent(
    "Hello! I'm interested in the Island Peak Expedition. Can you provide more details?"
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 0.3, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-shadow hover:shadow-xl hover:shadow-[#25D366]/30"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" fill="white" />
      
      {/* Pulse ring animation */}
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-40" />
    </motion.a>
  );
};

export default WhatsAppFloater;
