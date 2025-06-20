'use client'
import { useState, useEffect } from 'react'
import { client } from '@/lib/supabase/client'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function ConversationsPage() {
  const [conversations, setConversations] = useState([])

  useEffect(() => {
    loadConversations()
  }, [])

  const loadConversations = async () => {
    const { data } = await client
      .from('conversations')
      .select(`
        *,
        agents(name, category),
        messages(count)
      `)
      .order('created_at', { ascending: false })
    setConversations(data || [])
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Mis Conversaciones</h1>
      <div className="space-y-4">
        {conversations.map(conv => (
          <Card key={conv.id} className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">{conv.title}</h3>
                <p className="text-sm text-gray-600">{conv.agents.name} • {conv.agents.category}</p>
                <p className="text-xs text-gray-500">{new Date(conv.created_at).toLocaleDateString()}</p>
              </div>
              <Button size="sm" asChild>
                <a href={`/chat/${conv.agent_id}?conversation=${conv.id}`}>Continuar</a>
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}