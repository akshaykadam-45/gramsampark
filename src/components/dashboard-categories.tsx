"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Newspaper, Leaf, Briefcase, HeartPulse, BookOpen, Building2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useLocalization, type TranslationKey } from "@/hooks/use-localization";

interface Category {
  titleKey: TranslationKey;
  descriptionKey: TranslationKey;
  icon: LucideIcon;
  href: string;
}

const categories: Category[] = [
  { titleKey: "farmerSchemes", descriptionKey: "farmerSchemesDesc", icon: Leaf, href: "/farmer-schemes" },
  { titleKey: "jobUpdates", descriptionKey: "jobUpdatesDesc", icon: Briefcase, href: "/job-updates" },
  { titleKey: "healthWellness", descriptionKey: "healthWellnessDesc", icon: HeartPulse, href: "/health-wellness" },
  { titleKey: "education", descriptionKey: "educationDesc", icon: BookOpen, href: "/education" },
  { titleKey: "localNews", descriptionKey: "localNewsDesc", icon: Newspaper, href: "/local-news" },
  { titleKey: "villageDirectory", descriptionKey: "villageDirectoryDesc", icon: Building2, href: "/village-directory" },
];

function CategoryCard({ titleKey, descriptionKey, icon: Icon, href }: Category) {
  const router = useRouter();
  const { t } = useLocalization();
  
  const handleClick = () => {
    router.push(href);
  };

  return (
    <Card 
      className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer h-full flex flex-col group"
      onClick={handleClick}
    >
      <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
        <div className="bg-primary/10 p-3 rounded-full transition-colors group-hover:bg-primary">
          <Icon className="w-6 h-6 text-primary transition-colors group-hover:text-primary-foreground" />
        </div>
        <CardTitle className="text-lg font-semibold font-headline">{t(titleKey)}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground">{t(descriptionKey)}</p>
      </CardContent>
    </Card>
  );
}

export function DashboardCategories() {
  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <CategoryCard key={category.titleKey} {...category} />
        ))}
      </div>
    </div>
  );
}
