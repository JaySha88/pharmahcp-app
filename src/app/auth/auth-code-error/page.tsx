import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function AuthCodeError() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Authentication Error
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            There was an error confirming your email. This could be because:
          </p>
          <ul className="mt-4 text-sm text-gray-600 text-left">
            <li>• The link has expired</li>
            <li>• The link has already been used</li>
            <li>• There was a configuration issue</li>
          </ul>
          <div className="mt-6">
            <Link href="/signup">
              <Button>Try Signing Up Again</Button>
            </Link>
          </div>
          <div className="mt-4">
            <Link href="/login">
              <Button variant="outline">Go to Sign In</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
