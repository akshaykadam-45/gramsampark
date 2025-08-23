import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Newspaper, Leaf, Briefcase, HeartPulse, BookOpen, Building2 } from "lucide-react";
import { NewsSummarizer } from './news-summarizer';
import type { LucideIcon } from "lucide-react";

interface Category {
  title: string;
  icon: LucideIcon;
  description: string;
}

const categories: Category[] = [
  { title: "Farmer Schemes", icon: Leaf, description: "Latest government schemes for farmers." },
  { title: "Job Updates", icon: Briefcase, description: "Find local and government job openings." },
  { title: "Health & Wellness", icon: HeartPulse, description: "Health camps and important updates." },
  { title: "Education", icon: BookOpen, description: "Information on schools and scholarships." },
  { title: "Local News", icon: Newspaper, description: "Updates and news from your area." },
  { title: "Village Directory", icon: Building2, description: "Contact info for local services." },
];

function CategoryCard({ title, icon: Icon, description }: Category) {
  return (
    <Card className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer h-full flex flex-col group">
      <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
        <div className="bg-primary/10 p-3 rounded-full transition-colors group-hover:bg-primary">
          <Icon className="w-6 h-6 text-primary transition-colors group-hover:text-primary-foreground" />
        </div>
        <CardTitle className="text-lg font-semibold font-headline">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

export function DashboardCategories() {
  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <CategoryCard key={category.title} {...category} />
        ))}
      </div>
      <NewsSummarizer />
    </div>
  );
}
