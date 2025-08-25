"use client";

import { Button } from "@/components/ui/button";
import { Globe, Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import React from "react";
import { useLoginDialog } from "@/hooks/use-login-dialog";

function LogoIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
        </svg>
    );
}

export function Header() {
  const [language, setLanguage] = React.useState("English");
  const { onOpen } = useLoginDialog();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center justify-between">
        <div className="flex items-center gap-3">
            <LogoIcon className="h-7 w-7 text-primary" />
            <h1 className="text-2xl font-bold font-headline text-foreground">GramSampark</h1>
        </div>

        <div className="flex items-center gap-2">
            <nav className="hidden md:flex items-center gap-2">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <Globe className="h-5 w-5" />
                            <span className="sr-only">Change language</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem onSelect={() => setLanguage("English")}>
                            English
                        </DropdownMenuItem>
                        <DropdownMenuItem onSelect={() => setLanguage("Marathi")}>
                            मराठी
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                 <Button onClick={onOpen}>Login</Button>
            </nav>

            <div className="md:hidden">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Open menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right">
                        <div className="flex flex-col gap-6 p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <LogoIcon className="h-7 w-7 text-primary" />
                                <h1 className="text-2xl font-bold font-headline text-foreground">GramSampark</h1>
                            </div>
                             <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline" className="w-full justify-between">
                                        <span>{language}</span>
                                        <Globe className="h-5 w-5" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" className="w-56">
                                    <DropdownMenuItem onSelect={() => setLanguage("English")}>
                                        English
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onSelect={() => setLanguage("Marathi")}>
                                        मराठी
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                            <Button className="w-full" onClick={onOpen}>Login</Button>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
      </div>
    </header>
  );
}
