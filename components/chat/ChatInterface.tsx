'use client'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import { client } from '@/lib/supabase/client'
import ExportButton from "@/components/chat/ExportButton";

export default function ChatInterface({ agent, conversationId }: { agent: any, conversationId: string }) {
  const [messages, setMessages] = useState<any[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (conversationId) {
      loadMessages()
    }
  }, [conversationId])

  const loadMessages = async () => {
    const { data } = await client
      .from('messages')
      .select('*')
      .eq('conversation_id', conversationId)
      .order('created_at', { ascending: true })

    setMessages(data || [])
  }

  const sendMessage = async () => {
    if (!input.trim()) return

    const userMessage = { role: 'user', content: input }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setLoading(true)

    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message: input,
        conversation_id: conversationId
      })
    })

    const { reply } = await response.json()
    setMessages(prev => [...prev, { role: 'assistant', content: reply }])
    setLoading(false)
  }

  return (
    <div className="flex flex-col h-screen p-4">
      <Card className="p-4 mb-4">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="font-bold">{agent.name}</h2>
            <p className="text-sm text-gray-600">{agent.description}</p>
          </div>
          <ExportButton messages={messages} agent={agent} />
        </div>
      </Card>

      <div className="flex-1 overflow-y-auto space-y-4 mb-4">
        {messages.map((msg, i) => (
          <div key={i} className={`p-3 rounded ${msg.role === 'user' ? 'bg-blue-100 ml-auto max-w-xs' : 'bg-gray-100 max-w-md'}`}>
            {msg.content}
          </div>
        ))}
        {loading && <div className="bg-gray-100 p-3 rounded max-w-md">Escribiendo...</div>}
      </div>

      <div className="flex gap-2">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Escribe tu mensaje..."
        />
        <Button onClick={sendMessage} disabled={loading}>Enviar</Button>
      </div>
    </div>
  )
}