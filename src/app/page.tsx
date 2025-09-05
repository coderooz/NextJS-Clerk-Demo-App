// app/page.tsx
export default function HomePage() {
  return (
    <section className="space-y-3">
      <h1 className="text-2xl font-semibold">Welcome 👋</h1>
      <p>This is a tiny demo of Clerk auth + RBAC on Next.js 15 (App Router).</p>
      <ul className="list-disc pl-5">
        <li>Try <b>/sign-in</b> or <b>/sign-up</b></li>
        <li>Then open <b>/dashboard</b> and <b>/profile</b></li>
      </ul>
    </section>
  )
}
