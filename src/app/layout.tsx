import type { Metadata } from 'next';
import { Outfit } from 'next/font/google'; // Changed from Geist
import './globals.css';
import { cn } from "@/lib/utils";
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster"; // Import Toaster

// Configure Outfit font with desired weights
const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ['100', '300', '400', '500', '600'], // Include Thin, Light, Regular, Medium, SemiBold
  display: 'swap', // Improves font loading performance
});

export const metadata: Metadata = {
  title: 'Viewto Insights - Além do Óbvio', // Updated title
  description: 'Análise e extração de dados de textos desestruturados com IA. Insights Além do Óbvio para empresas customer-centric.', // Updated description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR"> {/* Changed lang to pt-BR */}
      <body className={cn(
        "min-h-screen bg-background font-outfit-light antialiased flex flex-col", // Use light weight by default, ensure flex column layout
        outfit.variable // Apply font variable
      )}>
        <Header />
        <main className="flex-grow">{children}</main> {/* Ensure main content takes up space */}
        <Footer />
        <Toaster /> {/* Add Toaster component */}
      </body>
    </html>
  );
}
