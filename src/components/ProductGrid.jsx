import ProductCard from './ProductCard'

export default function ProductGrid() {
  
  const products = [
    {
      title: 'Smart Watch WH22-6 Fitne...',
      price: '$454.00',
      image: '/archery-bow.png',
      isTopItem: true
    },
    {
      title: 'Tennis Rackets for Beginners',
      price: '$30.99',
      image: '/placeholder.svg?height=280&width=280&text=Tennis+Rackets',
    },
    {
      title: 'Premium Boxing Gloves for...',
      price: '$198.84',
      originalPrice: '$275.57',
      image: '/placeholder.svg?height=280&width=280&text=Boxing+Gloves',
    },
    {
      title: 'Club Kit 1 Recurve Archer...',
      price: '$48.99',
      image: '/placeholder.svg?height=280&width=280&text=Archery+Set',
    },
    {
      title: 'Nike White Therma-Fit Pullover Training Hoodie',
      price: '$154.99',
      image: '/placeholder.svg?height=280&width=280&text=Nike+Hoodie',
      isSpecial: true,
      ratings: [
        { value: '4.7/5', avatar: '' },
        { value: '4.6/5', avatar: '' }
      ]
    },
    {
      title: 'Lightweight White Nike T...',
      price: '$210.00',
      image: '/placeholder.svg?height=280&width=280&text=Nike+Shoes',
      isTopItem: true
    }
  ]

  return (
    <div className="flex-1 p-8">
      <div className="grid grid-cols-3 gap-8">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  )
}
