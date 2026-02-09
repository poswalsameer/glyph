export function generateSystemPrompt(userPrompt: string) {
  // Base structural components for a high-quality iOS app icon
  const qualityTokens = [
    "High fidelity 3D render",
    "8k resolution",
    "Unreal Engine 5",
    "super detailed",
    "vector style",
    "smooth gradients"
  ]

  const lightingTokens = [
    "Soft studio lighting",
    "volumetric lighting",
    "rim lighting",
    "ambient occlusion",
    "raytraced shadows"
  ]

  const photographyTokens = [
    "Macro photography",
    "sharp focus",
    "high contrast",
    "depth of field",
    "f/1.8 aperture"
  ]

  const styleTokens = [
    "iOS App Icon Design",
    "Squircle shape",
    "Minimalist",
    "Modern",
    "Glossy",
    "Premium",
    "Glassmorphism"
  ]

  // Construct the final prompt
  // Formula: [Subject] + [Style/Context] + [Material/Texture] + [Lighting] + [Photography/Quality]
  const prompt = [
    `A professional iOS app icon design of ${userPrompt}`,
    "Composition: Centered, simplistic, scalable, squircle shape",
    "Background: solid white, plain, minimal, no noise, no patterns",
    `Style: ${styleTokens.join(", ")}`,
    `Lighting: ${lightingTokens.join(", ")}`,
    `Photography: ${photographyTokens.join(", ")}`,
    `Quality: ${qualityTokens.join(", ")}`,
    "no text, no letters, no characters, no chaotic background, no scrambled lines, no noise"
  ].join(". ")

  return prompt
}