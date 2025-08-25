import { Header } from "@/components/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Leaf } from "lucide-react";

const schemes = [
  {
    title: "Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)",
    description: "A government scheme that provides income support of ₹6,000 per year to all small and marginal farmer families.",
    eligibility: "All small and marginal farmer families with combined landholding/ownership of up to 2 hectares.",
    link: "#"
  },
  {
    title: "Kisan Credit Card (KCC) Scheme",
    description: "Provides farmers with timely access to credit for their agricultural needs, including purchase of inputs and machinery.",
    eligibility: "All farmers - individuals/joint borrowers who are owner cultivators.",
    link: "#"
  },
  {
    title: "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
    description: "An insurance service for farmers for their yields. It provides financial support to farmers suffering crop loss/damage arising out of unforeseen events.",
    eligibility: "All farmers including sharecroppers and tenant farmers growing notified crops in the notified areas are eligible.",
    link: "#"
  },
  {
    title: "National Mission for Sustainable Agriculture (NMSA)",
    description: "Aims to enhance agricultural productivity especially in rainfed areas focusing on integrated farming, water use efficiency, soil health management and synergizing resource conservation.",
    eligibility: "Varies by specific components of the mission.",
    link: "#"
  },
];

export default function FarmerSchemesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <div className="container max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center gap-4 mb-6">
            <Leaf className="w-10 h-10 text-primary" />
            <div>
              <h1 className="text-4xl font-bold">Farmer Schemes</h1>
              <p className="text-muted-foreground mt-1">Latest government schemes and support for our farmers.</p>
            </div>
          </div>
          
          <div className="space-y-6">
            {schemes.map((scheme, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader>
                  <CardTitle>{scheme.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{scheme.description}</p>
                  <Accordion type="single" collapsible>
                    <AccordionItem value={`item-${index}`}>
                      <AccordionTrigger>Eligibility Criteria</AccordionTrigger>
                      <AccordionContent>
                        {scheme.eligibility}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <Button asChild className="mt-4">
                    <a href={scheme.link} target="_blank" rel="noopener noreferrer">
                      Learn More & Apply
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
