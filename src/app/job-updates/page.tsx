import { Header } from "@/components/header";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const jobs = [
  {
    title: "Gram Rojgar Sahayak",
    type: "Government",
    location: "Village Panchayat Office",
    deadline: "2024-08-15",
    description: "Assist in the implementation of MGNREGA schemes at the village level. Requires 12th pass.",
    link: "#",
  },
  {
    title: "Primary School Teacher",
    type: "Government",
    location: "Zilla Parishad School",
    deadline: "2024-08-20",
    description: "Opening for a primary school teacher. D.Ed/B.Ed qualification is mandatory.",
    link: "#",
  },
  {
    title: "Field Sales Executive",
    type: "Private",
    location: "Nearby Town",
    deadline: "2024-09-01",
    description: "Agro-product company looking for sales executives to connect with local farmers. Good communication skills required.",
    link: "#",
  },
  {
    title: "Data Entry Operator",
    type: "Private",
    location: "Tehsil Office",
    deadline: "2024-08-25",
    description: "Part-time data entry work for a local cooperative bank. Basic computer knowledge is essential.",
    link: "#",
  },
];

export default function JobUpdatesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <div className="container max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center gap-4 mb-6">
            <Briefcase className="w-10 h-10 text-primary" />
            <div>
              <h1 className="text-4xl font-bold">Job Updates</h1>
              <p className="text-muted-foreground mt-1">Find local and government job openings.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {jobs.map((job, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>{job.title}</CardTitle>
                    <Badge variant={job.type === "Government" ? "default" : "secondary"}>{job.type}</Badge>
                  </div>
                  <CardDescription>{job.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <MapPin className="w-4 h-4 mr-2" />
                    {job.location}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2" />
                    Apply by: {new Date(job.deadline).toLocaleDateString()}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <a href={job.link} target="_blank" rel="noopener noreferrer">
                      View Details & Apply
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
