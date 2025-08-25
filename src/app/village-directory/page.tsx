import { Header } from "@/components/header";

export default function VillageDirectoryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <div className="container max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold">Village Directory</h1>
          <p className="text-muted-foreground mt-2">The village directory will be displayed here.</p>
        </div>
      </main>
    </div>
  );
}
