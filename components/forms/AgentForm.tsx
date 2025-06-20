'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'

export default function AgentForm({ agent, onComplete }: { agent: any, onComplete: (data: any) => void }) {
  const [formData, setFormData] = useState({
    business_type: '',
    main_challenge: '',
    timeline: ''
  })

  return (
    <Card className="p-6 max-w-md mx-auto">
      <h3 className="font-semibold mb-4">Configura tu consulta</h3>

      <div className="space-y-4">
        <Input
          placeholder="Tipo de negocio"
          value={formData.business_type}
          onChange={(e) => setFormData({...formData, business_type: e.target.value})}
        />
        <Input
          placeholder="Principal desafío"
          value={formData.main_challenge}
          onChange={(e) => setFormData({...formData, main_challenge: e.target.value})}
        />
        <Input
          placeholder="Timeline (ej: 3 meses)"
          value={formData.timeline}
          onChange={(e) => setFormData({...formData, timeline: e.target.value})}
        />

        <Button onClick={() => onComplete(formData)} className="w-full">
          Comenzar Chat
        </Button>
      </div>
    </Card>
  )
}