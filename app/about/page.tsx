import { Navigation } from '../components/navigation'

export default function About() {
  return (
    <main className="relative bg-black text-white min-h-screen">
      <Navigation />
      <div className="container mx-auto px-8 py-24 pt-32">
        <h1 className="text-4xl font-bold mb-8 text-center text-[#FF4500]">About Us</h1>
        <div className="max-w-3xl mx-auto text-lg text-justify">
          <p className="mb-4">
            Welcome to BoxyBuildCon, where innovation in design and construction comes to life. We are a passionate team of architects, designers, and builders dedicated to creating spaces that are not only beautiful but also functional and sustainable.
          </p>
          <p className="mb-4">
            Our philosophy is centered around a collaborative approach, working closely with our clients to understand their vision and bring it to reality. We believe that every project is a unique opportunity to create something extraordinary.
          </p>
          <p className="mb-4">
            With years of experience in the industry, we have a proven track record of delivering high-quality projects on time and within budget. Our portfolio showcases a diverse range of projects, from residential homes to commercial spaces, all built with the same commitment to excellence.
          </p>
          <p>
            At BoxyBuildCon, we are more than just builders; we are creators of environments that inspire and enhance the lives of those who inhabit them.
          </p>
        </div>
      </div>
    </main>
  )
}
