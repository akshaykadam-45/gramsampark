import { Header } from "@/components/header";

export default function EducationPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <div className="container max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold">Education</h1>
          <p className="text-muted-foreground mt-2">Information about education will be displayed here.</p>
        </div>
      </main>
    </div>
  );
}
