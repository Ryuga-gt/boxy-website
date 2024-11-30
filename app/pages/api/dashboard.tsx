import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import { Button, Typography, Grid, Paper, Select, MenuItem, CircularProgress } from '@mui/material'

// Mock data
const projects = [
  { id: 1, name: "Living Room Renovation", progress: 65 },
  { id: 2, name: "Kitchen Remodel", progress: 30 },
]

const milestones = [
  { id: 1, name: "Planning", status: "completed" },
  { id: 2, name: "Design", status: "completed" },
  { id: 3, name: "Execution", status: "in-progress" },
  { id: 4, name: "Final Review", status: "pending" },
]

const photos = [
  { id: 1, url: "/placeholder.svg", caption: "Initial layout" },
  { id: 2, url: "/placeholder.svg", caption: "Color palette selection" },
  { id: 3, url: "/placeholder.svg", caption: "Furniture arrangement" },
]

export default function Dashboard() {
  const { data: session } = useSession()
  const router = useRouter()
  const [selectedProject, setSelectedProject] = useState(projects[0])

  if (!session) {
    router.push('/auth/signin')
    return null
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Typography variant="h4" className="text-gray-900">Dashboard</Typography>
          <nav>
            <Button variant="outlined" className="mr-4">Home</Button>
            <Button variant="outlined" className="mr-4">Projects</Button>
            <Button variant="outlined" className="mr-4">Upload Photos</Button>
            <Button variant="outlined" className="mr-4">Settings</Button>
            <Link href="/auth/signin" passHref>
              <Button variant="outlined" className="mr-4">Login</Button>
            </Link>
            <Button variant="contained" color="secondary">Logout</Button>
          </nav>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <Typography variant="h5" className="mb-6">
              Welcome back, {session.user?.name}! Here&apos;s your latest project progress.
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Paper elevation={3} className="p-4">
                  <Typography variant="h6">Project Progress</Typography>
                  <Select value={selectedProject.id.toString()} onChange={(e) => setSelectedProject(projects.find(p => p.id.toString() === e.target.value)!)}>
                    {projects.map((project) => (
                      <MenuItem key={project.id} value={project.id.toString()}>{project.name}</MenuItem>
                    ))}
                  </Select>
                  <div className="mt-4">
                    <CircularProgress variant="determinate" value={selectedProject.progress} />
                    <Typography variant="body2">{selectedProject.progress}% Complete</Typography>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper elevation={3} className="p-4">
                  <Typography variant="h6">Milestones</Typography>
                  <ul>
                    {milestones.map((milestone) => (
                      <li key={milestone.id} className="flex items-center">
                        <span className={`w-3 h-3 rounded-full mr-2 ${
                          milestone.status === 'completed' ? 'bg-green-500' :
                          milestone.status === 'in-progress' ? 'bg-yellow-500' : 'bg-gray-300'
                        }`}></span>
                        {milestone.name}
                      </li>
                    ))}
                  </ul>
                </Paper>
              </Grid>
            </Grid>
            <Paper className="mt-6 p-4">
              <Typography variant="h6">Project Photos</Typography>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {photos.map((photo) => (
                  <div key={photo.id} className="relative">
                    <Image src={photo.url} alt={photo.caption} width={300} height={200} className="rounded-lg" />
                    <Typography variant="body2" className="mt-2">{photo.caption}</Typography>
                  </div>
                ))}
              </div>
              <Button variant="contained" className="mt-4">Upload New Photo</Button>
            </Paper>
          </div>
        </div>
      </main>
    </div>
  )
}

