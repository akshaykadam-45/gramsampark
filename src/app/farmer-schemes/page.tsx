import { Header } from "@/components/header";

export default function FarmerSchemesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <div className="container max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold">Farmer Schemes</h1>
          <p className="text-muted-foreground mt-2">Information about farmer schemes will be displayed here.</p>
        </div>
      </main>
    </div>
  );
}
