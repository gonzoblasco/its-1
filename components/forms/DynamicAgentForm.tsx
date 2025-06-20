'use client'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import { client } from '@/lib/supabase/client'

export default function DynamicAgentForm({ agent, onComplete }: { agent: any, onComplete: (data: any) => void }) {
  const [formFields, setFormFields] = useState([])
  const [formData, setFormData] = useState({})

  useEffect(() => {
    loadFormFields()
  }, [agent.id])

  const loadFormFields = async () => {
    const { data } = await client
      .from('agent_form_fields')
      .select('*')
      .eq('agent_id', agent.id)
      .order('field_order')
    setFormFields(data || [])
  }

  const renderField = (field: any) => {
    if (field.field_type === 'select') {
      return (
        <select
          className="w-full p-2 border rounded"
          onChange={(e) => setFormData({...formData, [field.field_name]: e.target.value})}
        >
          <option value="">Seleccionar...</option>
          {field.field_options.map((opt: string) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      )
    }
    return (
      <Input
        placeholder={field.field_label}
        onChange={(e) => setFormData({...formData, [field.field_name]: e.target.value})}
      />
    )
  }

  return (
    <Card className="p-6 max-w-md mx-auto">
      <h3 className="font-semibold mb-4">Configura tu consulta con {agent.name}</h3>

      <div className="space-y-4">
        {formFields.map(field => (
          <div key={field.id}>
            <label className="block text-sm font-medium mb-1">
              {field.field_label}
            </label>
            {renderField(field)}
          </div>
        ))}

        <Button onClick={() => onComplete(formData)} className="w-full">
          Comenzar Chat
        </Button>
      </div>
    </Card>
  )
}