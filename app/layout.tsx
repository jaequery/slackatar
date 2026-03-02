import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Slackatar - Daily Avatar Video Generation',
  description: 'Automated daily avatar videos summarizing your completed tasks from Linear. Beautiful, professional, effortless.',
  keywords: ['avatar', 'video', 'automation', 'Linear', 'daily'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  )
}
