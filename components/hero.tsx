import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <div className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                AI-Powered Translation for Indian Languages
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Seamlessly translate and process text between English and Indian languages using advanced AI technology.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="/dashboard">Get Started</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full h-full min-h-[300px] rounded-lg overflow-hidden bg-muted border shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="p-8 text-center">
                    <div className="text-lg font-semibold mb-2">Supported Languages</div>
                    <div className="grid grid-cols-3 gap-2 text-sm">
                      <div className="p-2 bg-background/80 rounded">Hindi</div>
                      <div className="p-2 bg-background/80 rounded">Tamil</div>
                      <div className="p-2 bg-background/80 rounded">Bengali</div>
                      <div className="p-2 bg-background/80 rounded">Telugu</div>
                      <div className="p-2 bg-background/80 rounded">Marathi</div>
                      <div className="p-2 bg-background/80 rounded">Gujarati</div>
                      <div className="p-2 bg-background/80 rounded">Kannada</div>
                      <div className="p-2 bg-background/80 rounded">Malayalam</div>
                      <div className="p-2 bg-background/80 rounded">Punjabi</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

