import { useState } from 'react'
import Header from './components/Header'
import CaptureCard from './components/CaptureCard'
import CreditsCard from './components/CreditsCard'
import CommunityFeed from './components/CommunityFeed'

function App() {
  const [credits, setCredits] = useState(0)
  const [submissions, setSubmissions] = useState([])

  const handleSubmit = (entry) => {
    setSubmissions((prev) => [entry, ...prev])
    setCredits((c) => c + entry.credits)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 text-gray-900">
      <Header />

      <main className="max-w-6xl mx-auto px-4 pb-16">
        <section className="pt-10 sm:pt-14">
          <div className="rounded-3xl border border-gray-200 bg-white overflow-hidden shadow-sm">
            <div className="p-6 sm:p-10 grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-tight">
                  Turn cleanups into real rewards
                </h1>
                <p className="mt-3 text-gray-600 max-w-prose">
                  Snap a photo after cleaning a spot, share a short note, and instantly earn credits. The more impact you make, the more you earn.
                </p>
                <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                  <div className="rounded-xl border bg-gray-50 p-3">
                    <p className="text-xs text-gray-500">Credits</p>
                    <p className="text-xl font-semibold">{credits}</p>
                  </div>
                  <div className="rounded-xl border bg-gray-50 p-3">
                    <p className="text-xs text-gray-500">Submissions</p>
                    <p className="text-xl font-semibold">{submissions.length}</p>
                  </div>
                  <div className="rounded-xl border bg-gray-50 p-3">
                    <p className="text-xs text-gray-500">Impact</p>
                    <p className="text-xl font-semibold">{submissions.reduce((a,b)=>a+b.impact,0)}</p>
                  </div>
                </div>
              </div>
              <div className="">
                <CaptureCard onSubmit={handleSubmit} />
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <CreditsCard totalCredits={credits} submissionsCount={submissions.length} />
          </div>
          <div className="lg:col-span-2">
            <CommunityFeed items={submissions} />
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
