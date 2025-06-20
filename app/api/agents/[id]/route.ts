import { client } from '@/lib/supabase/client'

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  const { data: agent } = await client
    .from('agents')
    .select('*')
    .eq('id', id)
    .single()

  return Response.json({ agent })
}