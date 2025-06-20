export default function CreditsCounter({ credits = 50 }: { credits?: number }) {
  return (
    <div className="bg-blue-100 px-3 py-1 rounded-full text-sm">
      ⚡ {credits} créditos
    </div>
  )
}