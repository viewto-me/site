import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from 'next/image';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Produtos', href: '/produtos' },
  { label: 'Quem Somos', href: '/quem-somos' },
  { label: 'Trabalhe Conosco', href: '/trabalhe-conosco' },
  { label: 'Contato', href: '/contato' },
];

export default function Header() {
  return (
    <header className="w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="w-full flex h-14 items-center px-4 md:px-6 lg:px-8">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Image
            src="https://storage.googleapis.com/publics-svg/viewtome-name18px.svg"
            alt="viewto.me logo"
            width={90}
            height={18}
            priority
            className="relative -top-px" 
          />
        </Link>
        <nav className="hidden flex-1 items-center space-x-6 text-sm font-outfit-regular md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
           <Button asChild variant="default" className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground font-outfit-regular">
             <Link href="/contato">Fale Conosco</Link>
           </Button>
           {/* Mobile Menu */}
           <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[240px] sm:w-[300px] bg-background text-foreground">
              <div className="flex flex-col h-full py-6">
                 <Link href="/" className="mb-6 flex items-center space-x-2 px-4">
                    <Image
                        src="https://storage.googleapis.com/publics-svg/viewtome-name18px.svg"
                        alt="viewto.me logo"
                        width={90}
                        height={18}
                        className="relative -top-px"
                    />
                 </Link>
                <nav className="flex flex-col space-y-4 px-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-lg font-outfit-regular text-foreground transition-colors hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto px-4">
                   <Button asChild variant="default" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-outfit-regular">
                     <Link href="/contato">Fale Conosco</Link>
                   </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
