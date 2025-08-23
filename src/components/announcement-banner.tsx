import { Megaphone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function AnnouncementBanner() {
    // Mock data for announcements
    const announcement = "Village meeting on Sunday at 10 AM to discuss water supply. All are requested to attend.";
    
    return (
        <section className="py-8">
            <Card className="bg-accent/10 border-accent shadow-lg overflow-hidden">
                <CardContent className="p-4 flex flex-col sm:flex-row items-center gap-4">
                    <div className="bg-accent rounded-full p-3 flex-shrink-0">
                        <Megaphone className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <div className="text-center sm:text-left">
                        <h2 className="font-bold text-accent">Village Announcement</h2>
                        <p className="text-sm text-foreground/80">{announcement}</p>
                    </div>
                </CardContent>
            </Card>
        </section>
    );
}
