// app/layout.tsx
import type { Metadata } from 'next'
import { ClerkProvider, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import './globals.css'

export const metadata: Metadata = {
  title: 'Next.js Clerk Demo',
  description: 'Auth + RBAC with Clerk on Next.js App Router',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="min-h-dvh bg-background text-foreground">
          <header className="border-b">
            <nav className="mx-auto flex max-w-6xl items-center justify-between p-4">
              <div className="flex items-center gap-4">
                <Link href="/" className="font-semibold">Clerk Demo</Link>
                <Link href="/dashboard" className="text-sm opacity-80 hover:opacity-100">
                  Dashboard
                </Link>
                <Link href="/profile" className="text-sm opacity-80 hover:opacity-100">
                  Profile
                </Link>
              </div>

              <div className="flex items-center gap-3">
                <SignedOut>
                  <Link href="/sign-in" className="text-sm underline">Sign in</Link>
                  <Link href="/sign-up" className="text-sm underline">Sign up</Link>
                </SignedOut>
                <SignedIn>
                  <UserButton afterSignOutUrl="/" />
                </SignedIn>
              </div>
            </nav>
          </header>
          <main className="mx-auto max-w-6xl p-6">{children}</main>
        </body>
      </html>
    </ClerkProvider>
  )
}
