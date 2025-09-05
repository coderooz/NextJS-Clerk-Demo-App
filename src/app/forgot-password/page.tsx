// app/forgot-password/page.tsx
'use client'
import * as React from 'react'
import { useSignIn } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'

export default function ForgotPasswordPage() {
  const router = useRouter()
  const { isLoaded, signIn, setActive } = useSignIn()
  const [email, setEmail] = React.useState('')
  const [status, setStatus] = React.useState<'idle'|'code_sent'|'verifying'|'done'>('idle')
  const [code, setCode] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [error, setError] = React.useState<string | null>(null)

  if (!isLoaded) return null

  async function sendCode(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    try {
      await signIn!.create({
        strategy: 'reset_password_email_code',
        identifier: email,
      })
      setStatus('code_sent')
    } catch (err: any) {
      setError(err.errors?.[0]?.message ?? 'Failed to send code')
    }
  }

  async function verifyCode(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    try {
      await signIn!.attemptFirstFactor({
        strategy: 'reset_password_email_code',
        code,
      })
      setStatus('verifying')
    } catch (err: any) {
      setError(err.errors?.[0]?.message ?? 'Invalid code')
    }
  }

  async function setNewPassword(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    try {
      const result = await signIn!.resetPassword({ password })
      await setActive!({ session: result.createdSessionId })
      setStatus('done')
      router.push('/dashboard')
    } catch (err: any) {
      setError(err.errors?.[0]?.message ?? 'Failed to reset password')
    }
  }

  return (
    <div className="mx-auto max-w-md space-y-4">
      <h1 className="text-xl font-semibold">Forgot password</h1>

      {status === 'idle' && (
        <form onSubmit={sendCode} className="space-y-3">
          <input className="w-full rounded border p-2" placeholder="your@email.com"
            value={email} onChange={(e) => setEmail(e.target.value)} />
          <button className="rounded bg-black px-4 py-2 text-white">Send reset code</button>
        </form>
      )}

      {status === 'code_sent' && (
        <form onSubmit={verifyCode} className="space-y-3">
          <input className="w-full rounded border p-2" placeholder="Enter code"
            value={code} onChange={(e) => setCode(e.target.value)} />
          <button className="rounded bg-black px-4 py-2 text-white">Verify code</button>
        </form>
      )}

      {status === 'verifying' && (
        <form onSubmit={setNewPassword} className="space-y-3">
          <input className="w-full rounded border p-2" placeholder="New password" type="password"
            value={password} onChange={(e) => setPassword(e.target.value)} />
          <button className="rounded bg-black px-4 py-2 text-white">Set new password</button>
        </form>
      )}

      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  )
}