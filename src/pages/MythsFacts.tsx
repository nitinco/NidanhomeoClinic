import { AlertCircle, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const MythsFacts = () => {
  const mythFacts = [
    {
      myth: "Homeopathic medicines are always the same sugar pills, no matter what the illness.",
      fact: "Yes, the white sugar pills are only the carrier of the Homeopathy medicine through your tongue into the body. Sugar pills do not have any medicinal value, so they can be used as carriers. Most Homeopathic medicines are alcohol-based. While preparing a dose, the alcoholic doses are dropped on sugar pills to convert the pills into medicated form for that drug, which can then be prescribed to the patient. Homeopathic medicines have been scientifically studied worldwide and found to be effective in a wide range of diseases. Thus, they are not placebos."
    },
    {
      myth: "Homeopathy is slow acting and cannot be used in acute cases of diarrhea, fever, cough, cold, etc.",
      fact: "Any medicine has different action depending on its status or mode of transfer to the body. The action depends on the patient and how well they show their symptoms, and also on the homeopath and how well they understand the problem. Unfortunately, people tend to go to a homeopath only when acute problems become chronic. Naturally, these cases take longer to treat. Homeopathy can effectively treat both acute and chronic conditions when properly prescribed."
    },
    {
      myth: "Homeopathic doctors are quacks who do not have formal training in medicine.",
      fact: "In India, under the Government act for the definition of practice of Homeopathy, a qualified doctor has to go through certain training and then be allowed to practice. Homeopathy is a well-recognized science like any other system of medical treatment in most parts of the world. In India, there are over 180 medical colleges offering degree and post-graduate studies in Homeopathy. At present, there are over 1,50,000 trained homeopaths in the country."
    },
    {
      myth: "One has to follow strict dietary restrictions while on homeopathic treatment.",
      fact: "Some patients are asked to abstain from onions, garlic, coffee, tea, alcohol, etc., as these substances interfere with the action of certain homeopathic medicines. However, restricting alcohol and tobacco is also safe and healthy in general."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-24">
        <Button asChild variant="outline" className="mb-8">
          <Link to="/">← Back to Home</Link>
        </Button>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Homeopathy - Myths & Facts
            </h1>
            <p className="text-xl text-muted-foreground">
              Proven Science or Just "Sugar Pills"?
            </p>
          </div>

          <div className="space-y-8">
            {mythFacts.map((item, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-start gap-3">
                    <AlertCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                    <div>
                      <span className="text-sm font-semibold text-destructive uppercase tracking-wide block mb-2">
                        Myth
                      </span>
                      <span className="text-lg font-semibold text-foreground">
                        {item.myth}
                      </span>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <span className="text-sm font-semibold text-secondary uppercase tracking-wide block mb-2">
                        Fact
                      </span>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.fact}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-12 bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle>Why is Homeopathy Still Considered Alternative?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Despite being effective, homeopathy is often approached as a last line of treatment. This is due to several factors:
              </p>
              <ul className="space-y-2 pl-6">
                <li className="flex items-start space-x-2">
                  <span className="text-primary">•</span>
                  <span>Lack of widespread awareness about its effectiveness</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary">•</span>
                  <span>Misconceptions about "slow action" and "sugar pills"</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary">•</span>
                  <span>Limited promotion compared to conventional medicine</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary">•</span>
                  <span>Patients often seek homeopathy after chronic conditions develop</span>
                </li>
              </ul>
              <p className="italic">
                "Homeopathy treats the patient as a whole, not just the disease. It's a proven science that deserves recognition as a primary healthcare choice."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MythsFacts;
