import { supabase } from '@/lib/supabase'

export async function GET() {
  const { data, error } = await supabase.from('agents').select('*')
  return Response.json({ success: !error, agents: data, error })
}