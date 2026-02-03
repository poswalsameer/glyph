import { generateImage } from "ai"
import systemPrompt from "../utils/system-prompt"

export async function generateIconService(userPrompt: string) {
  try {
    const { image } = await generateImage({
      model: 'black-forest-labs/flux.2-klein-4b',
      prompt: `${systemPrompt}\n\n${userPrompt}`,
    })

    console.log(JSON.stringify(image, null, 2))

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