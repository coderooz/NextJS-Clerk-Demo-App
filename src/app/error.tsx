// app/error.tsx
'use client'
export default function GlobalError({ error }: { error: Error }) {
  return (
    <html>
      <body className="mx-auto max-w-3xl p-6">
        <h2 className="text-xl font-semibold">Something went wrong</h2>
        <pre className="mt-4 rounded bg-gray-100 p-4 text-sm">{error.message}</pre>
      </body>
    </html>
  )
}