import { useState } from 'react'
import { Package, Heart, User, Menu, X } from 'lucide-react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  
  const categories = [
    'All Categories',
    'Deals',
    'Fashion',
    'Health & Wellness',
    
  ]

  return (

    <>
    
    <div className="mx-auto p-4">
      <div className="rounded-2xl border bg-white shadow-sm relative">
        <header className="flex items-center justify-between px-4 lg:px-8 py-5">

          {/* Left side: Logo + Desktop Nav */}
          <div className="flex items-center space-x-4">
            <div className="text-2xl font-bold tracking-tight">MLC</div>

            <nav className="hidden lg:flex items-center space-x-4">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                    category === 'Sport'
                      ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/25'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800'
                  }`}
                >
                  {category}
                </button>
              ))}
            </nav>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-6 lg:space-x-8">
            <div className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 cursor-pointer transition-colors">
              <Package className="w-5 h-5" />
              <span className="text-sm font-medium hidden md:inline">Orders</span>
            </div>

            <div className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 cursor-pointer transition-colors">
              <Heart className="w-5 h-5" />
              <span className="text-sm font-medium hidden md:inline">Favourites</span>
            </div>

            <div className="w-9 h-9 bg-amber-100 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-amber-600" />
            </div>

            {/* Hamburger (mobile/tablet) */}
            <button
              className="lg:hidden text-gray-700"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </header>

        {/* Mobile/Tablet Dropdown (kept inside the card) */}
        {menuOpen && (
          <div className="absolute left-0 right-0 top-full border-t bg-white p-4 rounded-b-2xl z-50">
            <nav className="flex flex-col space-y-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-5 py-2 rounded-lg text-sm font-medium text-left transition-all ${
                    category === 'Sport'
                      ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/25'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800'
                  }`}
                >
                  {category}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </div>
    </>
    

  )
}


