import { generateIconService } from "../services/generate-icon.service"

export function generateIconController(req: any, res: any) {
  // Validating request

  generateIconService()
  res.json({ message: 'Generate Icon' })
}