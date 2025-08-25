"use client";

import { Header } from "@/components/header";
import { AnnouncementBanner } from "@/components/announcement-banner";
import { DashboardCategories } from "@/components/dashboard-categories";
import { LoginDialog } from "@/components/login-dialog";
import Image from "next/image";
import { useLocalization } from "@/hooks/use-localization";

export default function Home() {
  const { t } = useLocalization();

  return (
    <div className="relative flex flex-col min-h-screen bg-background">
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="Indian village fields with huts at sunrise"
        data-ai-hint="Indian village greenery"
        fill
        className="object-cover object-center -z-10"
      />
      <div className="absolute inset-0 bg-background/80 -z-10" />

      <Header />
      <main className="flex-1">
        <div className="container max-w-7xl mx-auto px-4 py-8">
          <section className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-foreground tracking-tight">{t('welcome')}</h2>
            <p className="text-muted-foreground mt-2">{t('portalDescription')}</p>
          </section>
          
          <AnnouncementBanner />

          <section className="py-8">
             <h3 className="text-2xl font-bold font-headline mb-6">{t('informationCategories')}</h3>
             <DashboardCategories />
          </section>
        </div>
      </main>
      <footer className="py-6 border-t bg-background/80">
        <div className="container text-center text-sm text-muted-foreground">
          {t('copyright')}
        </div>
      </footer>
      <LoginDialog />
    </div>
  );
}
