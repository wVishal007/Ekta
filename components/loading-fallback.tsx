import { Loader2 } from "lucide-react"

export default function LoadingFallback() {
  return (
    <div className="w-full flex justify-center py-12">
      <div className="flex flex-col items-center gap-2">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <p className="text-sm text-muted-foreground">Loading translations...</p>
      </div>
    </div>
  )
}

