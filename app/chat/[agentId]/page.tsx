'use client'
import { useState, useEffect, use } from 'react'
import AgentForm from '@/components/forms/AgentForm'
import ChatInterface from '@/components/chat/ChatInterface'

export default function ChatPage({ params }: { params: Promise<{ agentId: string }> }) {
  const { agentId } = use(params)
  const [agent, setAgent] = useState(null)
  const [showForm, setShowForm] = useState(true)
  const [conversationId, setConversationId] = useState(null)

  useEffect(() => {
    fetch(`/api/agents/${agentId}`)
      .then(r => r.json())
      .then(data => setAgent(data.agent))
  }, [agentId])

  const startChat = async (formData: any) => {
    const response = await fetch('/api/conversations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ agent_id: agentId, form_responses: formData })
    })
    const { conversation } = await response.json()

    setConversationId(conversation.id)
    setShowForm(false)
  }

  if (!agent) return <div>Cargando...</div>
  if (showForm) return <AgentForm agent={agent} onComplete={startChat} />
  return <ChatInterface agent={agent} conversationId={conversationId} />
}