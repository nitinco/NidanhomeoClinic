import { Ban, Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const LifeAttitude = () => {
  const donts = [
    "Never remain empty stomach for longer hours (more than 3-4 hours). Eat anything like roasted/sprouted whole gram, roasted rice, fruits, salads (better in day hours), but not juice alone.",
    "Never try to satisfy your hunger with junk or cold stored meals",
    "Never eat more in late hours of night (means your dinner should always be less than the diet at lunch in respect of bread/chapatis etc.)",
    "Avoid taking these frequently: pickles, refined flour (maida), milk products especially ice cream",
    "Avoid excessive tea, coffee, and carbonated drinks",
    "Avoid smoking and alcohol consumption",
    "Don't skip breakfast - it's the most important meal of the day"
  ];

  const dos = [
    "Drink at least 8-10 glasses of water daily",
    "Include fresh fruits and vegetables in your daily diet",
    "Eat seasonal fruits and vegetables for maximum nutrition",
    "Practice portion control - eat until 80% full",
    "Maintain regular meal times",
    "Include whole grains, pulses, and fiber-rich foods",
    "Exercise regularly - at least 30 minutes daily",
    "Get adequate sleep (7-8 hours) at regular times",
    "Practice stress management through yoga or meditation",
    "Maintain a positive attitude towards life",
    "Regular health check-ups for preventive care"
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-24">
        <Button asChild variant="outline" className="mb-8">
          <Link to="/">← Back to Home</Link>
        </Button>

        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Know Your Health with Right Diet
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Diet is an essential part of being healthy. It's always better to modulate diet according to age, changes in life, and of course according to illness. Here are some basic guidelines to follow for a healthy lifestyle.
            </p>
          </div>

          <Card className="mb-8 bg-secondary/5 border-secondary/20">
            <CardContent className="pt-6">
              <p className="text-center text-muted-foreground">
                <span className="font-semibold">Important Note:</span> These are general guidelines. For specific dietary recommendations based on your health condition, please consult with us.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Don'ts Section */}
            <Card className="border-2 border-destructive/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-destructive">
                  <Ban className="w-6 h-6" />
                  Don'ts
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  (Avoid these habits or limit to once or twice a month)
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {donts.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Ban className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Do's Section */}
            <Card className="border-2 border-secondary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-secondary">
                  <Check className="w-6 h-6" />
                  Do's
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  (Healthy habits to incorporate in daily life)
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {dos.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8 bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle>Holistic Health Philosophy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                A healthy lifestyle is not just about what you eat, but also about how you live. Homeopathy believes in treating the individual as a whole - mind, body, and spirit. Your diet, exercise, sleep, and mental attitude all play crucial roles in maintaining good health.
              </p>
              <p className="text-muted-foreground">
                Remember, prevention is better than cure. By following these simple guidelines and maintaining a positive life attitude, you can prevent many illnesses and lead a healthier, happier life.
              </p>
              <div className="pt-4 text-center">
                <Button asChild>
                  <Link to="/#contact">Get Personalized Diet Guidance</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LifeAttitude;
