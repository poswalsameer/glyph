import { generateSystemPrompt } from "../utils/system-prompt"

export async function generateIconService(userPrompt: string) {
  const invokeUrl = "https://ai.api.nvidia.com/v1/genai/stabilityai/stable-diffusion-3-medium"

  const systemPrompt = generateSystemPrompt(userPrompt)

  const payload = {
    "prompt": systemPrompt,
    "cfg_scale": 5,
    "aspect_ratio": "1:1",
    "seed": 0,
    "steps": 50,
    "negative_prompt": ""
  }

  try {
    const response = await fetch(invokeUrl, {
      method: "post",
      body: JSON.stringify(payload),
      headers: {
        "Authorization": `Bearer ${process.env.NVIDIA_API_KEY}`,
        "Accept": "application/json",
        "Content-Type": "application/json",
      }
    })

    if (response.status !== 200) {
      const errBody = await response.text()
      throw new Error("invocation failed with status " + response.status + " " + errBody)
    }

    const data = await response.json()

    return {
      data,
      success: true,
      message: `Icon generated successfully`,
    }

  } catch (error) {
    console.error(`SERVICE: Error while generating app icon: ${JSON.stringify(error, null, 2)}`)
    return {
      success: false,
      // @ts-expect-error -- ignore this type error
      message: error.message || 'Failed to generate icon'
    }
  }
}