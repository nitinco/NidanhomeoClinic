import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-clinic.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Nidan Homeopathy Clinic"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            NIDAN
          </h1>
          <p className="text-2xl md:text-3xl font-light">
            Homeopathy Speciality Clinic
          </p>
          <p className="text-xl md:text-2xl italic font-light opacity-90">
            "We treat, God cures."
          </p>
          <div className="pt-8 space-y-4">
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Experience holistic healing with Dr. Sudhanshu Sharma, an internationally acclaimed homeopath based in Jaipur, India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="bg-white text-primary hover:bg-white/90 text-lg px-8"
              >
                Book Consultation
              </Button>
              <Button 
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                size="lg"
                variant="outline"
                className="border-2 border-white text-black hover:bg-white/10 text-lg px-8"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
