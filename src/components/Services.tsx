import { Stethoscope, Leaf, Brain, Activity, Baby, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "Chronic Disease Management",
      description: "Specialized treatment for long-term conditions with holistic homeopathic remedies.",
      color: "text-primary"
    },
    {
      icon: Leaf,
      title: "Natural Healing",
      description: "Pure homeopathic medicines derived from natural sources for gentle, effective treatment.",
      color: "text-secondary"
    },
    {
      icon: Brain,
      title: "Mental Health",
      description: "Comprehensive care for stress, anxiety, depression, and other psychological conditions.",
      color: "text-accent"
    },
    {
      icon: Activity,
      title: "Lifestyle Diseases",
      description: "Treatment for diabetes, hypertension, thyroid disorders, and metabolic conditions.",
      color: "text-primary"
    },
    {
      icon: Baby,
      title: "Pediatric Care",
      description: "Safe and gentle homeopathic treatment for infants, children, and adolescents.",
      color: "text-secondary"
    },
    {
      icon: Shield,
      title: "Preventive Healthcare",
      description: "Build immunity and prevent diseases through constitutional homeopathic treatment.",
      color: "text-accent"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Specialities
          </h2>
          <p className="text-lg text-muted-foreground">
            We offer comprehensive homeopathic treatment for a wide range of conditions, 
            following the principles of Classical Homeopathy for complete healing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="border-2 hover:border-primary/50 transition-all hover:shadow-lg group"
            >
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${service.color}`}>
                  <service.icon className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Why Choose Homeopathy?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="grid md:grid-cols-2 gap-4">
                <li className="flex items-start space-x-2">
                  <span className="text-primary">✓</span>
                  <span className="text-muted-foreground">Safe with no side effects</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary">✓</span>
                  <span className="text-muted-foreground">Treats root cause, not symptoms</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary">✓</span>
                  <span className="text-muted-foreground">Suitable for all age groups</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary">✓</span>
                  <span className="text-muted-foreground">Non-invasive treatment</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary">✓</span>
                  <span className="text-muted-foreground">Boosts natural immunity</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary">✓</span>
                  <span className="text-muted-foreground">Cost-effective long-term solution</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
