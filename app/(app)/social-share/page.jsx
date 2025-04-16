"use client"

import { useState, useEffect, useRef } from "react"
import { CldImage } from "next-cloudinary"

const socialFormats = {
  "Instagram Square (1:1)": { width: 1080, height: 1080, aspectRatio: "1:1" },
  "Instagram Portrait (4:5)": { width: 1080, height: 1350, aspectRatio: "4:5" },
  "Twitter Post (16:9)": { width: 1200, height: 675, aspectRatio: "16:9" },
  "Twitter Header (3:1)": { width: 1500, height: 500, aspectRatio: "3:1" },
  "Facebook Cover (205:78)": { width: 820, height: 312, aspectRatio: "205:78" },
}

export default function SocialShare() {
  const [uploadedImage, setUploadedImage] = useState(null)
  const [selectedFormat, setSelectedFormat] = useState("Instagram Square (1:1)")
  const [isUploading, setIsUploading] = useState(false)
  const [isTransforming, setIsTransforming] = useState(false)
  const imageRef = useRef(null)

  useEffect(() => {
    if (uploadedImage) {
      setIsTransforming(true)
    }
  }, [selectedFormat, uploadedImage])

  const handleFileUpload = async (event) => {
    const file = event.target.files?.[0]
    if (!file) return
    setIsUploading(true)
    const formData = new FormData()
    formData.append("file", file)

    try {
      const response = await fetch("/api/image-upload", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) throw new Error("Failed to upload image")

      const data = await response.json()
      setUploadedImage(data.publicId)
    } catch (error) {
      console.log(error)
      alert("Failed to upload image")
    } finally {
      setIsUploading(false)
    }
  }

  const handleDownload = () => {
    if (!imageRef.current) return

    fetch(imageRef.current.src)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob)
        const link = document.createElement("a")
        link.href = url
        link.download = `${selectedFormat.replace(/\s+/g, "_").toLowerCase()}.png`
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        window.URL.revokeObjectURL(url)
      })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-slate-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gray-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-slate-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-800/20 to-gray-800/20"></div>
        <div className="relative px-6 py-16 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-4xl">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-sm font-medium">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                AI-Powered Image Creator
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-slate-200 to-gray-300 bg-clip-text text-transparent leading-tight">
                Social Media Image Creator
              </h1>
              <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
                Transform your images into perfect social media formats with intelligent cropping and optimization
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative px-6 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
            <div className="p-8 space-y-8">
              {/* Upload Section */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-slate-600 to-gray-600 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-white">Upload Your Image</h2>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-white/80">Choose an image file</label>
                  <div className="relative">
                    <input
                      type="file"
                      onChange={handleFileUpload}
                      className="block w-full text-sm text-white/70 file:mr-4 file:py-3 file:px-6 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-gradient-to-r file:from-slate-700 file:to-gray-700 file:text-white hover:file:from-slate-600 hover:file:to-gray-600 file:transition-all file:duration-300 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:border-white/20 transition-all duration-300"
                      accept="image/*"
                    />
                  </div>
                </div>

                {isUploading && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white/70">Uploading image...</span>
                      <span className="text-white/50">Processing</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-slate-600 to-gray-600 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                )}
              </div>

              {uploadedImage && (
                <>
                  {/* Format Selection */}
                  <div className="space-y-6 border-t border-white/10 pt-8">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-slate-600 to-gray-600 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 10h16M4 14h16M4 18h16"
                          />
                        </svg>
                      </div>
                      <h2 className="text-2xl font-bold text-white">Select Social Media Format</h2>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-white/80">Choose your target platform</label>
                      <select
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white backdrop-blur-sm hover:border-white/20 focus:border-white/30 focus:outline-none transition-all duration-300 appearance-none cursor-pointer"
                        value={selectedFormat}
                        onChange={(e) => setSelectedFormat(e.target.value)}
                      >
                        {Object.keys(socialFormats).map((format) => (
                          <option key={format} value={format} className="bg-slate-800 text-white">
                            {format}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Preview Section */}
                  <div className="space-y-6 border-t border-white/10 pt-8">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-slate-600 to-gray-600 rounded-lg flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white">Preview</h3>
                      </div>
                      <div className="px-3 py-1 bg-slate-600/20 text-slate-200 text-sm font-medium rounded-full border border-slate-600/30">
                        {socialFormats[selectedFormat].aspectRatio}
                      </div>
                    </div>

                    <div className="relative">
                      <div className="flex justify-center p-6 bg-white/5 rounded-xl border border-white/10">
                        {isTransforming && (
                          <div className="absolute inset-0 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm z-10 rounded-xl">
                            <div className="text-center space-y-3">
                              <div className="w-12 h-12 border-4 border-slate-600 border-t-white rounded-full animate-spin mx-auto"></div>
                              <p className="text-white/70 text-sm">Transforming image...</p>
                            </div>
                          </div>
                        )}
                        <div className="max-w-md">
                          <CldImage
                            width={socialFormats[selectedFormat].width}
                            height={socialFormats[selectedFormat].height}
                            src={uploadedImage}
                            sizes="100vw"
                            alt="transformed image"
                            crop="fill"
                            aspectRatio={socialFormats[selectedFormat].aspectRatio}
                            gravity="auto"
                            ref={imageRef}
                            onLoad={() => setIsTransforming(false)}
                            className="rounded-lg shadow-2xl border border-white/20"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Download Button */}
                    <div className="flex justify-end">
                      <button
                        onClick={handleDownload}
                        className="px-8 py-3 bg-gradient-to-r from-slate-700 to-gray-700 text-white font-semibold rounded-xl hover:from-slate-600 hover:to-gray-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-slate-500/25 flex items-center space-x-2"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                        <span>Download for {selectedFormat}</span>
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative mt-24 px-6 py-12 sm:px-8 lg:px-12 border-t border-white/10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-white/40 text-sm">© 2025 Xform. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}
