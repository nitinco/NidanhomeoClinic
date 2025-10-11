import { Award, GraduationCap, Heart, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-24">
        <Button asChild variant="outline" className="mb-8">
          <Link to="/">← Back to Home</Link>
        </Button>

        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Dr. Sudhanshu Sharma
            </h1>
            <p className="text-xl text-muted-foreground">
              BHMS, MD (Homeopathy)
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="lg:col-span-2 border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-primary" />
                  Professional Journey
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Childhood instinct to work for humanity turned him to choose medical studies. Dr. Sharma has always been devoted to mankind health awareness. It has been his all-time achievement to participate in social health awareness campaigns and propagate the simplicity & effectiveness of Homeopathy among people.
                </p>
                <p>
                  It was not only his aim to study medical science in life, but he devoted himself with high moral values in every moment of his life for caring for others with treatment and counseling. All his journey in Homeopathy from basic graduation till specialization gave him encouragement and satisfactory moments while working for sufferers.
                </p>
                <p>
                  Establishing <span className="font-semibold text-primary">"NIDAN"</span> and then modifying it to a clinical research center as{" "}
                  <span className="font-semibold text-primary">"NIDAN (A Homeopathy Speciality Clinic)"</span> in 2003 has been a long experience path of his clinical practice.
                </p>
                <p>
                  Presently, Dr. Sharma is on his journey to research and explore the attitude of people about Homeopathy in the UK. He has spread evidence-based thought about homeopathy in Edinburgh, UK. He is now a consultant & Registered Homeopath in the UK. He has achieved specialization in counseling from the University of Edinburgh, UK.
                </p>
                <p>
                  Dr. Sharma is also researching homeopathy, finding awareness and practices of Alternative Medicine and Homeopathy among South Asian Communities of Edinburgh, UK, who are following up their treatment for certain chronic and acute illnesses. Dr. Sharma is also associated with the British Red Cross at Edinburgh.
                </p>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-primary" />
                    Qualifications
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p className="font-semibold text-center text-lg mb-4">
                    Among First 20 MD Homeopaths of Jaipur, India
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="text-primary">•</span>
                      <span>Registered in India & UK</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary">•</span>
                      <span>Life Member of Asian Homeopathy League</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary">•</span>
                      <span>Member of Complementary Therapy Association, UK</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-secondary/20">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Award className="w-5 h-5 text-secondary" />
                    Current Position
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  <p className="font-semibold text-center">
                    Chief Consultant
                  </p>
                  <p className="text-center text-muted-foreground">
                    "NIDAN" (A Homeopathy Specialty Clinic)
                  </p>
                  <p className="text-center text-muted-foreground mt-2 flex items-center justify-center gap-1">
                    <MapPin className="w-4 h-4" />
                    Jaipur, India
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-center">Philosophy of Care</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground">
                "We try to adopt our path of successful diagnosis & treatment with basic qualities of being unbiased, cordial, good listener, accountable, and honest as physician to patient."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
