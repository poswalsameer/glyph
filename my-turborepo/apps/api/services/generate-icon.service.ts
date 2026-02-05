import { GoogleGenAI } from "@google/genai"
import { OpenRouter } from "@openrouter/sdk"

export async function generateIconService(userPrompt: string) {
  try {
    const openrouter = new OpenRouter({
      apiKey: process.env.OPENROUTER_API_KEY
    })

    const stream = await openrouter.chat.send({
      model: "z-ai/glm-4.5-air:free",
      messages: [
        {
          "role": "user",
          "content": "What is the meaning of life?"
        }
      ],
      stream: true
    })

    for await (const chunk of stream) {
      const content = chunk.choices[0]?.delta?.content
      if (content) {
        console.log(content)
      }
    }


  } catch (error) {
    console.error(`SERVICE: Error while generating app icon: ${JSON.stringify(error, null, 2)}`)
    return {
      success: false,
      // @ts-expect-error -- error type handling
      message: error.message || 'Failed to generate icon'
    }
  }
}