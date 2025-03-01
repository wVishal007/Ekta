"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRightLeft, Loader2 } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { translateText } from "@/lib/actions"

const languages = [
  { code: "en", name: "English" },
  { code: "hi", name: "Hindi" },
  { code: "ta", name: "Tamil" },
  { code: "te", name: "Telugu" },
  { code: "bn", name: "Bengali" },
  { code: "mr", name: "Marathi" },
  { code: "gu", name: "Gujarati" },
  { code: "kn", name: "Kannada" },
  { code: "ml", name: "Malayalam" },
  { code: "pa", name: "Punjabi" },
]

export default function TranslationForm() {
  const [sourceText, setSourceText] = useState("")
  const [translatedText, setTranslatedText] = useState("")
  const [sourceLanguage, setSourceLanguage] = useState("en")
  const [targetLanguage, setTargetLanguage] = useState("hi")
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSwapLanguages = () => {
    setSourceLanguage(targetLanguage)
    setTargetLanguage(sourceLanguage)
    setSourceText(translatedText)
    setTranslatedText(sourceText)
  }

  const handleTranslate = async () => {
    if (!sourceText.trim()) {
      toast({
        title: "Input required",
        description: "Please enter some text to translate",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)
    try {
      const result = await translateText({
        text: sourceText,
        sourceLanguage,
        targetLanguage,
      })

      if (result.success) {
        setTranslatedText(result.translatedText)
        toast({
          title: "Translation complete",
          description: "Your text has been successfully translated",
        })
      } else {
        throw new Error(result.error || "Translation failed")
      }
    } catch (error) {
      toast({
        title: "Translation failed",
        description: error instanceof Error ? error.message : "An unexpected error occurred",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-4xl mx-auto my-8">
      <CardHeader>
        <CardTitle>Translate Text</CardTitle>
        <CardDescription>
          Enter text and select languages to translate between English and Indian languages
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Select value={sourceLanguage} onValueChange={setSourceLanguage}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Source Language" />
                </SelectTrigger>
                <SelectContent>
                  {languages.map((lang) => (
                    <SelectItem key={lang.code} value={lang.code}>
                      {lang.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Textarea
              placeholder="Enter text to translate"
              className="min-h-[200px]"
              value={sourceText}
              onChange={(e) => setSourceText(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Select value={targetLanguage} onValueChange={setTargetLanguage}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Target Language" />
                </SelectTrigger>
                <SelectContent>
                  {languages.map((lang) => (
                    <SelectItem key={lang.code} value={lang.code}>
                      {lang.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Textarea
              placeholder="Translation will appear here"
              className="min-h-[200px]"
              value={translatedText}
              readOnly
            />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={handleSwapLanguages} disabled={isLoading}>
          <ArrowRightLeft className="mr-2 h-4 w-4" />
          Swap Languages
        </Button>
        <Button onClick={handleTranslate} disabled={isLoading}>
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Translating...
            </>
          ) : (
            "Translate"
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}

