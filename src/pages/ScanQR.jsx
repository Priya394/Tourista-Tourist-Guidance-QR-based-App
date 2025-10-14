import { useState, useEffect } from 'react'
import { Html5QrcodeScanner } from 'html5-qrcode'
import { FaCamera, FaMapMarkerAlt, FaInfoCircle } from 'react-icons/fa'

const ScanQR = () => {
  const [scanResult, setScanResult] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    const scanner = new Html5QrcodeScanner('reader', {
      qrbox: {
        width: 250,
        height: 250,
      },
      fps: 5,
    })

    scanner.render(success, errorCallback)

    function success(result) {
      scanner.clear()
      try {
        const data = JSON.parse(result)
        setScanResult(data)
        setError('')
      } catch (e) {
        setScanResult({ raw: result })
        setError('')
      }
    }

    function errorCallback(err) {
      // Only show error if it's not the common "no QR code found" message
      if (err && !err.includes('No MultiFormat Readers')) {
        setError('Unable to scan. Please try again.')
      }
    }

    return () => {
      scanner.clear().catch(err => console.log(err))
    }
  }, [])

  const handleScanAgain = () => {
    setScanResult(null)
    setError('')
    window.location.reload()
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
        Scan QR Code
      </h1>

      <div className="bg-white rounded-lg shadow-lg p-8">
        {!scanResult ? (
          <div>
            <div className="flex items-center justify-center mb-6">
              <FaCamera className="text-4xl text-indigo-600 mr-2" />
              <p className="text-lg text-gray-600">
                Position the QR code within the camera frame
              </p>
            </div>
            <div id="reader" className="w-full"></div>
            {error && (
              <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-lg">
                {error}
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                QR Code Scanned Successfully!
              </h2>
            </div>

            <div className="bg-indigo-50 rounded-lg p-6 space-y-4">
              {scanResult.placeName ? (
                <>
                  <div>
                    <h3 className="flex items-center text-lg font-semibold text-gray-900 mb-2">
                      <FaMapMarkerAlt className="mr-2 text-indigo-600" />
                      Place Name
                    </h3>
                    <p className="text-gray-700 text-xl">{scanResult.placeName}</p>
                  </div>

                  {scanResult.location && (
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Location
                      </h3>
                      <p className="text-gray-700">{scanResult.location}</p>
                    </div>
                  )}

                  {scanResult.category && (
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Category
                      </h3>
                      <span className="inline-block px-3 py-1 bg-indigo-600 text-white rounded-full text-sm">
                        {scanResult.category}
                      </span>
                    </div>
                  )}

                  {scanResult.description && (
                    <div>
                      <h3 className="flex items-center text-lg font-semibold text-gray-900 mb-2">
                        <FaInfoCircle className="mr-2 text-indigo-600" />
                        Description
                      </h3>
                      <p className="text-gray-700 leading-relaxed">{scanResult.description}</p>
                    </div>
                  )}
                </>
              ) : (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Scanned Data
                  </h3>
                  <p className="text-gray-700 break-all">{scanResult.raw}</p>
                </div>
              )}
            </div>

            <button
              onClick={handleScanAgain}
              className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors font-semibold"
            >
              Scan Another QR Code
            </button>
          </div>
        )}
      </div>

      <div className="mt-8 bg-blue-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Tips for Scanning:</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Ensure good lighting for better scanning</li>
          <li>Hold your device steady</li>
          <li>Make sure the QR code is clearly visible</li>
          <li>Allow camera permissions when prompted</li>
        </ul>
      </div>
    </div>
  )
}

export default ScanQR
