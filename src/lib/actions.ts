"use server";

import { summarizeArticle, type SummarizeArticleInput } from "@/ai/flows/summarize-news";
import { z } from "zod";

const SummarizeSchema = z.object({
  articleContent: z.string().min(100, "Article content must be at least 100 characters long."),
  targetLanguage: z.string().default("en"),
});

type State = {
  summary?: string;
  error?: string;
}

export async function getSummary(prevState: State, formData: FormData): Promise<State> {
  const validatedFields = SummarizeSchema.safeParse({
    articleContent: formData.get("articleContent"),
    targetLanguage: formData.get("targetLanguage"),
  });

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors.articleContent?.[0],
    };
  }
  
  try {
    const input: SummarizeArticleInput = {
      articleContent: validatedFields.data.articleContent,
      targetLanguage: validatedFields.data.targetLanguage,
    };
    const result = await summarizeArticle(input);
    return { summary: result.summary };
  } catch (e) {
    console.error(e);
    const errorMessage = e instanceof Error ? e.message : "An unknown error occurred.";
    return { error: `Failed to generate summary: ${errorMessage}` };
  }
}
