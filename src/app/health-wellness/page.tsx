import { Header } from "@/components/header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { HeartPulse, Calendar, Clock, MapPin } from "lucide-react";

const events = [
  {
    title: "General Health Check-up Camp",
    description: "Free health check-up including blood pressure, sugar levels, and general consultation with a doctor.",
    date: "2024-08-10",
    time: "10:00 AM - 4:00 PM",
    location: "Village Community Hall",
  },
  {
    title: "Children's Vaccination Drive",
    description: "Polio and other essential vaccinations for children under 5 years of age. Please bring vaccination cards.",
    date: "2024-08-18",
    time: "9:00 AM - 1:00 PM",
    location: "Primary Health Sub-center",
  },
  {
    title: "Women's Health Awareness Session",
    description: "An informative session on nutrition, hygiene, and wellness for women of all ages.",
    date: "2024-08-25",
    time: "2:00 PM - 3:30 PM",
    location: "Anganwadi Center",
  },
];

export default function HealthWellnessPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <div className="container max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center gap-4 mb-6">
            <HeartPulse className="w-10 h-10 text-primary" />
            <div>
              <h1 className="text-4xl font-bold">Health & Wellness</h1>
              <p className="text-muted-foreground mt-1">Upcoming health camps and important updates.</p>
            </div>
          </div>
          <div className="space-y-6">
            {events.map((event, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{event.title}</CardTitle>
                  <CardDescription>{event.description}</CardDescription>
                </CardHeader>
                <CardContent className="grid sm:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-muted-foreground" />
                    <strong>Date:</strong><span className="ml-2">{new Date(event.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-muted-foreground" />
                    <strong>Time:</strong><span className="ml-2">{event.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-muted-foreground" />
                    <strong>Location:</strong><span className="ml-2">{event.location}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
