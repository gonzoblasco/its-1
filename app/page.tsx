import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Card className="p-6">
        <h1 className="text-4xl font-bold mb-4">InnoTech Solutions</h1>
        <Button>Comenzar</Button>
      </Card>
    </main>
  );
}