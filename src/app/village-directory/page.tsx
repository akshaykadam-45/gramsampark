import { Header } from "@/components/header";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Phone, School, Hospital } from "lucide-react";

const directory = [
  { name: "Village Panchayat Office", contact: "0253-2XXXXXX", category: "Admin" },
  { name: "Gram Sevak (Village Secretary)", contact: "98XXXXXX01", category: "Admin" },
  { name: "Sarpanch (Village Head)", contact: "98XXXXXX02", category: "Admin" },
  { name: "Primary Health Sub-center", contact: "0253-2XXXXXY", category: "Health" },
  { name: "Anganwadi Center", contact: "98XXXXXX03", category: "Health" },
  { name: "Zilla Parishad Primary School", contact: "0253-2XXXXXZ", category: "Education" },
  { name: "Local Police Patil", contact: "98XXXXXX04", category: "Admin" },
  { name: "Electricity Board Office", contact: "1800-233-3435", category: "Utility" },
  { name: "Water Supply Department", contact: "98XXXXXX05", category: "Utility" },
];

export default function VillageDirectoryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <div className="container max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center gap-4 mb-6">
            <Building2 className="w-10 h-10 text-primary" />
            <div>
              <h1 className="text-4xl font-bold">Village Directory</h1>
              <p className="text-muted-foreground mt-1">Important contacts for local services.</p>
            </div>
          </div>
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Service / Department</TableHead>
                    <TableHead>Contact Number</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {directory.map((entry, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium flex items-center">
                        <Phone className="w-4 h-4 mr-3 text-muted-foreground" />
                        {entry.name}
                      </TableCell>
                      <TableCell>{entry.contact}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
