'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Alert from '@mui/material/Alert'

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl') || '/dashboard'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      })

      if (result?.error) {
        setError('Invalid email or password')
      } else if (result?.ok) {
        router.push(callbackUrl)
      }
    } catch (error) {
      console.error('Sign in error:', error)
      setError('An unexpected error occurred')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-[350px]">
        <CardContent>
          <Typography variant="h5">Sign In</Typography>
          <Typography variant="body2">Enter your credentials to access your account</Typography>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <TextField 
                id="email" 
                label="Email" 
                placeholder="Your email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
                fullWidth
              />
              <TextField 
                id="password" 
                type="password" 
                label="Password" 
                placeholder="Your password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
                fullWidth
              />
            </div>
          </form>
          {error && (
            <Alert severity="error" className="mt-4">
              {error}
            </Alert>
          )}
        </CardContent>
        <CardActions className="flex flex-col">
          <Button 
            className="w-full" 
            onClick={handleSubmit}
            disabled={isLoading}
          >
            {isLoading ? 'Signing in...' : 'Sign In'}
          </Button>
          <div className="mt-4">
            <Button 
              variant="outlined" 
              className="w-full"
              onClick={() => signIn('google', { callbackUrl })}
              disabled={isLoading}
            >
              Sign in with Google
            </Button>
          </div>
          <div className="mt-4 text-sm text-center">
            <a href="#" className="text-blue-500 hover:underline">Forgot password?</a>
          </div>
        </CardActions>
      </Card>
    </div>
  )
}

