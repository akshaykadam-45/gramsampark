"use client";

import { useActionState, useEffect, useRef, startTransition } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { getSummary } from "@/lib/actions";
import { Wand2, LoaderCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLocalization } from "@/hooks/use-localization";

type State = {
  summary?: string;
  error?: string;
};

const initialState: State = {
  summary: undefined,
  error: undefined,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  const { t } = useLocalization();

  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground">
      {pending ? (
        <LoaderCircle className="animate-spin mr-2" />
      ) : (
        <Wand2 className="mr-2 h-4 w-4" />
      )}
      {pending ? t('summarizing') : t('summarize')}
    </Button>
  );
}

export function NewsSummarizer() {
  const [state, formAction] = useActionState(getSummary, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const { t, language } = useLocalization();

  useEffect(() => {
    if (state.error) {
      toast({
        title: "Error",
        description: state.error,
        variant: "destructive",
      });
    }
    if (state.summary) {
        formRef.current?.reset();
    }
  }, [state, toast]);

  const sampleArticle = "A new government scheme has been launched to provide financial assistance to small and marginal farmers. The scheme aims to double the income of farmers by 2025. It includes provisions for crop insurance, subsidies on seeds and fertilizers, and better access to credit facilities. The application process is online and requires farmers to register on the official portal with their land details and bank account information. Officials have urged eligible farmers to apply before the deadline to avail the benefits. This initiative is expected to bring significant relief to the agricultural community, which has been facing challenges due to unpredictable weather patterns and market fluctuations.";

  const formActionWithLang = (formData: FormData) => {
    formData.append('targetLanguage', language);
    startTransition(() => formAction(formData));
  }

  return (
    <Card className="w-full shadow-lg">
      <CardHeader>
        <div className="flex items-center gap-4">
            <div className="p-3 bg-accent/10 rounded-full">
                <Wand2 className="h-6 w-6 text-accent"/>
            </div>
            <div>
                <CardTitle className="text-xl font-headline">{t('aiNewsSummarizer')}</CardTitle>
                <CardDescription>
                {t('summarizerDesc')}
                </CardDescription>
            </div>
        </div>
      </CardHeader>
      <form action={formActionWithLang} ref={formRef}>
        <CardContent>
          <Textarea
            name="articleContent"
            placeholder="Paste your news article here..."
            rows={8}
            defaultValue={sampleArticle}
            required
            className="text-base"
          />
        </CardContent>
        <CardFooter className="flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <p className="text-xs text-muted-foreground">
                {t('summariesDisclaimer')}
            </p>
          <SubmitButton />
        </CardFooter>
      </form>
      {state.summary && (
        <>
            <div className="px-6 pb-2">
                <hr/>
            </div>
            <CardContent className="pt-6">
                <div className="mt-4 p-4 border rounded-lg bg-background">
                    <h3 className="font-bold mb-2 font-headline">{t('summary')}</h3>
                    <p className="text-sm leading-relaxed">{state.summary}</p>

                </div>
            </CardContent>
        </>
      )}
    </Card>
  );
}
