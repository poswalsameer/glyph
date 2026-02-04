import { GoogleGenAI } from "@google/genai"

export async function generateIconService(userPrompt: string) {
  try {
    const ai = new GoogleGenAI({})

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: "Explain how AI works in a few words",
    })
    console.log(response.text)

    return {
      success: true,
      message: `Icon generated successfully`,
    }
  } catch (error) {
    console.error(`Error while generating app icon: ${JSON.stringify(error, null, 2)}`)
    return {
      success: false,
      // @ts-expect-error -- error type not required
      message: error.message || 'Failed to generate icon'
    }
  }
}