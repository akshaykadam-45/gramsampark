import { Header } from "@/components/header";
import { AnnouncementBanner } from "@/components/announcement-banner";
import { DashboardCategories } from "@/components/dashboard-categories";
import { LoginDialog } from "@/components/login-dialog";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen bg-transparent">
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="Indian village fields"
        data-ai-hint="Indian village fields"
        fill
        className="object-cover object-center -z-10"
      />
      <div className="absolute inset-0 bg-background/80 -z-10" />

      <Header />
      <main className="flex-1">
        <div className="container max-w-7xl mx-auto px-4 py-8">
          <section className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-foreground tracking-tight">Welcome, Villager!</h2>
            <p className="text-muted-foreground mt-2">Your one-stop portal for all village-related information.</p>
          </section>
          
          <AnnouncementBanner />

          <section className="py-8">
             <h3 className="text-2xl font-bold font-headline mb-6">Information Categories</h3>
             <DashboardCategories />
          </section>
        </div>
      </main>
      <footer className="py-6 border-t bg-background/80">
        <div className="container text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} GramSampark. All rights reserved.
        </div>
      </footer>
      <LoginDialog />
    </div>
  );
}
