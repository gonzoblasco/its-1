import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12 text-center">
      <h1 className="text-5xl font-bold mb-6">Agentes Conversacionales Especializados</h1>
      <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        Plataforma de IA para emprendedores y PyMEs. Cada agente es un experto en su área.
      </p>
      <Button asChild size="lg">
        <Link href="/agents">Explorar Agentes</Link>
      </Button>
    </div>
  )
}