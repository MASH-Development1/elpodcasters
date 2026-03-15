import type { Metadata } from 'next'
import { Inter, Cairo } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LoadingProvider } from '@/contexts/loading-context'
import { LoadingScreen } from '@/components/loading-screen'
import { PageTransition } from '@/components/page-transition'
import { Navbar } from '@/components/navbar'
import { RouteTransition } from '@/components/route-transition'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const cairo = Cairo({ subsets: ['arabic', 'latin'], variable: '--font-cairo' });

export const metadata: Metadata = {
  title: 'El-Podcasters - Conversations that Inspire',
  description: 'Explore knowledge universes with El-Podcasters. Discover conversations that inspire and knowledge that stays. From the heart of Egypt to minds around the world.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${cairo.variable} font-sans antialiased dark`}>
        <LoadingProvider>
          <LoadingScreen />
          <PageTransition />
          <RouteTransition />
          <Navbar />
          {children}
          <Analytics />
        </LoadingProvider>
      </body>
    </html>
  )
}
