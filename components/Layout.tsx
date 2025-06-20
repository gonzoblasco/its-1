'use client'
import Link from 'next/link'
import CreditsCounter from './ui/CreditsCounter'
import { useAuth } from '@/lib/auth-context'

export default function Layout({ children }: { children: React.ReactNode }) {
  const { user, loading, signOut } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">InnoTech Solutions</Link>
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <CreditsCounter />
                <Link href="/agents" className="text-blue-600 hover:underline">Agentes</Link>
                <Link href="/conversations" className="text-blue-600 hover:underline">Historial</Link>
                <Link href="/upgrade" className="text-purple-600 hover:underline font-medium">Upgrade</Link>
                <button onClick={signOut} className="text-red-600 hover:underline text-sm">
                  Salir
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="text-blue-600 hover:underline">Iniciar Sesión</Link>
                <Link href="/register" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm">
                  Registrarse
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
      {children}
    </div>
  )
}