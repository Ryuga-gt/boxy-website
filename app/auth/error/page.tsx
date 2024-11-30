'use client'

import { useSearchParams } from 'next/navigation'
import { Card, CardContent, CardHeader, Typography, Button } from '@mui/material'
import Link from "next/link"

export default function AuthError() {
  const searchParams = useSearchParams()
  const error = searchParams.get('error')

  const getErrorMessage = (error: string) => {
    switch (error) {
      case 'Signin':
        return 'Try signing in with a different account.'
      case 'OAuthSignin':
        return 'Try signing in with a different account.'
      case 'OAuthCallback':
        return 'Try signing in with a different account.'
      case 'OAuthCreateAccount':
        return 'Try signing in with a different account.'
      case 'EmailCreateAccount':
        return 'Try signing in with a different account.'
      case 'Callback':
        return 'Try signing in with a different account.'
      case 'OAuthAccountNotLinked':
        return 'To confirm your identity, sign in with the same account you used originally.'
      case 'EmailSignin':
        return 'Check your email address.'
      case 'CredentialsSignin':
        return 'Sign in failed. Check the details you provided are correct.'
      default:
        return 'Unable to sign in.'
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card variant="outlined" style={{ width: 350 }}>
        <CardHeader title="Authentication Error" />
        <CardContent>
          <Typography variant="body2" color="error">
            {error ? getErrorMessage(error) : 'An unknown error occurred'}
          </Typography>
          <div className="flex justify-center">
            <Link href="/auth/signin">
              <Button variant="contained" color="primary">Try Again</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

