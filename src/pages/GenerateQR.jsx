import { useState, useRef } from 'react'
import { QRCodeSVG } from 'qrcode.react'
import html2canvas from 'html2canvas'
import { FaDownload, FaMapMarkerAlt, FaInfoCircle } from 'react-icons/fa'

const GenerateQR = () => {
  const [formData, setFormData] = useState({
    placeName: '',
    description: '',
    location: '',
    category: 'Historical'
  })
  const [qrValue, setQrValue] = useState('')
  const qrRef = useRef(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const qrData = JSON.stringify(formData)
    setQrValue(qrData)
  }

  const downloadQR = async () => {
    if (qrRef.current) {
      const canvas = await html2canvas(qrRef.current)
      const link = document.createElement('a')
      link.download = `${formData.placeName || 'qrcode'}.png`
      link.href = canvas.toDataURL()
      link.click()
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
        Generate QR Code for Tourist Destination
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FaMapMarkerAlt className="inline mr-2" />
                Place Name
              </label>
              <input
                type="text"
                name="placeName"
                value={formData.placeName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="e.g., Eiffel Tower"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                <option>Historical</option>
                <option>Natural</option>
                <option>Cultural</option>
                <option>Adventure</option>
                <option>Religious</option>
                <option>Modern</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="e.g., Paris, France"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FaInfoCircle className="inline mr-2" />
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="Add interesting details about this place..."
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors font-semibold"
            >
              Generate QR Code
            </button>
          </form>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center mb-6">Your QR Code</h2>
          
          {qrValue ? (
            <div className="flex flex-col items-center space-y-6">
              <div ref={qrRef} className="bg-white p-8 rounded-lg border-4 border-indigo-600">
                <QRCodeSVG
                  value={qrValue}
                  size={256}
                  level="H"
                  includeMargin={true}
                />
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">{formData.placeName}</h3>
                <p className="text-gray-600">{formData.location}</p>
                <span className="inline-block mt-2 px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                  {formData.category}
                </span>
              </div>

              <button
                onClick={downloadQR}
                className="flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
              >
                <FaDownload />
                <span>Download QR Code</span>
              </button>
            </div>
          ) : (
            <div className="flex items-center justify-center h-64 text-gray-400">
              <p className="text-center">
                Fill in the form and click "Generate QR Code"<br />to see your QR code here
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default GenerateQR
