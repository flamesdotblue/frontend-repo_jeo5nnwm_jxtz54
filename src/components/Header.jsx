import { Leaf, Coins, Camera } from 'lucide-react'

function Header() {
  return (
    <header className="w-full sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-xl bg-green-600 text-white grid place-items-center shadow-md">
            <Leaf className="h-6 w-6" />
          </div>
          <div>
            <p className="text-xl font-semibold tracking-tight">CleanCred</p>
            <p className="text-xs text-gray-500 -mt-1">Clean streets. Earn credits.</p>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <span className="inline-flex items-center gap-2 text-sm text-gray-700">
            <Coins className="h-4 w-4 text-amber-500" /> Earn by helping
          </span>
          <span className="inline-flex items-center gap-2 text-sm text-gray-700">
            <Camera className="h-4 w-4 text-blue-500" /> Snap & submit
          </span>
        </div>
        <a href="#capture" className="px-4 py-2 rounded-lg bg-black text-white text-sm font-medium hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black/20">
          Start Cleaning
        </a>
      </div>
    </header>
  )
}

export default Header
