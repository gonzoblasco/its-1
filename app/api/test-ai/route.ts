// app/api/test-ai/route.ts
export async function GET() {
  const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: "Hola, ¿funcionas?" }] }]
    })
  });

  const data = await response.json();
  return Response.json({ success: true, response: data });
}