// app/dashboard/admin/page.tsx
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { hasRole } from '@/lib/rbac'

export default async function AdminPage() {
  const user = await currentUser()
  if (!user) redirect('/sign-in')

  const role = (user.publicMetadata?.role ?? '') as string
  if (!hasRole(role, ['admin'])) {
    redirect('/access-denied')
  }

  return (
    <div className="space-y-3">
      <h1 className="text-2xl font-semibold">Admin area</h1>
      <p>Only admins should see this.</p>
    </div>
  )
}