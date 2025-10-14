import { FaQrcode, FaUsers, FaGlobe, FaHeart } from 'react-icons/fa'

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
        About Tourista
      </h1>

      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <div className="prose max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Tourista is a modern tourist guidance application that leverages QR code technology 
            to provide instant access to information about tourist destinations worldwide.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Our mission is to make travel more accessible, informative, and enjoyable for everyone. 
            Whether you're a tourist exploring a new city or a local guide sharing your knowledge, 
            Tourista helps bridge the gap between information and exploration.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-4">
            <FaQrcode className="text-3xl text-indigo-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">QR Technology</h2>
          </div>
          <p className="text-gray-700">
            Using cutting-edge QR code technology to provide instant access to destination 
            information without the need for apps or complex setups.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-4">
            <FaUsers className="text-3xl text-green-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Community Driven</h2>
          </div>
          <p className="text-gray-700">
            Empowering local guides and tourism authorities to create and share 
            information about their favorite destinations.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-4">
            <FaGlobe className="text-3xl text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Global Reach</h2>
          </div>
          <p className="text-gray-700">
            Supporting tourists and destinations from all around the world, 
            making travel information universally accessible.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-4">
            <FaHeart className="text-3xl text-red-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Made with Love</h2>
          </div>
          <p className="text-gray-700">
            Built by travel enthusiasts for travel enthusiasts, with a passion 
            for making exploration easier and more enriching.
          </p>
        </div>
      </div>

      <div className="bg-indigo-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
          Key Features
        </h2>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <span className="text-indigo-600 mr-2">✓</span>
            <span>Generate custom QR codes for any tourist destination</span>
          </li>
          <li className="flex items-start">
            <span className="text-indigo-600 mr-2">✓</span>
            <span>Scan QR codes to get instant information about places</span>
          </li>
          <li className="flex items-start">
            <span className="text-indigo-600 mr-2">✓</span>
            <span>Browse and discover popular tourist destinations</span>
          </li>
          <li className="flex items-start">
            <span className="text-indigo-600 mr-2">✓</span>
            <span>Download and share QR codes easily</span>
          </li>
          <li className="flex items-start">
            <span className="text-indigo-600 mr-2">✓</span>
            <span>Responsive design works on all devices</span>
          </li>
          <li className="flex items-start">
            <span className="text-indigo-600 mr-2">✓</span>
            <span>No registration required - simple and accessible</span>
          </li>
        </ul>
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-600">
          Have questions or suggestions? We'd love to hear from you!
        </p>
        <p className="text-indigo-600 font-semibold mt-2">
          Happy Traveling! 🌍✈️
        </p>
      </div>
    </div>
  )
}

export default About
