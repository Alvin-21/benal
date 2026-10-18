import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    template: '%s | Benal Digital',
    default: 'Benal Digital',
  },
  description:
    'We design, develop and deliver technology solutions that help businesses operate smarter, connect with their customers and grow in a digital-first world.',
  openGraph: {
    title: 'Benal Digital — Digital Solutions Built for the Future',
    description:
      'Technology solutions that help businesses operate smarter and grow in a digital-first world.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>{children}</body>
    </html>
  )
}