import { Header } from "@/components/header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { Newspaper } from "lucide-react";

const newsArticles = [
  {
    title: "New Road Construction to Begin Next Month",
    description: "The long-awaited construction of the main road connecting the village to the highway is set to begin in the first week of September.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "road construction",
    date: "2024-07-28",
    source: "Local Panchayat Bulletin",
  },
  {
    title: "Village School Achieves 100% Pass Rate in SSC Exams",
    description: "The Zilla Parishad school has recorded a 100% pass rate in the Secondary School Certificate (SSC) exams for the third consecutive year.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "students classroom",
    date: "2024-07-27",
    source: "District Education Office",
  },
  {
    title: "Farmers Adopt New Drip Irrigation Techniques",
    description: "Several farmers in the village have successfully implemented drip irrigation systems, leading to significant water savings and improved crop yields.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "drip irrigation",
    date: "2024-07-25",
    source: "Krishi Vigyan Kendra",
  },
];

export default function LocalNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <div className="container max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center gap-4 mb-6">
            <Newspaper className="w-10 h-10 text-primary" />
            <div>
              <h1 className="text-4xl font-bold">Local News</h1>
              <p className="text-muted-foreground mt-1">Updates and happenings from around our village.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsArticles.map((article, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader>
                  <div className="relative aspect-video">
                    <Image 
                      src={article.imageUrl} 
                      alt={article.title} 
                      fill 
                      data-ai-hint={article.imageHint}
                      className="rounded-t-lg object-cover"
                    />
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardTitle className="text-lg mb-2">{article.title}</CardTitle>
                  <CardDescription>{article.description}</CardDescription>
                </CardContent>
                <CardFooter className="text-xs text-muted-foreground">
                  <p>{new Date(article.date).toLocaleDateString()} - {article.source}</p>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
