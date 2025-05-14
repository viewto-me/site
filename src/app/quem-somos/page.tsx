import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from 'lucide-react';

// Replace with actual team data if available and desired
const teamMembers = [
  { name: "Lucas Schunck", role: "CEO & Co-founder", image: "https://storage.googleapis.com/publics-svg/lucasSchunck3.jpeg", initials: "LS", dataAiHint: "person portrait", description: "Engenheiro civil com mais de 13 anos de experiência em relacionamento e inovação tecnológica. Atuou por cerca de 8 anos na Campus Party, um dos maiores eventos de tecnologia do mundo, o que o manteve sempre próximo das tendências e avanços do setor. Foi também um dos principais responsáveis pelas automações e pela transformação digital da área de Client Relations da Fintech Avenue, adquirida posteriormente pelo Itaú. Sua visão estratégica e foco em eficiência operacional foram fundamentais para o crescimento exponencial da empresa." },
  { name: "Thiago Dupin", role: "CTO & Co-founder", image: "https://storage.googleapis.com/publics-svg/thiagoDupin.jpeg", initials: "TD", dataAiHint: "person portrait", description: "Engenheiro de Software com mais de 10 anos de experiência em desenvolvimento e arquitetura de soluções. Possui MBA em Arquitetura de Soluções e passagem por empresas de destaque como Accenture e Santander, onde atuou por mais de 8 anos. É também colaborador ativo no projeto open source do Visual Studio Code, reforçando seu compromisso com a excelência técnica e a inovação contínua." },
];

export default function QuemSomosPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-outfit-semibold mb-4">Nossa História</h1>
          <p className="text-lg md:text-xl text-muted-foreground">
          Após mais de dois anos de desenvolvimento intenso, em março de 2025 lançamos nossa solução no mercado. A viewto.me nasceu da vontade de transformar a forma como as empresas acessam e interpretam dados desestruturados.
          </p>
        </div>

        <div className="mb-12 p-8 bg-secondary rounded-lg border border-border/40">
           <Quote className="h-10 w-10 text-primary mb-4" />
           <h2 className="text-2xl md:text-3xl font-outfit-medium mb-4 italic text-foreground">"Além do Óbvio"</h2>
           <p className="text-lg text-muted-foreground">
             Nossa filosofia central é simples: não nos contentamos com o superficial. Acreditamos que o verdadeiro valor reside nos insights escondidos sob a superfície dos dados. Buscamos revelar o sentimento genuíno, a satisfação real e as causas raízes que impulsionam comportamentos e resultados. É essa busca pelo "porquê" que nos define.
           </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-outfit-semibold mb-6 text-center md:text-left">Missão e Visão</h2>
          <div className="grid md:grid-cols-2 gap-8">
             <div className="bg-card p-6 rounded-lg border border-border/60 shadow-sm">
               <h3 className="text-2xl font-outfit-medium mb-3 text-primary">Nossa Missão</h3>
               <p className="text-muted-foreground">
                 Propulsar empresas que almejam ser verdadeiramente centradas no cliente (externo e interno), transformando dados textuais em inteligência acionável para gerar melhores negócios, funcionários mais engajados e pessoas mais felizes.
               </p>
             </div>
             <div className="bg-card p-6 rounded-lg border border-border/60 shadow-sm">
                <h3 className="text-2xl font-outfit-medium mb-3 text-primary">Nossa Visão</h3>
               <p className="text-muted-foreground">
                 Ser a referência em análise e extração de insights de dados não estruturados, capacitando organizações a tomar decisões estratégicas baseadas em uma compreensão completa da voz de seus clientes e colaboradores.
               </p>
             </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-outfit-semibold mb-8 text-center">Equipe</h2>
          <div className="space-y-12">
            {teamMembers.map((member) => (
              <div key={member.name} className="md:flex md:items-center md:gap-8">
                <div className="flex-shrink-0 text-center md:text-left mb-4 md:mb-0">
                    <Avatar className="w-32 h-32 mx-auto md:mx-0 mb-2">
                    <AvatarImage src={member.image} alt={member.name} data-ai-hint={member.dataAiHint}/>
                    <AvatarFallback className="text-3xl">{member.initials}</AvatarFallback>
                    </Avatar>
                    <h4 className="font-outfit-medium text-xl">{member.name}</h4>
                    <p className="text-muted-foreground text-md">{member.role}</p>
                </div>
                <div className="text-muted-foreground text-md">
                    <p>{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <h2 className="text-2xl md:text-3xl font-outfit-semibold mb-6">Junte-se a nós na jornada</h2>
          <p className="text-lg text-muted-foreground">
            Estamos construindo o futuro da análise de dados. Explore nossas soluções ou venha fazer parte da nossa equipe.
          </p>
        </div>
      </div>
    </div>
  );
}
