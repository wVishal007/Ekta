import { Suspense } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import TranslationForm from "@/components/translation-form"
import LoadingFallback from "@/components/loading-fallback"
import RecentTranslations from "@/components/recent-translations"

export default function DashboardPage() {
  return (
    <main className="container px-4 py-8 mx-auto">
      <h1 className="text-3xl font-bold mb-6">Translation Dashboard</h1>

      <div className="grid gap-6">
        <TranslationForm />

        <Card>
          <CardHeader>
            <CardTitle>Translation History</CardTitle>
            <CardDescription>Your recent translation activities</CardDescription>
          </CardHeader>
          <CardContent>
            <Suspense fallback={<LoadingFallback />}>
              <RecentTranslations />
            </Suspense>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}

