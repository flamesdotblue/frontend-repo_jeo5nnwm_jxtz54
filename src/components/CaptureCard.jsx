import { useState, useRef, useEffect } from 'react'
import { Camera, Upload, MapPin, CheckCircle } from 'lucide-react'

function CaptureCard({ onSubmit }) {
  const [preview, setPreview] = useState(null)
  const [description, setDescription] = useState('')
  const [location, setLocation] = useState('')
  const [impact, setImpact] = useState(50)
  const [submitting, setSubmitting] = useState(false)
  const fileRef = useRef(null)

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview)
    }
  }, [preview])

  const handleFile = (file) => {
    if (!file) return
    const url = URL.createObjectURL(file)
    setPreview(url)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!preview) return
    setSubmitting(true)
    try {
      const credits = Math.round(10 + (impact / 100) * 40) // 10-50 credits
      await new Promise((r) => setTimeout(r, 600))
      onSubmit({ imageUrl: preview, description, location, impact, credits, createdAt: new Date().toISOString() })
      setDescription('')
      setLocation('')
      setImpact(50)
      setPreview(null)
      if (fileRef.current) fileRef.current.value = ''
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="capture" className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      <div className="absolute inset-0 bg-gradient-to-br from-green-50/60 via-transparent to-blue-50/60 pointer-events-none" />
      <div className="relative p-6 sm:p-8">
        <div className="flex items-start justify-between gap-3 mb-6">
          <div>
            <h2 className="text-xl font-semibold tracking-tight">Capture & Submit</h2>
            <p className="text-sm text-gray-600">Snap the cleaned area and earn credits based on impact.</p>
          </div>
          <div className="h-10 w-10 rounded-full bg-black text-white grid place-items-center">
            <Camera className="h-5 w-5" />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
          <div>
            <div className="aspect-video w-full rounded-xl border border-dashed border-gray-300 bg-gray-50 overflow-hidden grid place-items-center relative">
              {preview ? (
                <img src={preview} alt="Preview" className="h-full w-full object-cover" />
              ) : (
                <div className="text-center p-6">
                  <Upload className="h-10 w-10 mx-auto text-gray-400" />
                  <p className="mt-2 text-sm text-gray-600">Drop a photo here or click to upload</p>
                </div>
              )}
              <input
                ref={fileRef}
                type="file"
                accept="image/*"
                onChange={(e) => handleFile(e.target.files?.[0])}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
            </div>
          </div>

          <div className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-medium">Short description</label>
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="e.g., Cleared plastic bottles and wrappers"
                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black/10"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2"><MapPin className="h-4 w-4 text-pink-500" /> Location</label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Neighborhood, city"
                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black/10"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium">Impact score</label>
                <span className="text-xs text-gray-500">{impact}</span>
              </div>
              <input
                type="range"
                min={0}
                max={100}
                value={impact}
                onChange={(e) => setImpact(parseInt(e.target.value))}
                className="w-full"
              />
              <p className="text-xs text-gray-500">Higher score means larger area or heavier cleanup.</p>
            </div>

            <button
              type="submit"
              disabled={!preview || submitting}
              className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-white text-sm font-medium shadow hover:bg-green-700 disabled:opacity-60"
            >
              <CheckCircle className="h-4 w-4" />
              {submitting ? 'Submitting...' : 'Submit for credits'}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default CaptureCard
