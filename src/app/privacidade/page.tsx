export default function PrivacidadePage() {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
      <div className="max-w-3xl mx-auto prose prose-lg dark:prose-invert">
        <h1 className="text-4xl md:text-5xl font-outfit-semibold mb-8">Política de Privacidade</h1>

        <p className="text-muted-foreground mb-6">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>

        <p>
          A viewto.me ("nós", "nosso") valoriza sua privacidade. Esta Política de Privacidade explica como lidamos com as informações no contexto dos nossos serviços de análise e extração de dados ("Serviços").
        </p>

        <h2 className="text-2xl font-outfit-medium mt-8 mb-4">1. Coleta e Uso de Informações</h2>

        <h3 className="text-xl font-outfit-regular mt-6 mb-3">1.1. Dados Processados pelos Nossos Serviços (APIs)</h3>
        <p>
          <strong>Princípio Fundamental: Não Armazenamento por Padrão.</strong> Nosso modelo de negócios padrão, através das APIs Interpretador e Extrator, é baseado no processamento transitório de dados. Quando você envia dados (textos, documentos, etc.) para nossas APIs:
        </p>
        <ul className="list-disc list-inside space-y-2 my-4">
          <li>Os dados são processados em tempo real (ou quase real) pelo nosso motor de IA para gerar os resultados solicitados (KPIs, dados extraídos).</li>
          <li>Os dados originais enviados <strong className="text-primary">não são armazenados</strong> em nossos sistemas após o processamento e a entrega do resultado. Eles são descartados imediatamente.</li>
          <li>Os resultados gerados (KPIs, dados extraídos) também <strong className="text-primary">não são armazenados</strong> por padrão, sendo de sua responsabilidade armazená-los se necessário.</li>
        </ul>
        <p>
          A única exceção a esta regra é se você contratar explicitamente nosso serviço "Visualizador", que requer o armazenamento dos KPIs gerados para exibição no dashboard. Neste caso, os termos específicos de armazenamento e segurança serão detalhados no contrato de serviço.
        </p>

        <h3 className="text-xl font-outfit-regular mt-6 mb-3">1.2. Informações Coletadas pelo Website</h3>
        <p>
          Quando você visita nosso website (viewto.me) ou entra em contato conosco, podemos coletar informações como:
        </p>
        <ul className="list-disc list-inside space-y-2 my-4">
          <li><strong>Informações de Contato:</strong> Nome, e-mail, nome da empresa, e mensagem, caso você preencha nosso formulário de contato ou nos envie um e-mail. Usamos essas informações para responder às suas solicitações.</li>
          <li><strong>Dados de Uso do Website:</strong> Podemos coletar informações sobre como você interage com nosso site (páginas visitadas, tempo de permanência) usando cookies e tecnologias similares, de forma anônima ou agregada, para melhorar a experiência do usuário e analisar tendências.</li>
        </ul>

        <h2 className="text-2xl font-outfit-medium mt-8 mb-4">2. Compartilhamento de Informações</h2>
        <p>
          Não vendemos, alugamos ou compartilhamos suas informações pessoais coletadas através do website com terceiros para fins de marketing. Podemos compartilhar informações:
        </p>
        <ul className="list-disc list-inside space-y-2 my-4">
          <li>Com prestadores de serviço que nos auxiliam na operação do website (hospedagem, análise), sob obrigações de confidencialidade.</li>
          <li>Se exigido por lei ou processo legal.</li>
          <li>Para proteger nossos direitos, propriedade ou segurança, ou os de nossos usuários.</li>
        </ul>
         <p>Os dados processados via API, como explicado, não são armazenados e, portanto, não são compartilhados.</p>


        <h2 className="text-2xl font-outfit-medium mt-8 mb-4">3. Segurança</h2>
        <p>
          Implementamos medidas de segurança técnicas e organizacionais razoáveis para proteger as informações que processamos e coletamos. No entanto, nenhum sistema é 100% seguro.
        </p>
        <p>Para os dados processados via API, a segurança principal reside no nosso modelo de não armazenamento.</p>

        <h2 className="text-2xl font-outfit-medium mt-8 mb-4">4. Seus Direitos</h2>
        <p>
          Você pode ter direitos relacionados às suas informações pessoais coletadas pelo website, como acesso, correção ou exclusão. Entre em contato conosco em <a href="mailto:contact@viewto.me" className="text-primary hover:underline">contact@viewto.me</a> para exercer seus direitos.
        </p>

        <h2 className="text-2xl font-outfit-medium mt-8 mb-4">5. Alterações nesta Política</h2>
        <p>
          Podemos atualizar esta Política de Privacidade periodicamente. A versão mais recente estará sempre disponível em nosso website com a data da última atualização.
        </p>

        <h2 className="text-2xl font-outfit-medium mt-8 mb-4">6. Contato</h2>
        <p>
          Se tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco pelo e-mail <a href="mailto:contact@viewto.me" className="text-primary hover:underline">contact@viewto.me</a>.
        </p>
      </div>
    </div>
  );
}

// Add basic prose styling in globals.css if needed, or rely on Tailwind typography plugin
