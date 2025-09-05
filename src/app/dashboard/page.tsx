// app/dashboard/page.tsx
import { currentUser } from '@clerk/nextjs/server';
import { Badge, badgeVariants } from '@/ui/badge';
import { Card, CardHeader, CardTitle, CardContent } from '@/ui/card';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default async function DashboardPage() {
  const user = await currentUser()

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <Badge>Signed in</Badge>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Welcome, {user?.firstName ?? 'user'}!</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p>Explore role-based access and profile management.</p>
          <div className="flex gap-3">
            <Link href="/profile" className={cn(badgeVariants({ variant: 'secondary' }), 'no-underline')}>
              Profile
            </Link>
            <Link href="/dashboard/admin" className={cn(badgeVariants({ variant: 'outline' }), 'no-underline')}>
              Admin area
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}