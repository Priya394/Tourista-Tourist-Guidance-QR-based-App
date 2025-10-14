import { useState } from 'react'
import { FaMapMarkerAlt, FaSearch } from 'react-icons/fa'

const destinations = [
  {
    id: 1,
    name: 'Taj Mahal',
    location: 'Agra, India',
    category: 'Historical',
    description: 'An ivory-white marble mausoleum, one of the Seven Wonders of the World.',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=500'
  },
  {
    id: 2,
    name: 'Eiffel Tower',
    location: 'Paris, France',
    category: 'Modern',
    description: 'Iconic iron lattice tower and global cultural icon of France.',
    image: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=500'
  },
  {
    id: 3,
    name: 'Grand Canyon',
    location: 'Arizona, USA',
    category: 'Natural',
    description: 'Steep-sided canyon carved by the Colorado River, breathtaking views.',
    image: 'https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?w=500'
  },
  {
    id: 4,
    name: 'Great Wall of China',
    location: 'China',
    category: 'Historical',
    description: 'Ancient fortification stretching thousands of miles across northern China.',
    image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=500'
  },
  {
    id: 5,
    name: 'Machu Picchu',
    location: 'Peru',
    category: 'Historical',
    description: '15th-century Inca citadel set high in the Andes Mountains.',
    image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=500'
  },
  {
    id: 6,
    name: 'Santorini',
    location: 'Greece',
    category: 'Cultural',
    description: 'Stunning island with white-washed buildings and blue-domed churches.',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=500'
  },
  {
    id: 7,
    name: 'Mount Everest',
    location: 'Nepal/Tibet',
    category: 'Adventure',
    description: 'Highest mountain on Earth, ultimate challenge for mountaineers.',
    image: 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=500'
  },
  {
    id: 8,
    name: 'Petra',
    location: 'Jordan',
    category: 'Historical',
    description: 'Ancient city carved into rose-red cliffs, archaeological wonder.',
    image: 'https://images.unsplash.com/photo-1578271887552-5ac3a72752bc?w=500'
  }
]

const Destinations = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Historical', 'Natural', 'Cultural', 'Adventure', 'Modern', 'Religious']

  const filteredDestinations = destinations.filter(dest => {
    const matchesSearch = dest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dest.location.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || dest.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
        Popular Tourist Destinations
      </h1>

      <div className="mb-8 space-y-4">
        <div className="relative">
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search destinations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-indigo-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredDestinations.map(destination => (
          <div key={destination.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <img
              src={destination.image}
              alt={destination.name}
              className="w-full h-48 object-cover"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/500x300?text=' + destination.name
              }}
            />
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-gray-900">{destination.name}</h3>
                <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">
                  {destination.category}
                </span>
              </div>
              <div className="flex items-center text-gray-600 mb-3">
                <FaMapMarkerAlt className="mr-2" />
                <span>{destination.location}</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {destination.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {filteredDestinations.length === 0 && (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600">No destinations found. Try a different search or category.</p>
        </div>
      )}
    </div>
  )
}

export default Destinations
