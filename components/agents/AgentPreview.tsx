'use client'
import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function AgentPreview({ agent }: { agent: any }) {
  const [showPrompt, setShowPrompt] = useState(false)

  return (
    <Card className="p-4 mt-4">
      <Button
        variant="outline"
        size="sm"
        onClick={() => setShowPrompt(!showPrompt)}
      >
        {showPrompt ? 'Ocultar' : 'Ver'} Especialización
      </Button>

      {showPrompt && (
        <div className="mt-3 p-3 bg-gray-50 rounded text-sm">
          <pre className="whitespace-pre-wrap">{agent.base_prompt}</pre>
        </div>
      )}
    </Card>
  )
}