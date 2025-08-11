'use client'

import Header from '../components/Header'
import CategoryNav from '../components/CategoryNav'
import Sidebar from '../components/Sidebar'
import ProductGrid from '../components/ProductGrid'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 relative overflow-hidden">
      
      {/* Main container */}
      <div className="relative mx-auto p-2 sm:p-4 md:p-6 lg:p-8">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <Header />

          {/* Hero Section */}
          <section className="p-4 sm:p-6 md:p-8 md:pt-1">
            <div
              className="
                relative 
                h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] 
                rounded-2xl sm:rounded-3xl 
                overflow-hidden shadow-lg
              "
            >
              <Image
                src="/heroPic.png"
                alt="Makeup artist working"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </section>

          {/* Content Section */}
          <div className="flex flex-col lg:flex-row min-h-[500px]">
            {/* If you want sidebar for larger screens */}
            {/* <Sidebar /> */}
            <ProductGrid />
          </div>
        </div>
      </div>
    </div>
  )
}
