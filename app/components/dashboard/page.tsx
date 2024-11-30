import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import { authOptions } from "api/auth/[...nextauth]/route"

export default async function DashboardPage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/auth/signin')
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Welcome to your Dashboard</h1>
      <p>You are logged in as {session.user?.email}</p>
    </div>
  )
}

