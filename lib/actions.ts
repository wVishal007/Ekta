"use server"

import { connectToDatabase } from "@/lib/mongodb"
import { translateWithBhashini } from "@/lib/bhashini"
import { processWithOpenAI } from "@/lib/openai"

export async function translateText({
  text,
  sourceLanguage,
  targetLanguage,
  processType = "translate",
}: {
  text: string
  sourceLanguage: string
  targetLanguage: string
  processType?: "translate" | "summarize" | "paraphrase"
}) {
  try {
    // Process with OpenAI if needed (summarize, paraphrase, etc.)
    let processedText = text
    if (processType !== "translate") {
      processedText = await processWithOpenAI(text, processType)
    }

    // Translate the text using Bhashini API
    const translatedText = await translateWithBhashini(processedText, sourceLanguage, targetLanguage)

    // Save the translation to the database
    const { db } = await connectToDatabase()
    await db.collection("translations").insertOne({
      sourceText: text,
      translatedText,
      sourceLanguage,
      targetLanguage,
      processType,
      createdAt: new Date(),
    })

    return {
      success: true,
      translatedText,
    }
  } catch (error) {
    console.error("Translation error:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Translation failed",
    }
  }
}

export async function getRecentTranslations(limit = 5) {
  try {
    const { db } = await connectToDatabase()
    const translations = await db.collection("translations").find({}).sort({ createdAt: -1 }).limit(limit).toArray()

    return JSON.parse(JSON.stringify(translations))
  } catch (error) {
    console.error("Error fetching recent translations:", error)
    return []
  }
}

