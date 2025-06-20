import { supabase } from '@/lib/supabase'
import ChatInterface from '@/components/chat/ChatInterface'

export default async function ChatPage({ params }: { params: { agentId: string } }) {
  const { data: agent } = await supabase
    .from('agents')
    .select('*')
    .eq('id', params.agentId)
    .single()

  return <ChatInterface agent={agent} />
}