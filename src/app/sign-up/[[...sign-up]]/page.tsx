
// app/sign-up/[[...sign-up]]/page.tsx
import { SignUp } from '@clerk/nextjs'

export default function SignUpPage() {
  return (
    <div className="mx-auto max-w-md">
      <SignUp
        appearance={{ elements: { formButtonPrimary: 'w-full' } }}
        routing="path"
        path="/sign-up"
        afterSignUpUrl="/dashboard"
      />
    </div>
  )
}