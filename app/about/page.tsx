import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <main className="container px-4 py-8 mx-auto">
      <h1 className="text-3xl font-bold mb-6">About AI Translator</h1>

      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Our Mission</CardTitle>
            <CardDescription>Breaking language barriers with AI</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              AI Translator aims to bridge communication gaps across Indian languages using cutting-edge AI technology.
              We combine OpenAI's powerful language models with Bhashini's specialized Indian language capabilities to
              provide accurate, contextual translations that preserve meaning and nuance.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Technology</CardTitle>
            <CardDescription>Powered by advanced AI</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-1">OpenAI Integration</h3>
                <p className="text-sm text-muted-foreground">
                  We leverage OpenAI's GPT models for advanced text processing, including summarization, paraphrasing,
                  and content generation.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-1">Bhashini API</h3>
                <p className="text-sm text-muted-foreground">
                  Bhashini is India's AI-led language translation platform that helps us provide accurate translations
                  for various Indian languages with cultural context and nuance.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>How It Works</CardTitle>
            <CardDescription>The translation process explained</CardDescription>
          </CardHeader>
          <CardContent>
            <ol className="space-y-4 list-decimal list-inside">
              <li className="text-muted-foreground">
                <span className="font-medium text-foreground">Input Text:</span> Users enter text in any supported
                language.
              </li>
              <li className="text-muted-foreground">
                <span className="font-medium text-foreground">Language Detection:</span> Our system automatically
                identifies the source language.
              </li>
              <li className="text-muted-foreground">
                <span className="font-medium text-foreground">AI Processing:</span> The text is processed using OpenAI
                models for any requested transformations.
              </li>
              <li className="text-muted-foreground">
                <span className="font-medium text-foreground">Translation:</span> Bhashini API translates the content to
                the target language.
              </li>
              <li className="text-muted-foreground">
                <span className="font-medium text-foreground">Delivery:</span> The translated text is presented to the
                user with high accuracy.
              </li>
            </ol>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}

