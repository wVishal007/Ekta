import { Suspense } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { getRecentTranslations } from "@/lib/actions"
import LoadingFallback from "@/components/loading-fallback"

async function TranslationHistory() {
  const translations = await getRecentTranslations(20)

  if (!translations || translations.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No translation history found.</p>
        <p className="text-sm text-muted-foreground mt-2">Start translating to build your history.</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {translations.map((translation) => (
        <Card key={translation._id} className="overflow-hidden">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-4 border-b md:border-b-0 md:border-r">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">{translation.sourceLanguage}</span>
                  <span className="text-xs text-muted-foreground">
                    {new Date(translation.createdAt).toLocaleString()}
                  </span>
                </div>
                <p className="text-sm">{translation.sourceText}</p>
              </div>
              <div className="p-4 bg-muted/30">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">{translation.targetLanguage}</span>
                  {translation.processType !== "translate" && (
                    <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                      {translation.processType}
                    </span>
                  )}
                </div>
                <p className="text-sm">{translation.translatedText}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default function HistoryPage() {
  return (
    <main className="container px-4 py-8 mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Translation History</h1>
        <Button variant="outline">Export History</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Your Translations</CardTitle>
          <CardDescription>View and manage your translation history</CardDescription>
        </CardHeader>
        <CardContent>
          <Suspense fallback={<LoadingFallback />}>
            <TranslationHistory />
          </Suspense>
        </CardContent>
      </Card>
    </main>
  )
}

