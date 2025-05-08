import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Cpu, FileText, Settings, Rocket, BarChartBig, Eye } from 'lucide-react';
import Link from 'next/link';

const products = [
  {
    icon: Cpu,
    title: 'Interpretar',
    description: 'Analisa conversas e textos (chats, emails, transcrições) para gerar KPIs de Qualidade, Controle e Vendas. Entenda o sentimento, a satisfação e os motivos por trás de cada interação.',
    apis: ['API Quality', 'API Control', 'API Sales'],
    value: 'Compreensão profunda das interações com clientes e colaboradores.',
    link: '/contato?produto=interpretador',
  },
  {
    icon: FileText,
    title: 'Extrair',
    description: 'Extrai dados específicos de uma ampla variedade de documentos (RG, CNH, contratos, NFs, boletos, CVs, entre outros), incluindo documentos não identificados. Suporte para arquivos em texto, imagem e PDF.',
    apis: ['API Docs'],
    value: 'Automatize a coleta de informações de documentos de forma rápida e precisa.',
    link: '/contato?produto=extrator',
  },
  {
    icon: Settings,
    title: 'Customizar',
    description: 'Desenvolvimento de APIs sob medida para suas necessidades específicas de análise ou extração de dados.',
    apis: ['APIs Sob Demanda'],
    value: 'Sua necessidade específica, nossa solução de IA dedicada.',
    link: '/contato?produto=customizado',
  },
];

const upcoming = [
  {
    icon: Rocket,
    title: 'Projetar (em breve)',
    description: 'Uma plataforma playground para clientes testarem e criarem suas próprias APIs customizadas de análise e extração com deploy simplificado.',
    value: 'Autonomia e agilidade na criação de suas próprias soluções de IA.',
  },
  {
    icon: Eye, // Changed from BarChartBig to Eye for Visualizador
    title: 'Visualizar (em breve)',
    description: 'Dashboard online personalizado para clientes que optarem pelo armazenamento dos KPIs gerados pela viewto.me.',
    value: 'Visualize seus insights de forma clara e intuitiva, ideal para times sem BI dedicado.',
  },
];

export default function ProdutosPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-outfit-semibold mb-4">Nossas soluções de IA</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Transformamos dados textuais desestruturados em inteligência acionável para impulsionar seu negócio.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {products.map((product) => (
          <Card key={product.title} className="flex flex-col bg-card border border-border/60 shadow-sm hover:shadow-md transition-shadow duration-300">
            <CardHeader className="items-center text-center">
              <div className="bg-primary/10 p-4 rounded-full w-fit mb-4">
                <product.icon className="h-10 w-10 text-primary" />
              </div>
              <CardTitle className="font-outfit-medium text-2xl">{product.title}</CardTitle>
              <CardDescription className="text-base">{product.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col flex-grow">
              <div className="mb-4">
                <h4 className="font-outfit-medium mb-2">APIs Disponíveis:</h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  {product.apis.map((api) => (
                    <li key={api}>{api}</li>
                  ))}
                </ul>
              </div>
              <p className="text-muted-foreground mb-6"><span className="font-outfit-medium text-foreground">Valor Principal:</span> {product.value}</p>
              <div className="mt-auto">
                <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
                  <Link href={product.link}>Saiba Mais</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-outfit-semibold mb-4">Próximos passos</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Estamos constantemente inovando para trazer ainda mais valor aos nossos clientes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {upcoming.map((item) => (
          <Card key={item.title} className="bg-secondary border border-border/40 shadow-sm">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-full w-fit">
                 <item.icon className="h-8 w-8 text-primary" />
              </div>
              <div>
                <CardTitle className="font-outfit-medium text-xl">{item.title}</CardTitle>
                 <CardDescription>{item.value}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

       <div className="text-center mt-16">
            <h2 className="text-2xl md:text-3xl font-outfit-semibold mb-6">Não encontrou o que precisa?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Nossa equipe pode desenvolver a solução de IA ideal para o seu desafio específico.
            </p>
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-outfit-regular">
              <Link href="/contato?produto=customizado">Fale Sobre Sua Necessidade</Link>
            </Button>
          </div>

    </div>
  );
}
