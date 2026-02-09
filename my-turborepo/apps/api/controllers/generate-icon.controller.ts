import { Request, Response } from "express"
import { generateIconService } from "../services/generate-icon.service"

export async function generateIconController(req: Request, res: Response) {
  const { userPrompt } = req.body

  console.log(`inside controller`)

  if (!userPrompt) {
    return res.status(400).json({
      success: false,
      message: 'User prompt is required'
    })
  }

  try {
    const generateIconServiceResponse = await generateIconService(userPrompt)

    if (!generateIconServiceResponse.success) {
      return res.status(500).json({
        success: false,
        message: generateIconServiceResponse.message || 'Failed to generate icon'
      })
    }

    return res.status(200).json({
      success: true,
      message: 'Icon generated successfully',
      data: generateIconServiceResponse.data
    })
  } catch (error) {
    console.log(`CONTROLLER: Error while generating app icon: ${JSON.stringify(error, null, 2)}`)
    return res.status(500).json({
      success: false,
      // @ts-expect-error -- error type not required
      message: error.message || 'Failed to generate icon'
    })
  }


}