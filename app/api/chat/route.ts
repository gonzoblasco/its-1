import { AIService } from '@/services/ai-service'
import { supabase } from '@/lib/supabase'

export async function POST(req: Request) {
  const { message, conversation_id } = await req.json()

  // Guardar mensaje usuario
  await supabase.from('messages').insert({
    conversation_id, role: 'user', content: message
  })

  // Obtener conversación y agente
  const { data: conversation } = await supabase
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
  await supabase.from('messages').insert({
    conversation_id, role: 'assistant', content: reply
  })

  return Response.json({ reply })
}