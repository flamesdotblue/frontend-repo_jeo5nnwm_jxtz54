import { Coins, Award } from 'lucide-react'

function tierLabel(credits) {
  if (credits >= 500) return 'Platinum Guardian'
  if (credits >= 250) return 'Gold Guardian'
  if (credits >= 100) return 'Silver Guardian'
  if (credits >= 50) return 'Bronze Guardian'
  return 'New Cleaner'
}

function CreditsCard({ totalCredits, submissionsCount }) {
  const tier = tierLabel(totalCredits)
  const progress = Math.min(100, Math.round((totalCredits % 100) / 100 * 100))

  return (
    <section className="rounded-2xl border border-gray-200 bg-gradient-to-br from-amber-50/60 to-white shadow-sm overflow-hidden">
      <div className="p-6 sm:p-8">
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-1">
            <h2 className="text-xl font-semibold tracking-tight">Your Credits</h2>
            <p className="text-sm text-gray-600">Earn more by submitting verified cleanups.</p>
          </div>
          <div className="h-10 w-10 rounded-full bg-amber-500 text-white grid place-items-center">
            <Coins className="h-5 w-5" />
          </div>
        </div>

        <div className="mt-6 grid sm:grid-cols-3 gap-4">
          <div className="rounded-xl border bg-white p-4">
            <p className="text-xs text-gray-500">Total Credits</p>
            <p className="mt-1 text-2xl font-semibold">{totalCredits}</p>
          </div>
          <div className="rounded-xl border bg-white p-4">
            <p className="text-xs text-gray-500">Submissions</p>
            <p className="mt-1 text-2xl font-semibold">{submissionsCount}</p>
          </div>
          <div className="rounded-xl border bg-white p-4">
            <p className="text-xs text-gray-500">Status</p>
            <p className="mt-1 inline-flex items-center gap-2 text-sm font-medium">
              <Award className="h-4 w-4 text-amber-500" /> {tier}
            </p>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>Next reward</span>
            <span>{100 - (totalCredits % 100)} credits</span>
          </div>
          <div className="mt-2 h-2 w-full rounded-full bg-gray-200 overflow-hidden">
            <div
              className="h-full bg-amber-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CreditsCard
