import { OpenAI } from "openai"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function processWithOpenAI(text: string, processType: "summarize" | "paraphrase"): Promise<string> {
  try {
    let prompt = ""

    switch (processType) {
      case "summarize":
        prompt = `Summarize the following text concisely while preserving the key information:\n\n${text}`
        break
      case "paraphrase":
        prompt = `Paraphrase the following text to express the same meaning in different words:\n\n${text}`
        break
      default:
        throw new Error(`Unsupported process type: ${processType}`)
    }

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant that processes text according to instructions.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.7,
      max_tokens: 1000,
    })

    return response.choices[0]?.message?.content || ""
  } catch (error) {
    console.error("OpenAI processing error:", error)
    throw error
  }
}

