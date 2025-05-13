import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Lightbulb, Users, Rocket } from 'lucide-react';

export default function TrabalheConoscoPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-outfit-semibold mb-6">Faça parte da revolução dos dados</h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-12">
          Somos apaixonados por tecnologia, inovação e por descobrir insights "Além do Óbvio". Se você compartilha dessa paixão, queremos conhecer você!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-16">
           <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg border border-border/60 shadow-sm">
             <Lightbulb className="h-10 w-10 text-primary mb-4" />
             <h3 className="text-xl font-outfit-medium mb-2">Inovação Contínua</h3>
             <p className="text-muted-foreground text-sm">Buscamos constantemente novas formas de aplicar IA para resolver desafios complexos.</p>
           </div>
           <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg border border-border/60 shadow-sm">
             <Users className="h-10 w-10 text-primary mb-4" />
             <h3 className="text-xl font-outfit-medium mb-2">Ambiente Colaborativo</h3>
             <p className="text-muted-foreground text-sm">Valorizamos a troca de ideias e o trabalho em equipe para alcançar resultados excepcionais.</p>
           </div>
           <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg border border-border/60 shadow-sm">
             <Rocket className="h-10 w-10 text-primary mb-4" />
             <h3 className="text-xl font-outfit-medium mb-2">Impacto Real</h3>
             <p className="text-muted-foreground text-sm">Seu trabalho ajudará empresas a entenderem melhor seus clientes e a tomarem decisões mais inteligentes.</p>
           </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-outfit-semibold mb-4">Oportunidades Abertas</h2>
        <p className="text-muted-foreground mb-8">
          No momento, não temos vagas específicas abertas, mas estamos sempre interessados em conhecer talentos excepcionais.
        </p>
        <p className="text-lg text-foreground mb-8">
          Se você acredita que pode contribuir para a nossa missão, envie seu currículo e uma breve apresentação para:
        </p>

        <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-outfit-regular">
          <a href="mailto:careers@viewto.me?subject=Aplicação pelo site">Enviar Currículo</a>
        </Button>

         <p className="mt-8 text-sm text-muted-foreground">Ou <Link href="/contato" className="text-primary hover:underline">entre em contato</Link> para saber mais.</p>
      </div>
    </div>
  );
}
