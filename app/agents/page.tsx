import { supabase } from '@/lib/supabase'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default async function AgentsPage() {
  const { data: agents } = await supabase.from('agents').select('*').eq('is_active', true)

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Agentes Disponibles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {agents?.map(agent => (
          <Card key={agent.id} className="p-6">
            <h3 className="font-semibold">{agent.name}</h3>
            <p className="text-sm text-gray-600 mb-4">{agent.description}</p>
            <Button asChild>
              <a href={`/chat/${agent.id}`}>Comenzar Chat</a>
            </Button>
          </Card>
        ))}
      </div>
    </div>
  )
}