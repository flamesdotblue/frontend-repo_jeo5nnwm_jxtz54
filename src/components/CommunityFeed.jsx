import { Users, Image as ImageIcon, MapPin } from 'lucide-react'

function CommunityFeed({ items }) {
  return (
    <section className="rounded-2xl border border-gray-200 bg-white shadow-sm">
      <div className="p-6 sm:p-8">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-xl font-semibold tracking-tight">Community Feed</h2>
            <p className="text-sm text-gray-600">See recent cleanups shared by everyone.</p>
          </div>
          <div className="h-10 w-10 rounded-full bg-gray-900 text-white grid place-items-center">
            <Users className="h-5 w-5" />
          </div>
        </div>

        {items.length === 0 ? (
          <div className="mt-8 rounded-xl border border-dashed bg-gray-50 p-8 text-center text-gray-600">
            <ImageIcon className="h-8 w-8 mx-auto text-gray-400" />
            <p className="mt-2 text-sm">No submissions yet. Your first cleanup will appear here.</p>
          </div>
        ) : (
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((it, idx) => (
              <article key={idx} className="group overflow-hidden rounded-xl border bg-white shadow-sm hover:shadow-md transition">
                <div className="aspect-video w-full overflow-hidden bg-gray-100">
                  <img src={it.imageUrl} alt={it.description || 'Cleanup'} className="h-full w-full object-cover group-hover:scale-[1.02] transition" />
                </div>
                <div className="p-4">
                  <p className="text-sm font-medium line-clamp-2">{it.description || 'Cleanup submission'}</p>
                  <div className="mt-2 flex items-center justify-between text-xs text-gray-500">
                    <span className="inline-flex items-center gap-1"><MapPin className="h-3 w-3" /> {it.location || 'Unknown'}</span>
                    <span className="font-semibold text-gray-700">+{it.credits} credits</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default CommunityFeed
