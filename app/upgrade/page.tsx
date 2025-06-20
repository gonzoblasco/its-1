import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const plans = [
  { id: 'free', name: 'Gratuito', price: 0, features: ['3 agentes básicos', '50 mensajes/mes'] },
  { id: 'pro', name: 'Pro', price: 1900, features: ['Todos los agentes', '500 mensajes/mes'], popular: true },
  { id: 'elite', name: 'Elite', price: 3900, features: ['Todo Pro', '1000 mensajes/mes', 'Soporte prioritario'] }
]

export default function UpgradePage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Elige tu Plan</h1>
      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {plans.map(plan => (
          <Card key={plan.id} className={`p-6 ${plan.popular ? 'ring-2 ring-blue-500' : ''}`}>
            {plan.popular && <Badge className="mb-4">Más Popular</Badge>}
            <h3 className="text-xl font-bold">{plan.name}</h3>
            <p className="text-3xl font-bold">${plan.price}</p>
            <ul className="mt-4 space-y-2">
              {plan.features.map(feature => (
                <li key={feature} className="text-sm">✓ {feature}</li>
              ))}
            </ul>
            <Button className="w-full mt-6" disabled={plan.id === 'free'}>
              {plan.id === 'free' ? 'Plan Actual' : 'Seleccionar'}
            </Button>
          </Card>
        ))}
      </div>
    </div>
  )
}