export class AIService {
  static async sendMessage(provider: string, messages: any[], systemPrompt: string) {
    if (provider === 'gemini') {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: `${systemPrompt}\n\nUsuario: ${messages[messages.length - 1].content}` }] }]
        })
      });
      const data = await response.json();
      return data.candidates[0].content.parts[0].text;
    }
  }
}