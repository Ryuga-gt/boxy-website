import { ScrollSections } from './components/scroll-sections'
import { Navigation } from './components/navigation'
import { ProjectsShowcase } from './components/projects-showcase'

export default function Home() {
  return (
    <main className="relative bg-black text-white">
      <Navigation />
      <ScrollSections />
      <ProjectsShowcase />
    </main>
  )
}










