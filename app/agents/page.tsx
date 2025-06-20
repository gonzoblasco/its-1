'use client'
import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import AgentCard from '@/components/agents/AgentCard'

export default function AgentsPage() {
  const [agents, setAgents] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = ['all', 'Negocios', 'Marketing', 'Finanzas', 'Ventas', 'Legal', 'Productividad']

  useEffect(() => {
    loadAgents()
  }, [])

  const loadAgents = async () => {
    const { data } = await supabase.from('agents').select('*').eq('is_active', true)
    setAgents(data || [])
  }

  const filteredAgents = selectedCategory === 'all'
    ? agents
    : agents.filter(agent => agent.category === selectedCategory)

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Agentes Disponibles</h1>

      {/* Filtros */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm ${
              selectedCategory === cat
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            {cat === 'all' ? 'Todos' : cat}
          </button>
        ))}
      </div>

      {/* Grid de agentes */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredAgents.map(agent => (
          <AgentCard key={agent.id} agent={agent} />
        ))}
      </div>
    </div>
  )
}