import { Heart } from 'lucide-react'
import Image from 'next/image'

export default function ProductCard({
  title,
  price,
  originalPrice,
  image,
  isTopItem,
  isSpecial,
  ratings,
  isLiked = false
}) {
  if (isSpecial) {
    return (
      <div className="relative bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 rounded-3xl p-6 text-white overflow-hidden hover:shadow-2xl transition-all duration-300 group">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 right-4 w-32 h-32 border border-white/20 rounded-full"></div>
          <div className="absolute bottom-4 left-4 w-24 h-24 border border-white/20 rounded-full"></div>
        </div>
        
        {/* Heart Icon */}
        <button className="absolute top-6 right-6 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
          <Heart className="w-6 h-6 text-white/80 hover:text-white transition-colors" />
        </button>

        {/* Rating Badges */}
        {ratings && (
          <div className="absolute top-1/2 right-6 space-y-3 transform -translate-y-1/2">
            {ratings.map((rating, index) => (
              <div key={index} className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-2 flex items-center space-x-2 shadow-lg">
                <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                <span className="text-gray-800 text-sm font-medium">{rating.value}</span>
              </div>
            ))}
          </div>
        )}

        {/* Product Image */}
        <div className="relative z-10 mb-6">
          <Image
            src={image || "/placeholder.svg?height=280&width=280&text=Nike+Hoodie"}
            alt={title}
            width={300}
            height={300}
            className="w-full h-48 object-contain"
          />
        </div>

        {/* Product Info */}
        <div className="relative z-10">
          <h3 className="text-xl font-semibold mb-3 leading-tight">{title}</h3>
          <div className="flex items-center space-x-3">
            <span className="text-2xl font-bold">{price}</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 relative group cursor-pointer">
      {/* Heart Icon */}
      <button className="absolute top-6 right-6 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
        <Heart className={`w-6 h-6 ${isLiked ? 'fill-purple-600 text-purple-600' : 'text-gray-400 hover:text-purple-600'} transition-colors`} />
      </button>

      {/* Top Item Badge */}
      {isTopItem && (
        <div className="absolute top-6 left-6 bg-yellow-400 text-gray-900 px-3 py-1.5 rounded-lg text-sm font-semibold z-10">
          Top Item
        </div>
      )}

      {/* Product Image */}
      <div className="aspect-square mb-6 flex items-center justify-center bg-gray-50 rounded-2xl overflow-hidden group-hover:bg-gray-100 transition-colors">
        <Image
          src={image || "/placeholder.svg?height=280&width=280&text=Product"}
          alt={title}
          width={280}
          height={280}
          className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Product Info */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-3 text-lg leading-tight group-hover:text-purple-600 transition-colors">{title}</h3>
        <div className="flex items-center space-x-3">
          {originalPrice && (
            <span className="text-gray-400 line-through text-sm">{originalPrice}</span>
          )}
          <span className="text-purple-600 font-bold text-xl">{price}</span>
        </div>
      </div>
    </div>
  )
}
