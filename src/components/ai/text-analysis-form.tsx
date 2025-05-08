"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { analyzeTextInsights, AnalyzeTextInsightsOutput } from "@/ai/flows/analyze-text-insights"; // Ensure correct import path
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Smile, Frown, Meh, AlertTriangle, CheckCircle, Info } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const formSchema = z.object({
  text: z.string().min(20, {
    message: "O texto deve ter pelo menos 20 caracteres para análise.",
  }),
});

const getSentimentIcon = (sentiment: string) => {
    const lowerSentiment = sentiment.toLowerCase();
    if (lowerSentiment.includes('positive') || lowerSentiment.includes('positiv')) return <Smile className="h-5 w-5 text-green-500" />;
    if (lowerSentiment.includes('negative') || lowerSentiment.includes('negativ')) return <Frown className="h-5 w-5 text-red-500" />;
    return <Meh className="h-5 w-5 text-yellow-500" />;
};

const getSatisfactionIcon = (satisfaction: string) => {
    const lowerSatisfaction = satisfaction.toLowerCase();
    if (lowerSatisfaction.includes('very satisfied') || lowerSatisfaction.includes('muito satisfeito')) return <Smile className="h-5 w-5 text-green-600" />;
    if (lowerSatisfaction.includes('satisfied') || lowerSatisfaction.includes('satisfeito')) return <CheckCircle className="h-5 w-5 text-green-500" />;
    if (lowerSatisfaction.includes('dissatisfied') || lowerSatisfaction.includes('insatisfeito')) return <Frown className="h-5 w-5 text-red-500" />;
    return <Meh className="h-5 w-5 text-yellow-500" />;
};


export default function TextAnalysisForm() {
  const [analysisResult, setAnalysisResult] = useState<AnalyzeTextInsightsOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      text: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setError(null);
    setAnalysisResult(null);

    try {
      const result = await analyzeTextInsights({ text: values.text });
      setAnalysisResult(result);
    } catch (err) {
      console.error("Analysis error:", err);
      setError("Falha ao analisar o texto. Tente novamente mais tarde.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
      <Card className="bg-card border border-border/60 shadow-sm">
        <CardHeader>
          <CardTitle className="font-outfit-medium">Analisador de texto</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="text"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Texto para análise</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Ex: 'A entrega atrasou muito e o produto veio danificado. Péssima experiência!' ou 'Adorei o atendimento, super rápido e resolveu meu problema na hora!'"
                        className="min-h-[150px] resize-none"
                        {...field}
                        disabled={isLoading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Analisando...
                  </>
                ) : (
                  "Analisar Texto"
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      <Card className="bg-secondary border border-border/40 shadow-sm min-h-[300px]">
         <CardHeader>
            <CardTitle className="font-outfit-medium">Resultados da análise</CardTitle>
         </CardHeader>
         <CardContent>
            {isLoading && (
              <div className="flex justify-center items-center h-40">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            )}
            {error && (
              <div className="flex items-center gap-2 text-red-600 bg-red-100 p-3 rounded-md">
                <AlertTriangle className="h-5 w-5" />
                <p>{error}</p>
              </div>
            )}
            {!isLoading && !error && !analysisResult && (
                 <div className="flex flex-col items-center justify-center h-40 text-center text-muted-foreground">
                    <Info className="h-8 w-8 mb-2"/>
                    <p>Os resultados da análise aparecerão aqui.</p>
                 </div>
            )}
            {analysisResult && (
              <div className="space-y-4">
                 <div className="flex items-center justify-between p-3 bg-background rounded-md border">
                    <span className="font-outfit-medium flex items-center gap-2">
                        {getSentimentIcon(analysisResult.sentiment)}
                        Sentimento:
                    </span>
                    <Badge variant="outline" className="text-sm">{analysisResult.sentiment || 'N/A'}</Badge>
                 </div>
                 <div className="flex items-center justify-between p-3 bg-background rounded-md border">
                     <span className="font-outfit-medium flex items-center gap-2">
                        {getSatisfactionIcon(analysisResult.satisfactionLevel)}
                        Nível de satisfação:
                    </span>
                    <Badge variant="outline" className="text-sm">{analysisResult.satisfactionLevel || 'N/A'}</Badge>
                 </div>
                 <div>
                    <h4 className="font-outfit-medium mb-1">Problemas identificados:</h4>
                    <p className="text-muted-foreground bg-background p-3 rounded-md border">{analysisResult.underlyingIssues || 'Nenhum problema específico identificado.'}</p>
                 </div>
                 <div>
                    <h4 className="font-outfit-medium mb-1">Resumo:</h4>
                    <p className="text-muted-foreground bg-background p-3 rounded-md border">{analysisResult.summary || 'Não foi possível gerar resumo.'}</p>
                 </div>
              </div>
            )}
         </CardContent>
      </Card>
    </div>
  );
}
