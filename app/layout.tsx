import { AuthProvider } from '@/lib/auth-context'
import Layout from '@/components/Layout'
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
    <body>
    <AuthProvider>
      <Layout>{children}</Layout>
    </AuthProvider>
    </body>
    </html>
  );
}