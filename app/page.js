export default function Home() {
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
        <div className="relative px-6 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-4xl">
            <div className="text-center space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-sm font-medium">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                AI Powered Transformation Platform
              </div>

              {/* Main Title */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-slate-200 to-gray-300 bg-clip-text text-transparent leading-tight">
                Welcome to the
                <br />
                Xform
              </h1>

              {/* Subtitle */}
              <p className="text-xl sm:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                This app allows you to upload and share videos easily with powerful cloud-based processing and seamless
                social media integration.
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap justify-center gap-3 mt-8">
                <div className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-white/80 text-sm">
                  ⚡ Fast Upload
                </div>
                <div className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-white/80 text-sm">
                  🎨 Social Formats
                </div>
                <div className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-white/80 text-sm">
                  ☁️ Cloud Storage
                </div>
                <div className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-white/80 text-sm">
                  📱 Mobile Ready
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative px-6 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="text-center space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">Get Started Today</h2>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-6 max-w-md mx-auto">
              <a
                href="/sign-in"
                className="group relative px-8 py-4 bg-gradient-to-r from-slate-700 to-gray-700 text-white font-semibold rounded-xl hover:from-slate-600 hover:to-gray-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-slate-500/25 flex items-center justify-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  />
                </svg>
                <span>Sign In</span>
              </a>

              <a
                href="/sign-up"
                className="group relative px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                  />
                </svg>
                <span>Sign Up</span>
              </a>
            </div>

            {/* Quick Access */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-white/60 text-sm mb-4">Already have an account?</p>
              <a
                href="/home"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-slate-600/20 to-gray-600/20 hover:from-slate-600/30 hover:to-gray-600/30 text-white/80 hover:text-white font-medium rounded-xl transition-all duration-300 backdrop-blur-sm border border-white/10 hover:border-white/20"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                <span>Go to Home</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative px-6 py-16 sm:px-8 lg:px-12 border-t border-white/10">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Why Choose Our Platform?</h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Experience the next generation of video sharing with our advanced features and intuitive interface.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-slate-600 to-gray-600 rounded-2xl flex items-center justify-center mb-6 group-hover:from-slate-500 group-hover:to-gray-500 transition-all duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Easy Upload</h3>
              <p className="text-white/70 leading-relaxed">
                Drag and drop your videos or browse to upload. Support for all major video formats with automatic
                optimization.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-slate-600 to-gray-600 rounded-2xl flex items-center justify-center mb-6 group-hover:from-slate-500 group-hover:to-gray-500 transition-all duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Social Ready</h3>
              <p className="text-white/70 leading-relaxed">
                Automatically format your content for Instagram, Twitter, Facebook, and more with intelligent cropping.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-slate-600 to-gray-600 rounded-2xl flex items-center justify-center mb-6 group-hover:from-slate-500 group-hover:to-gray-500 transition-all duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Secure & Fast</h3>
              <p className="text-white/70 leading-relaxed">
                Enterprise-grade security with lightning-fast CDN delivery. Your content is protected and accessible
                worldwide.
              </p>
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
