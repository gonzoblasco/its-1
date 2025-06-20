export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-4">InnoTech Solutions</h1>
      <p className="text-xl text-gray-600">
        Agentes Conversacionales para Emprendedores
      </p>
      <div className="mt-8 space-x-4">
        <span className="px-4 py-2 bg-green-100 text-green-800 rounded">✅ Gemini API</span>
        <span className="px-4 py-2 bg-green-100 text-green-800 rounded">✅ Claude API</span>
      </div>
    </main>
  );
}