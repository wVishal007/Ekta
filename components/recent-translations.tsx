import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { getRecentTranslations } from "@/lib/actions"

export default async function RecentTranslations() {
  const translations = await getRecentTranslations()

  if (!translations || translations.length === 0) {
    return null
  }

  return (
    <Card className="w-full max-w-4xl mx-auto my-8">
      <CardHeader>
        <CardTitle>Recent Translations</CardTitle>
        <CardDescription>Your most recent translation activities</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {translations.map((translation) => (
            <div key={translation._id} className="border rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">
                    {translation.sourceLanguage} → {translation.targetLanguage}
                  </span>
                </div>
                <span className="text-xs text-muted-foreground">
                  {new Date(translation.createdAt).toLocaleString()}
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Original</p>
                  <p className="text-sm">{translation.sourceText}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Translation</p>
                  <p className="text-sm">{translation.translatedText}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

