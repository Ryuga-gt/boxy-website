import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import { Button, TextField, Typography, Paper } from '@mui/material'

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    })
    if (result?.ok) {
      router.push('/dashboard')
    } else {
      // Handle error
      console.error('Sign in failed')
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Paper elevation={3} className="w-[350px] p-4">
        <Typography variant="h5" component="h1">Sign In</Typography>
        <Typography variant="body2">Enter your credentials to access your account</Typography>
        <form onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-4">
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              id="password"
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </form>
        <div className="flex flex-col">
          <Button variant="contained" color="primary" className="w-full" onClick={handleSubmit}>Sign In</Button>
          <div className="mt-4">
            <Button variant="outlined" className="w-full" onClick={() => signIn('google', { callbackUrl: '/dashboard' })}>
              Sign in with Google
            </Button>
          </div>
          <div className="mt-4 text-sm text-center">
            <a href="#" className="text-blue-500 hover:underline">Forgot password?</a>
          </div>
        </div>
      </Paper>
    </div>
  )
}

