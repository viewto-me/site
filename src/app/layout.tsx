import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import { cn } from "@/lib/utils";
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster";

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ['100', '300', '400'], // Only Thin, Light, Regular
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'viewto.me',
  description: 'Análise e extração de dados de textos desestruturados com IA. Insights Além do Óbvio para empresas customer-centric.',
  icons: {
    icon: 'https://storage.googleapis.com/publics-svg/favicon32px.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={cn(outfit.variable, "antialiased")}>
      <body className={cn(
        "min-h-screen bg-background text-foreground flex flex-col"
      )}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
