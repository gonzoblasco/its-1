'use client'
import { Button } from '@/components/ui/button'
import { Download, Copy } from 'lucide-react'

export default function ExportButton({ messages, agent }: { messages: any[], agent: any }) {
  const copyToClipboard = () => {
    const text = messages.map(msg =>
      `${msg.role === 'user' ? 'Tú' : agent.name}: ${msg.content}`
    ).join('\n\n')

    navigator.clipboard.writeText(text)
    alert('Conversación copiada!')
  }

  const exportToPDF = () => {
    const printWindow = window.open('', '_blank')
    printWindow?.document.write(`
      <html><head><title>Conversación - ${agent.name}</title></head>
      <body style="font-family: Arial; padding: 20px;">
        <h1>Conversación con ${agent.name}</h1>
        ${messages.map(msg => `
          <div style="margin: 10px 0; padding: 10px; background: ${msg.role === 'user' ? '#e3f2fd' : '#f5f5f5'};">
            <strong>${msg.role === 'user' ? 'Tú' : agent.name}:</strong><br>${msg.content}
          </div>
        `).join('')}
      </body></html>
    `)
    printWindow?.print()
  }

  return (
    <div className="flex gap-2">
      <Button variant="outline" size="sm" onClick={copyToClipboard}>
        <Copy className="w-4 h-4 mr-1" />
        Copiar
      </Button>
      <Button variant="outline" size="sm" onClick={exportToPDF}>
        <Download className="w-4 h-4 mr-1" />
        PDF
      </Button>
    </div>
  )
}