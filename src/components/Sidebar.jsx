export default function Sidebar() {
  const brands = [
    { name: 'Adidas', icon: '▲', checked: false },
    { name: 'Columbia', icon: '◆', checked: true },
    { name: 'Demix', icon: '▲', checked: true },
    { name: 'New Balance', icon: 'N', checked: true },
    { name: 'Nike', icon: '✓', checked: true },
    { name: 'Xiaomi', icon: 'Mi', checked: true },
    { name: 'Asics', icon: 'A', checked: false }
  ]

  return (
    <div className="w-80 bg-white p-8 border-r border-gray-100">
      {/* Price Range */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold text-gray-900">Price Range</h3>
          <button className="text-purple-600 text-sm font-medium hover:text-purple-700 transition-colors">Reset</button>
        </div>
        <p className="text-sm text-gray-500 mb-6">The average price is $300</p>
        
        <div className="relative mb-4">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-gray-900 text-white px-3 py-1.5 rounded-lg text-sm font-medium">$20</div>
            <div className="bg-gray-900 text-white px-3 py-1.5 rounded-lg text-sm font-medium">$1130</div>
          </div>
          <div className="relative">
            <div className="w-full h-2 bg-gray-200 rounded-full"></div>
            <div className="absolute top-0 left-[15%] right-[15%] h-2 bg-purple-600 rounded-full"></div>
            <div className="absolute top-[-4px] left-[15%] w-4 h-4 bg-white border-2 border-purple-600 rounded-full shadow-sm cursor-pointer hover:scale-110 transition-transform"></div>
            <div className="absolute top-[-4px] right-[15%] w-4 h-4 bg-white border-2 border-purple-600 rounded-full shadow-sm cursor-pointer hover:scale-110 transition-transform"></div>
          </div>
        </div>
      </div>

      {/* Star Rating */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Star Rating</h3>
        <div className="flex items-center space-x-3">
          <div className="flex text-yellow-400 text-lg">
            ★★★★☆
          </div>
          <span className="text-sm text-gray-600">4 Stars & up</span>
        </div>
      </div>

      {/* Brand */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Brand</h3>
          <button className="text-purple-600 text-sm font-medium hover:text-purple-700 transition-colors">Reset</button>
        </div>
        
        <div className="space-y-4">
          {brands.map((brand) => (
            <label key={brand.name} className="flex items-center justify-between cursor-pointer group">
              <div className="flex items-center space-x-3">
                <span className="text-gray-600 font-medium w-6 text-center">{brand.icon}</span>
                <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{brand.name}</span>
              </div>
              <div className="relative">
                <input
                  type="checkbox"
                  defaultChecked={brand.checked}
                  className="w-5 h-5 text-purple-600 bg-white border-2 border-gray-300 rounded focus:ring-purple-500 focus:ring-2 transition-all"
                />
              </div>
            </label>
          ))}
        </div>
        
        <button className="text-purple-600 text-sm font-medium mt-4 hover:text-purple-700 transition-colors">More Brand</button>
      </div>

      {/* Delivery Options */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Delivery Options</h3>
        <div className="flex space-x-3">
          <button className="px-6 py-2.5 bg-purple-600 text-white rounded-full text-sm font-medium shadow-lg shadow-purple-600/25 hover:bg-purple-700 transition-all">
            Standard
          </button>
          <button className="px-6 py-2.5 bg-gray-100 text-gray-600 rounded-full text-sm font-medium hover:bg-gray-200 transition-all">
            Pick Up
          </button>
        </div>
      </div>
    </div>
  )
}
