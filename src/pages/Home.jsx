import { Link } from 'react-router-dom'
import { FaQrcode, FaCamera, FaMapMarkedAlt } from 'react-icons/fa'

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Welcome to Tourista
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Your smart tourist guidance system powered by QR codes. Discover destinations, 
          generate QR codes for tourist spots, and scan codes to get instant information.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
          <div className="flex justify-center mb-4">
            <FaQrcode className="text-6xl text-indigo-600" />
          </div>
          <h2 className="text-2xl font-bold text-center mb-4">Generate QR Codes</h2>
          <p className="text-gray-600 text-center mb-6">
            Create QR codes for tourist destinations with detailed information
          </p>
          <Link
            to="/generate"
            className="block text-center bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Start Generating
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
          <div className="flex justify-center mb-4">
            <FaCamera className="text-6xl text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-center mb-4">Scan QR Codes</h2>
          <p className="text-gray-600 text-center mb-6">
            Scan QR codes at tourist spots to get instant information and guides
          </p>
          <Link
            to="/scan"
            className="block text-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            Start Scanning
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
          <div className="flex justify-center mb-4">
            <FaMapMarkedAlt className="text-6xl text-purple-600" />
          </div>
          <h2 className="text-2xl font-bold text-center mb-4">Explore Places</h2>
          <p className="text-gray-600 text-center mb-6">
            Browse popular tourist destinations and discover new places to visit
          </p>
          <Link
            to="/destinations"
            className="block text-center bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Explore Now
          </Link>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-6">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-indigo-600">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Create or Scan</h3>
            <p className="text-gray-600">
              Generate QR codes for tourist spots or scan existing ones
            </p>
          </div>
          <div className="text-center">
            <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-indigo-600">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Get Information</h3>
            <p className="text-gray-600">
              Access detailed information about destinations instantly
            </p>
          </div>
          <div className="text-center">
            <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-indigo-600">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Explore & Share</h3>
            <p className="text-gray-600">
              Share QR codes and help other tourists discover amazing places
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
