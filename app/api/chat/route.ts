import { AIService } from '@/services/ai-service'
import { client } from '@/lib/supabase/client'

export async function POST(req: Request) {
  const { message, conversation_id } = await req.json()

  // Guardar mensaje usuario
  await client.from('messages').insert({
    conversation_id, role: 'user', content: message
  })

  // Obtener conversación y agente
  const { data: conversation } = await client
    .from('conversations')
    .select('*, agents(*)')
    .eq('id', conversation_id)
    .single()

  // Generar respuesta
  const reply = await AIService.sendMessage(
    'gemini',
    [{ content: message }],
    conversation.agents.base_prompt
  )

  // Guardar respuesta
  await client.from('messages').insert({
    conversation_id, role: 'assistant', content: reply
  })

  return Response.json({ reply })
}