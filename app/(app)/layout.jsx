"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useClerk, useUser } from "@clerk/nextjs"
import { LogOutIcon, MenuIcon, LayoutDashboardIcon, Share2Icon, UploadIcon, ImageIcon, XIcon } from "lucide-react"

const sidebarItems = [
  { href: "/home", icon: LayoutDashboardIcon, label: "Home Page" },
  { href: "/social-share", icon: Share2Icon, label: "Social Share" },
  { href: "/video-upload", icon: UploadIcon, label: "Video Upload" },
]

export default function AppLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const { signOut } = useClerk()
  const { user } = useUser()

  const handleLogoClick = () => {
    router.push("/")
  }

  const handleSignOut = async () => {
    await signOut()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-slate-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gray-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-slate-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative flex h-screen">
        {/* Sidebar */}
        <aside
          className={`fixed inset-y-0 left-0 z-50 w-64 bg-white/5 backdrop-blur-sm border-r border-white/10 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-slate-600 to-gray-600 rounded-xl flex items-center justify-center">
                <ImageIcon className="w-6 h-6 text-white" />
              </div>
              <span className="text-white font-bold text-lg">Xform</span>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
            >
              <XIcon className="w-5 h-5 text-white/70" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {sidebarItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                    isActive
                      ? "bg-gradient-to-r from-slate-700 to-gray-700 text-white shadow-lg"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <item.icon
                    className={`w-5 h-5 ${isActive ? "text-white" : "text-white/70 group-hover:text-white"}`}
                  />
                  <span className="font-medium">{item.label}</span>
                  {isActive && <div className="ml-auto w-2 h-2 bg-white rounded-full animate-pulse"></div>}
                </Link>
              )
            })}
          </nav>

          {/* User Section */}
          {user && (
            <div className="p-4 border-t border-white/10">
              <div className="flex items-center space-x-3 p-3 rounded-xl bg-white/5 mb-4">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/20">
                  <img
                    src={user.imageUrl || "/placeholder.svg"}
                    alt={user.username || user.emailAddresses[0].emailAddress}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-medium text-sm truncate">
                    {user.username || user.emailAddresses[0].emailAddress}
                  </p>
                  <p className="text-white/50 text-xs">Online</p>
                </div>
              </div>
              <button
                onClick={handleSignOut}
                className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-red-600/20 hover:bg-red-600/30 text-red-400 hover:text-red-300 rounded-xl transition-all duration-200 border border-red-600/30 hover:border-red-600/50"
              >
                <LogOutIcon className="w-4 h-4" />
                <span className="font-medium">Sign Out</span>
              </button>
            </div>
          )}
        </aside>

        {/* Main Content */}
        <div className="flex-1 flex flex-col lg:ml-0">
          {/* Top Navigation */}
          <header className="bg-white/5 backdrop-blur-sm border-b border-white/10 sticky top-0 z-40">
            <div className="flex items-center justify-between px-6 py-4">
              {/* <div className="flex items-center space-x-4">
                <button
                  onClick={() => setSidebarOpen(true)}
                  className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
                >
                  <MenuIcon className="w-6 h-6 text-white/70" />
                </button>
                <Link href="/" onClick={handleLogoClick}>
                  <div className="flex items-center space-x-3 cursor-pointer group">
                    <div className="w-8 h-8 bg-gradient-to-r from-slate-600 to-gray-600 rounded-lg flex items-center justify-center group-hover:from-slate-500 group-hover:to-gray-500 transition-all duration-200">
                      <ImageIcon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-white font-bold text-xl tracking-tight group-hover:text-white/90 transition-colors duration-200 hidden sm:block">
                      Cloudinary Showcase
                    </span>
                  </div>
                </Link>
              </div> */}

              {/* User Info in Header */}
              {user && (
                <div>
                  {/* <div className="hidden md:flex items-center space-x-3 px-4 py-2 bg-white/5 rounded-xl border border-white/10">
                    <div className="w-8 h-8 rounded-full overflow-hidden border border-white/20">
                      <img
                        src={user.imageUrl || "/placeholder.svg"}
                        alt={user.username || user.emailAddresses[0].emailAddress}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-white/80 text-sm font-medium truncate max-w-xs">
                      {user.username || user.emailAddresses[0].emailAddress}
                    </span>
                  </div>
                  <button
                    onClick={handleSignOut}
                    className="p-2 rounded-lg hover:bg-white/10 transition-colors duration-200 group"
                  >
                    <LogOutIcon className="w-5 h-5 text-white/70 group-hover:text-white" />
                  </button> */}
                </div>
              )}
            </div>
          </header>

          {/* Page Content */}
          <main className="flex-1 overflow-auto">
            <div className="w-full">{children}</div>
          </main>
        </div>
      </div>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  )
}
