import Link from 'next/link'
import CreditsCounter from './ui/CreditsCounter'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">InnoTech Solutions</Link>
          <div className="flex items-center space-x-4">
            <CreditsCounter />
            <Link href="/agents" className="text-blue-600 hover:underline">Agentes</Link>
            <Link href="/conversations" className="text-blue-600 hover:underline">Historial</Link>
            <Link href="/upgrade" className="text-purple-600 hover:underline font-medium">Upgrade</Link>
          </div>
        </div>
      </nav>
      {children}
    </div>
  )
}