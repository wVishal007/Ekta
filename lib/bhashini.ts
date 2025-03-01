// Bhashini API integration
// Documentation: https://bhashini.gov.in/ulca/apis

interface BhashiniConfig {
  apiKey: string
  userId: string
  ulcaApiEndpoint: string
}

interface BhashiniResponse {
  status: string
  output: {
    target: {
      text: string
    }[]
  }
}

const bhashiniConfig: BhashiniConfig = {
  apiKey: process.env.BHASHINI_API_KEY || "",
  userId: process.env.BHASHINI_USER_ID || "",
  ulcaApiEndpoint: process.env.BHASHINI_API_ENDPOINT || "https://bhashini.gov.in/api/v1/inference",
}

export async function translateWithBhashini(
  text: string,
  sourceLanguage: string,
  targetLanguage: string,
): Promise<string> {
  try {
    const response = await fetch(bhashiniConfig.ulcaApiEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${bhashiniConfig.apiKey}`,
      },
      body: JSON.stringify({
        userId: bhashiniConfig.userId,
        task: "translation",
        input: {
          source: {
            text: [text],
            language: sourceLanguage,
          },
          target: {
            language: targetLanguage,
          },
        },
      }),
    })

    if (!response.ok) {
      throw new Error(`Bhashini API error: ${response.status}`)
    }

    const data = (await response.json()) as BhashiniResponse

    if (data.status !== "SUCCESS" || !data.output?.target?.length) {
      throw new Error("Translation failed")
    }

    return data.output.target[0].text
  } catch (error) {
    console.error("Bhashini translation error:", error)
    throw error
  }
}

