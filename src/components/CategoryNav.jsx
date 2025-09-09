export default function CategoryNav() {
  const categories = [
    'All Categories',
    'Deals', 
    'Crypto',
    'Fashion',
    'Health & Wellness',
    'Art',
    'Home',
    'Sport',
    'Music',
    'Gaming'
  ]
  

  return (
    <nav className="flex items-center space-x-4 px-8 py-4 bg-white border-b border-gray-100">
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
  )
}
