import { Header } from "@/components/header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

const educationItems = [
  {
    title: "Zilla Parishad School Admissions",
    description: "Admissions for the academic year 2024-2025 for standards 1st to 8th are now open.",
    details: "Last date for application: 30th July 2024. Required documents: Birth certificate, Aadhar card, Passport size photo.",
    link: "#"
  },
  {
    title: "State Scholarship for Meritorious Students",
    description: "Scholarship available for students who scored above 85% in the 10th and 12th board exams.",
    details: "Online application portal is open. Provides financial assistance for higher education fees.",
    link: "#"
  },
  {
    title: "Free Computer Literacy Program",
    description: "A 3-month basic computer course organized by the Village Panchayat for students of all ages.",
    details: "Classes start from 1st September 2024. Limited seats available. Register at the Panchayat office.",
    link: "#"
  },
];

export default function EducationPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <div className="container max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center gap-4 mb-6">
            <BookOpen className="w-10 h-10 text-primary" />
            <div>
              <h1 className="text-4xl font-bold">Education</h1>
              <p className="text-muted-foreground mt-1">Information on schools, scholarships, and programs.</p>
            </div>
          </div>
          <div className="space-y-6">
            {educationItems.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{item.details}</p>
                   <Button asChild variant="secondary">
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      Get More Info
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
