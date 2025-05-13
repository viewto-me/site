'use server';
/**
 * @fileOverview AI-powered text insights flow that performs sentiment analysis,
 * identifies satisfaction levels, and extracts underlying issues from unstructured text data.
 *
 * - analyzeTextInsights - Analyzes text and returns insights.
 * - AnalyzeTextInsightsInput - The input type for the analyzeTextInsights function.
 * - AnalyzeTextInsightsOutput - The return type for the analyzeTextInsights function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzeTextInsightsInputSchema = z.object({
  text: z.string().describe('The unstructured text data to analyze (e.g., customer feedback, chat logs).'),
});
export type AnalyzeTextInsightsInput = z.infer<typeof AnalyzeTextInsightsInputSchema>;

const AnalyzeTextInsightsOutputSchema = z.object({
  sentiment: z.string().describe('The overall sentiment of the text (e.g., positive, negative, neutral).'),
  satisfactionLevel: z.string().describe('The satisfaction level expressed in the text (e.g., very satisfied, satisfied, dissatisfied).'),
  underlyingIssues: z.string().describe('The underlying issues or root causes identified in the text.'),
  summary: z.string().describe('A concise summary of the text.'),
});
export type AnalyzeTextInsightsOutput = z.infer<typeof AnalyzeTextInsightsOutputSchema>;

export async function analyzeTextInsights(input: AnalyzeTextInsightsInput): Promise<AnalyzeTextInsightsOutput> {
  return analyzeTextInsightsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'analyzeTextInsightsPrompt',
  input: {schema: AnalyzeTextInsightsInputSchema},
  output: {schema: AnalyzeTextInsightsOutputSchema},
  prompt: `You are an AI expert in analyzing unstructured text data to extract valuable insights.

  Analyze the following text and identify the sentiment, satisfaction level, underlying issues, and provide a summary.

  Text: {{{text}}}

  Sentiment:
  Satisfaction Level:
  Underlying Issues:
  Summary:`,
});

const analyzeTextInsightsFlow = ai.defineFlow(
  {
    name: 'analyzeTextInsightsFlow',
    inputSchema: AnalyzeTextInsightsInputSchema,
    outputSchema: AnalyzeTextInsightsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
