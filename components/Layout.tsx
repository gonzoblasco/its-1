import Link from 'next/link'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">InnoTech Solutions</Link>
          <Link href="/agents" className="text-blue-600 hover:underline">Agentes</Link>
        </div>
      </nav>
      {children}
    </div>
  )
}