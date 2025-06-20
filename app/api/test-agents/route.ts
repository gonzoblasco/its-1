import { client } from '@/lib/supabase/client'

export async function GET() {
  const { data, error } = await client.from('agents').select('*')
  return Response.json({ success: !error, agents: data, error })
}