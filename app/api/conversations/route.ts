import { supabase } from '@/lib/supabase'

export async function POST(req: Request) {
  const { agent_id, form_responses } = await req.json()

  const { data: conversation } = await supabase
    .from('conversations')
    .insert({
      agent_id,
      form_responses,
      title: `Consulta ${new Date().toLocaleDateString()}`
    })
    .select()
    .single()

  return Response.json({ conversation })
}