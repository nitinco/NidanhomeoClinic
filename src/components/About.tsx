import { Heart, Award, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About NIDAN
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            <span className="font-semibold text-primary">"NIDAN"</span> means "to diagnose disease", a term from the Indian medical system{" "}
            <span className="italic">"Ayurveda"</span>. We believe in curing the sick until complete restoration of health, 
            which is our only aim - to cure the individual until complete annihilation of sickness towards total health.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="border-2 border-primary/20 hover:border-primary transition-colors">
            <CardContent className="pt-6 text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Holistic Approach</h3>
              <p className="text-muted-foreground">
                We adopt a path of successful diagnosis & treatment with basic qualities of being unbiased, cordial, 
                and a good listener - accountable and honest as physician to patient.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-secondary/20 hover:border-secondary transition-colors">
            <CardContent className="pt-6 text-center space-y-4">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                <Award className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Expert Care</h3>
              <p className="text-muted-foreground">
                Dr. Sudhanshu Sharma is an internationally acclaimed homeopath of Rajasthan, India, 
                providing world-class homeopathic treatment.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-accent/20 hover:border-accent transition-colors">
            <CardContent className="pt-6 text-center space-y-4">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Patient-Centered</h3>
              <p className="text-muted-foreground">
                Based in Jaipur, the Pink City of India, we provide complete knowledge regarding your illness 
                based on Classical Homeopathy principles.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-3xl mx-auto bg-muted/30 rounded-2xl p-8 border border-border">
          <p className="text-center text-lg text-muted-foreground italic">
            "Homeopathy believes in treatment very much similar to the path of mindfulness and natural healing - 
            focusing on the individual as a whole, not just the disease."
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
