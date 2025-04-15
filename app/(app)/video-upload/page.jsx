"use client"
import { useState } from "react"
import axios from "axios"
import { useRouter } from "next/navigation"

function VideoUpload() {
  const [file, setFile] = useState(null)
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [isUploading, setIsUploading] = useState(false)

  const router = useRouter()
  //max file size of 70 mb
  const MAX_FILE_SIZE = 70 * 1024 * 1024

  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!file) return

    if (file.size > MAX_FILE_SIZE) {
      //TODO: add notification
      alert("File size too large")
      return
    }

    setIsUploading(true)
    const formData = new FormData()
    formData.append("file", file)
    formData.append("title", title)
    formData.append("description", description)
    formData.append("originalSize", file.size.toString())

    try {
      const response = await axios.post("/api/video-upload", formData)
      // check for 200 response
      router.push("/")
    } catch (error) {
      console.log(error)
      // notification for failure
    } finally {
      setIsUploading(false)
    }
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
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
                Video Upload Panel
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-slate-200 to-gray-300 bg-clip-text text-transparent leading-tight">
                Upload Video
              </h1>
              <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
                Share your content with the world. Upload and manage your video collection with ease
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative px-6 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
            <div className="p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Title Input */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-slate-600 to-gray-600 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m0 0V1a1 1 0 011-1h2a1 1 0 011 1v18a1 1 0 01-1 1H4a1 1 0 01-1-1V1a1 1 0 011-1h2a1 1 0 011 1v3"
                        />
                      </svg>
                    </div>
                    <label className="text-lg font-semibold text-white">Video Title</label>
                    <span className="text-red-400 text-sm">*</span>
                  </div>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/50 backdrop-blur-sm hover:border-white/20 focus:border-white/30 focus:outline-none transition-all duration-300"
                    placeholder="Enter a compelling title for your video"
                    required
                  />
                </div>

                {/* Description Input */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-slate-600 to-gray-600 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                      </svg>
                    </div>
                    <label className="text-lg font-semibold text-white">Description</label>
                  </div>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/50 backdrop-blur-sm hover:border-white/20 focus:border-white/30 focus:outline-none transition-all duration-300 resize-none"
                    placeholder="Describe your video content, what viewers can expect..."
                    rows={4}
                  />
                </div>

                {/* File Input */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-slate-600 to-gray-600 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <label className="text-lg font-semibold text-white">Video File</label>
                    <span className="text-red-400 text-sm">*</span>
                  </div>

                  <div className="relative">
                    <input
                      type="file"
                      accept="video/*"
                      onChange={(e) => setFile(e.target.files?.[0] || null)}
                      className="block w-full text-sm text-white/70 file:mr-4 file:py-3 file:px-6 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-gradient-to-r file:from-slate-700 file:to-gray-700 file:text-white hover:file:from-slate-600 hover:file:to-gray-600 file:transition-all file:duration-300 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:border-white/20 transition-all duration-300"
                      required
                    />
                  </div>

                  {/* File Info */}
                  {file && (
                    <div className="mt-4 p-4 bg-white/5 rounded-xl border border-white/10">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <p className="text-white font-medium">{file.name}</p>
                          <p className="text-white/60 text-sm">Size: {formatFileSize(file.size)}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          {file.size <= MAX_FILE_SIZE ? (
                            <div className="flex items-center space-x-2 text-green-400">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-sm font-medium">Valid</span>
                            </div>
                          ) : (
                            <div className="flex items-center space-x-2 text-red-400">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                              <span className="text-sm font-medium">Too Large</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* File Size Limit Info */}
                  <div className="flex items-center space-x-2 text-white/50 text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Maximum file size: {formatFileSize(MAX_FILE_SIZE)}</span>
                  </div>
                </div>

                {/* Upload Progress */}
                {isUploading && (
                  <div className="space-y-4 p-6 bg-white/5 rounded-xl border border-white/10">
                    <div className="flex items-center justify-between">
                      <span className="text-white font-medium">Uploading your video...</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-5 h-5 border-2 border-slate-600 border-t-white rounded-full animate-spin"></div>
                        <span className="text-white/70 text-sm">Processing</span>
                      </div>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-slate-600 to-gray-600 rounded-full animate-pulse"></div>
                    </div>
                    <p className="text-white/60 text-sm">Please don't close this page while uploading...</p>
                  </div>
                )}

                {/* Submit Button */}
                <div className="flex justify-end pt-6 border-t border-white/10">
                  <button
                    type="submit"
                    disabled={isUploading || !file || file?.size > MAX_FILE_SIZE}
                    className="px-8 py-3 bg-gradient-to-r from-slate-700 to-gray-700 text-white font-semibold rounded-xl hover:from-slate-600 hover:to-gray-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-slate-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:hover:from-slate-700 disabled:hover:to-gray-700 flex items-center space-x-2"
                  >
                    {isUploading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Uploading...</span>
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                          />
                        </svg>
                        <span>Upload Video</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
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

export default VideoUpload
