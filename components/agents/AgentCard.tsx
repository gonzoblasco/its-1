import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export default function AgentCard({ agent, userPlan = 'free' }: { agent: any, userPlan?: string }) {
  const canAccess = userPlan === 'free' ? agent.plan_required === 'free' : true

  return (
    <Card className="p-4 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-semibold">{agent.name}</h3>
        <Badge variant={agent.plan_required === 'free' ? 'default' : 'secondary'} className="text-xs">
          {agent.plan_required === 'free' ? 'Free' : 'Pro'}
        </Badge>
      </div>

      <p className="text-xs text-gray-500 mb-2">{agent.category}</p>
      <p className="text-sm text-gray-700 mb-3 line-clamp-2">{agent.description}</p>

      {canAccess ? (
        <Button asChild size="sm" className="w-full">
          <a href={`/chat/${agent.id}`}>Comenzar</a>
        </Button>
      ) : (
        <Button variant="outline" size="sm" className="w-full" disabled>
          Requiere Pro
        </Button>
      )}
    </Card>
  )
}