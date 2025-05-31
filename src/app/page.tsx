import React from 'react';
import { HeroSection } from "@/components/blocks/3d-hero-section-boxes";
import DynamicTaglines from '@/components/home/dynamic-taglines';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Info, BarChart, BrainCircuit, ShieldCheck, Zap } from 'lucide-react';
import Link from 'next/link';
import TextAnalysisForm from '@/components/ai/text-analysis-form';
import Image from 'next/image';

const benefits = [
  {
    icon: BrainCircuit,
    title: 'Insights "Além do Óbvio"',
    description: 'Revele sentimento, causa raiz e satisfação real, indo além da análise superficial.',
  },
  {
    icon: Zap,
    title: 'Eficiência Drástica',
    description: 'Substitua processos manuais por análises automatizadas, escaláveis e de baixo custo.',
  },
  {
    icon: BarChart,
    title: 'Decisões Estratégicas',
    description: 'Transforme textos desestruturados em inteligência acionável para o seu negócio.',
  },
  {
    icon: ShieldCheck,
    title: 'Mitigação de Riscos',
    description: 'Monitore comunicações para garantir compliance e prevenir problemas legais.',
  },
];

const dataSources = [
    { name: "Chats (Humanos/Bots)" },
    { name: "Transcrições Telefônicas" },
    { name: "E-mails" },
    { name: "Pesquisas (CSAT, NPS)" },
    { name: "App Reviews" },
    { name: "Reclame Aqui" },
    { name: "Documentos (RG, CNH, Contratos, CVs, NFs)" },
];

// Este é o componente principal para esta página/rota
export function HomePage() {
  return (
    // Você pode ter uma tag <main> ou outros wrappers fornecidos pelo seu layout.tsx
    // mas o uso principal é apenas renderizar o componente.
    <div>
      <HeroSection />

      {/* AI Analyzer Section */}
      <section className="py-16 md:py-24 bg-background text-foreground" style={{ background: 'linear-gradient(to bottom, #000 0%, #fff 100%)' }}>
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-outfit-regular text-center mb-4">Experimente nossa IA</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto font-outfit-light">
            Cole um texto abaixo e veja como nossa IA extrai sentimento, satisfação e os problemas principais em segundos.
          </p>
          <TextAnalysisForm />
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-16 md:py-24 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-outfit-regular mb-4">O desafio dos dados não estruturados</h2>
              <p className="text-lg text-muted-foreground mb-6 font-outfit-light">
                Empresas geram volumes massivos de texto em chats, e-mails, pesquisas e documentos. Analisar manualmente esses dados é lento, caro e sujeito a vieses, escondendo insights valiosos.
              </p>
               <h3 className="text-xl font-outfit-regular mb-3">Fontes comuns de dados:</h3>
               <ul className="space-y-2 font-outfit-light">
                  {dataSources.map((source) => (
                     <li key={source.name} className="flex items-center text-muted-foreground">
                      <Info className="h-5 w-5 mr-2 text-muted-foreground" />
                      {source.name}
                    </li>
                  ))}
               </ul>
            </div>
            <div>
              <div className="bg-background rounded-lg shadow-lg p-8 aspect-video flex items-center justify-center border border-border">
                <Image src="https://picsum.photos/600/338" alt="Data transformation visual" width={600} height={338} className="rounded-lg object-cover" data-ai-hint="data analysis abstract"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 md:py-24 bg-background text-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-outfit-regular text-center mb-12">Benefícios que vão além do óbvio</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="text-center bg-card border border-border shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto bg-muted p-3 rounded-full w-fit mb-4">
                    <benefit.icon className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <CardTitle className="text-xl font-outfit-regular">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground font-outfit-light">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-secondary text-secondary-foreground">
        <div className="container mx-auto text-center px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-outfit-regular mb-6">Pronto para descobrir o que seus dados escondem?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto font-outfit-light">
            Comece a transformar suas interações em inteligência estratégica hoje mesmo.
          </p>
          <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-outfit-regular">
            <Link href="/contato">Fale com um Especialista</Link>
          </Button>
        </div>
      </section>

    </div>
  );
}

export default HomePage;
