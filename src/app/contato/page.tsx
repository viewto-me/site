import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Building, Phone } from "lucide-react";
import ContactForm from "@/components/contact/contact-form"; // Import the client component

export default function ContatoPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-outfit-semibold mb-4">Entre em Contato</h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Estamos prontos para ajudar você a extrair o máximo valor dos seus dados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info Section */}
          <div className="space-y-8">
             <div>
               <h2 className="text-2xl font-outfit-medium mb-4">Informações de Contato</h2>
               <div className="space-y-4">
                 <div className="flex items-center gap-3">
                   <Mail className="h-5 w-5 text-primary" />
                   <a href="mailto:contact@viewto.me" className="text-lg text-foreground hover:text-primary transition-colors">
                     contact@viewto.me
                   </a>
                 </div>
                 {/* Optional: Add address and phone if applicable */}
                 {/*
                 <div className="flex items-center gap-3">
                   <Building className="h-5 w-5 text-primary" />
                   <span className="text-lg text-muted-foreground">Seu Endereço Físico, Cidade, Estado</span>
                 </div>
                 <div className="flex items-center gap-3">
                   <Phone className="h-5 w-5 text-primary" />
                   <span className="text-lg text-muted-foreground">+55 (XX) XXXX-XXXX</span>
                 </div>
                 */}
               </div>
             </div>
             <div>
               <h3 className="text-xl font-outfit-medium mb-2">Prefere um contato direto?</h3>
               <p className="text-muted-foreground mb-4">
                 Envie um e-mail diretamente para <a href="mailto:contact@viewto.me" className="text-primary hover:underline">contact@viewto.me</a> e nossa equipe responderá o mais breve possível.
               </p>
             </div>
              <div>
                <h3 className="text-xl font-outfit-medium mb-2">Consultas Específicas</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Para vendas e parcerias: <a href="mailto:sales@viewto.me" className="text-primary hover:underline">sales@viewto.me</a></li>
                    <li>Para suporte técnico: <a href="mailto:support@viewto.me" className="text-primary hover:underline">support@viewto.me</a></li>
                </ul>
             </div>
          </div>

          {/* Contact Form Section */}
          <div>
            <h2 className="text-2xl font-outfit-medium mb-6">Ou envie sua mensagem</h2>
            <ContactForm /> {/* Use the client component for the form */}
          </div>
        </div>
      </div>
    </div>
  );
}
