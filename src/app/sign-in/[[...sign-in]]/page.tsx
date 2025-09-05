// app/sign-in/[[...sign-in]]/page.tsx
import { SignIn } from '@clerk/nextjs'

export default function SignInPage() {
  return (
    <div className="mx-auto max-w-md">
      <SignIn
        appearance={{ elements: { formButtonPrimary: 'w-full' } }}
        routing="path"
        path="/sign-in"
        afterSignInUrl="/dashboard"
      />
    </div>
  )
}