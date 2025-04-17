"use client"
import { useState, useEffect, useCallback } from "react"
import axios from "axios"
import VideoCard from "@/components/VideoCard"

function Home() {
  const [videos, setVideos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchVideos = useCallback(async () => {
    try {
      const response = await axios.get("/api/videos")
      if (Array.isArray(response.data)) {
        setVideos(response.data)
      } else {
        throw new Error(" Unexpected response format")
      }
    } catch (error) {
      console.log(error)
      setError("Failed to fetch videos")
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchVideos()
  }, [fetchVideos])

  const handleDownload = useCallback((url, title) => {
    ;() => {
      const link = document.createElement("a")
      link.href = url
      link.setAttribute("download", `${title}.mp4`)
      link.setAttribute("target", "_blank")
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black">
        {/* Header Skeleton */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-800/20 to-gray-800/20"></div>
          <div className="relative px-6 py-16 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-7xl">
              <div className="text-center space-y-6">
                <div className="h-12 bg-white/10 rounded-lg animate-pulse mx-auto max-w-md"></div>
                <div className="h-6 bg-white/5 rounded-lg animate-pulse mx-auto max-w-lg"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Skeleton */}
        <div className="px-6 py-12 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="group">
                  <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                    <div className="aspect-video bg-gradient-to-br from-slate-600/20 to-gray-600/20 animate-pulse"></div>
                    <div className="p-6 space-y-4">
                      <div className="h-6 bg-white/10 rounded-lg animate-pulse"></div>
                      <div className="h-4 bg-white/5 rounded-lg animate-pulse w-3/4"></div>
                      <div className="h-10 bg-white/10 rounded-xl animate-pulse"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
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
          <div className="mx-auto max-w-7xl">
            <div className="text-center space-y-6">
              {/* <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-sm font-medium">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                Live Video Collection
              </div> */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-slate-200 to-gray-300 bg-clip-text text-transparent leading-tight">
                Video Gallery
              </h1>
              <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
                Discover, stream, and download from our curated collection of premium video content
              </p>
              <div className="flex items-center justify-center space-x-2 text-white/60">
                <div className="w-1 h-1 bg-white/60 rounded-full"></div>
                <span className="text-sm">{videos.length} Videos Available</span>
                <div className="w-1 h-1 bg-white/60 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative px-6 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          {videos.length === 0 ? (
            <div className="text-center py-24">
              <div className="mx-auto max-w-md">
                <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-slate-600/20 to-gray-600/20 flex items-center justify-center backdrop-blur-sm border border-white/10">
                  <svg className="w-12 h-12 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">No Videos Yet</h3>
                <p className="text-white/60 leading-relaxed">
                  Your video collection is empty. Check back soon for new content or upload your first video to get
                  started.
                </p>
                <button className="mt-8 px-8 py-3 bg-gradient-to-r from-slate-700 to-gray-700 text-white font-semibold rounded-xl hover:from-slate-600 hover:to-gray-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-slate-500/25">
                  Refresh Collection
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Filter/Sort Bar */}
              <div className="mb-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center space-x-4">
                  <h2 className="text-2xl font-bold text-white">Featured Videos</h2>
                  <div className="px-3 py-1 bg-slate-600/20 text-slate-200 text-sm font-medium rounded-full border border-slate-600/30">
                    {videos.length} items
                  </div>
                </div>
                {/* <div className="flex items-center space-x-3">
                  <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white/80 hover:text-white rounded-lg transition-all duration-200 backdrop-blur-sm border border-white/10 text-sm font-medium">
                    Sort by Date
                  </button>
                  <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white/80 hover:text-white rounded-lg transition-all duration-200 backdrop-blur-sm border border-white/10 text-sm font-medium">
                    Filter
                  </button>
                </div> */}
              </div>

              {/* Video Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
                {videos.map((video, index) => (
                  <div
                    key={video.id}
                    className="group transform transition-all duration-500 hover:scale-105"
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-slate-500/10">
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-600/5 to-gray-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <VideoCard video={video} onDownload={handleDownload} />
                    </div>
                  </div>
                ))}
              </div>

              {/* Load More Section */}
              {/* <div className="mt-16 text-center">
                <button className="px-8 py-4 bg-gradient-to-r from-slate-700/20 to-gray-700/20 hover:from-slate-700/30 hover:to-gray-700/30 text-white font-semibold rounded-xl transition-all duration-300 backdrop-blur-sm border border-white/10 hover:border-white/20 transform hover:scale-105">
                  Load More Videos
                </button>
              </div> */}
            </>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="relative mt-24 px-6 py-12 sm:px-8 lg:px-12 border-t border-white/10">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-white/40 text-sm">© 2025 Xform. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Home
