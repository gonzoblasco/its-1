import { client } from '@/lib/supabase/client'

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const { data: agent } = await client
    .from('agents')
    .select('*')
    .eq('id', params.id)
    .single()

  return Response.json({ agent })
}