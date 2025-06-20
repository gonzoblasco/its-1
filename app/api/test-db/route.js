import { supabase } from '@/lib/supabase'

export async function GET() {
  const { data, error } = await supabase.from('profiles').select('*').limit(1)
  return Response.json({ success: !error, data, error })
}