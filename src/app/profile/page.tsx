// app/profile/page.tsx
import { UserProfile } from '@clerk/nextjs'
import { auth } from '@clerk/nextjs/server'

export default async function ProfilePage() {
  // This ensures only signed-in users can render; middleware also protects the route.
  const { userId } = auth()
  if (!userId) {
    // In practice, middleware will have redirected, but keep a safeguard.
    return null
  }
  return (
    <div className="mx-auto max-w-2xl">
      <UserProfile routing="path" path="/profile" />
    </div>
  )
}