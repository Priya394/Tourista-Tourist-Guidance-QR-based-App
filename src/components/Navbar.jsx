import { Link } from 'react-router-dom'
import { FaQrcode, FaCamera, FaMapMarkedAlt, FaInfoCircle, FaHome } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <FaMapMarkedAlt className="text-3xl text-indigo-600" />
            <span className="text-2xl font-bold text-indigo-600">Tourista</span>
          </Link>
          
          <div className="flex space-x-1 sm:space-x-4">
            <Link
              to="/"
              className="flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
            >
              <FaHome className="text-lg" />
              <span className="hidden sm:inline">Home</span>
            </Link>
            
            <Link
              to="/generate"
              className="flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
            >
              <FaQrcode className="text-lg" />
              <span className="hidden sm:inline">Generate</span>
            </Link>
            
            <Link
              to="/scan"
              className="flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
            >
              <FaCamera className="text-lg" />
              <span className="hidden sm:inline">Scan</span>
            </Link>
            
            <Link
              to="/destinations"
              className="flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
            >
              <FaMapMarkedAlt className="text-lg" />
              <span className="hidden sm:inline">Places</span>
            </Link>
            
            <Link
              to="/about"
              className="flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
            >
              <FaInfoCircle className="text-lg" />
              <span className="hidden sm:inline">About</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
