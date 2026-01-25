import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "260971234567";

const Hero = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hello! I'd like to place an order from Maajabu Restaurant."
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 overlay-gradient" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/15 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 container-custom text-center px-4">
        <div className="max-w-3xl mx-auto animate-fade-up">
          <span className="inline-block text-accent font-medium text-sm md:text-base tracking-wider uppercase mb-4">
            Welcome to Luanshya's Finest
          </span>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-cream-light leading-tight mb-6">
            Experience the
            <span className="block text-accent">Taste of Zambia</span>
          </h1>

          <p className="text-cream/80 text-lg md:text-xl max-w-xl mx-auto mb-8 leading-relaxed">
            Discover authentic Zambian cuisine and international flavors at Maajabu Restaurant. 
            Fresh ingredients, traditional recipes, unforgettable experiences.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="btn-accent text-base px-8 h-12 gap-2 group"
            >
              <Link to="/menu">
                View Menu
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="btn-outline-light text-base px-8 h-12 gap-2"
              onClick={handleWhatsAppClick}
            >
              <MessageCircle className="h-4 w-4" />
              Order on WhatsApp
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-cream/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-cream/50 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
