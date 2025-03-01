import { Suspense } from "react"
import Hero from "@/components/hero"
import TranslationForm from "@/components/translation-form"
import Features from "@/components/features"
import RecentTranslations from "@/components/recent-translations"
import LoadingFallback from "@/components/loading-fallback"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <div className="container px-4 py-8 mx-auto">
        <TranslationForm />
        <Suspense fallback={<LoadingFallback />}>
          <RecentTranslations />
        </Suspense>
        <Features />
      </div>
    </main>
  )
}

