import { AIService } from '@/services/ai-service'

export async function POST(req: Request) {
  const { message, system_prompt } = await req.json()

  const reply = await AIService.sendMessage('gemini', [{ content: message }], system_prompt)

  return Response.json({ reply })
}