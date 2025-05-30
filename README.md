# 🎬 Xform : AI Powered Transformation Platform

A modern, full-stack video upload and social media content creation platform built with Next.js, featuring intelligent video processing, social media format optimization, and a sleek dark-themed UI.

[Live Demo 🚀](https://xform.iampruthvi.tech)

## ✨ Features

### 🎥 Video Management
- **Smart Upload**: Drag & drop video uploads with real-time validation
- **Format Support**: All major video formats with automatic optimization
- **File Size Limits**: Configurable upload limits (default: 70MB)
- **Progress Tracking**: Real-time upload progress with visual feedback

### 🎨 Social Media Integration
- **Auto-Formatting**: Intelligent cropping for Instagram, Twitter, Facebook
- **Multiple Formats**: Support for various aspect ratios (1:1, 4:5, 16:9, 3:1, 205:78)
- **Preview System**: Real-time preview before download
- **Batch Processing**: Transform images for multiple platforms

### 🔐 Authentication & Security
- **Clerk Integration**: Secure user authentication and management
- **Protected Routes**: Role-based access control
- **Session Management**: Persistent login sessions
- **User Profiles**: Avatar and profile management

### 🎯 Modern UI/UX
- **Dark Theme**: Sophisticated black/grey/slate color palette
- **Glass Morphism**: Backdrop blur effects and translucent elements
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Smooth Animations**: Micro-interactions and hover effects
- **Loading States**: Professional skeleton loaders and progress indicators

## 🚀 Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **React 18** - UI library with hooks and modern patterns
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful SVG icons

### Backend & Services
- **Cloudinary** - Image and video processing and storage
- **Clerk** - Authentication and user management
- **Axios** - HTTP client for API requests

### Development
- **TypeScript/JavaScript** - Type-safe development
- **ESLint** - Code linting and formatting
- **Git** - Version control

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Cloudinary account
- Clerk account

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/cloudinary-video-platform.git
cd cloudinary-video-platform
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Environment Setup
Create a `.env.local` file in the root directory:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
```

### 4. Run Development Server
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🏗️ Project Structure

```
cloudinary-video-platform/
├── app/                          # Next.js App Router
│   ├── (auth)/                   # Authentication routes
│   │   ├── sign-in/
│   │   └── sign-up/
│   ├── api/                      # API routes
│   │   ├── image-upload/
│   │   └── video-upload/
│   ├── home/                     # Video gallery page
│   ├── social-share/             # Social media formatter
│   ├── video-upload/             # Video upload page
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Landing page
├── components/                   # Reusable components
│   ├── AppLayout.jsx             # Main app layout
│   └── VideoCard.jsx             # Video display component
├── public/                       # Static assets
├── .env.local                    # Environment variables
├── next.config.js                # Next.js configuration
├── tailwind.config.js            # Tailwind CSS configuration
└── package.json                  # Dependencies and scripts
```

## 🎨 Design System

### Color Palette
```css
/* Primary Background */
bg-gradient-to-br from-slate-900 via-gray-900 to-black

/* Glass Elements */
bg-white/5 backdrop-blur-sm border border-white/10

/* Interactive Elements */
bg-gradient-to-r from-slate-700 to-gray-700
hover:from-slate-600 hover:to-gray-600

/* Text Colors */
text-white                    /* Primary text */
text-white/70                 /* Secondary text */
text-white/50                 /* Tertiary text */
```

### Component Patterns
- **Glass Morphism**: `bg-white/5 backdrop-blur-sm border border-white/10`
- **Gradient Buttons**: `bg-gradient-to-r from-slate-700 to-gray-700`
- **Hover Effects**: `hover:scale-105 transition-all duration-300`
- **Loading States**: Custom spinners and skeleton loaders

## 📱 Pages Overview

### 🏠 Landing Page (`/`)
- Hero section with platform introduction
- Feature showcase with benefits
- Call-to-action buttons for sign-up/sign-in
- Responsive design with animated elements

### 🎥 Video Gallery (`/home`)
- Grid layout of uploaded videos
- Search and filter functionality
- Video preview and download options
- Responsive card-based design

### 📤 Video Upload (`/video-upload`)
- Drag & drop file upload
- Form validation and file size checking
- Real-time upload progress
- Success/error state handling

### 🎨 Social Share (`/social-share`)
- Image upload and format selection
- Real-time preview of transformations
- Multiple social media format support
- Download optimized images

## 🔧 API Endpoints

### POST `/api/video-upload`
Upload video files to Cloudinary
```javascript
// Request
FormData: {
  file: File,
  title: string,
  description: string,
  originalSize: string
}

// Response
{
  success: boolean,
  publicId: string,
  url: string
}
```

### POST `/api/image-upload`
Upload images for social media formatting
```javascript
// Request
FormData: {
  file: File
}

// Response
{
  success: boolean,
  publicId: string
}
```

## 🎯 Key Features Implementation

### Video Upload Flow
1. **File Selection**: User selects video file with validation
2. **Form Submission**: Title, description, and file data
3. **Upload Progress**: Real-time progress tracking
4. **Cloudinary Processing**: Automatic optimization and storage
5. **Success Redirect**: Navigate to video gallery

### Social Media Formatting
1. **Image Upload**: User uploads source image
2. **Format Selection**: Choose target social platform
3. **Real-time Preview**: Cloudinary transformation preview
4. **Download**: Optimized image download

### Authentication Flow
1. **Clerk Integration**: Secure sign-up/sign-in
2. **Protected Routes**: Middleware-based route protection
3. **User Context**: Global user state management
4. **Session Persistence**: Automatic session handling

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub repository
2. Connect repository to Vercel
3. Configure environment variables
4. Deploy automatically on push

### Environment Variables for Production
```env
# Add all .env.local variables to your deployment platform
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_live_...
CLERK_SECRET_KEY=sk_live_...
CLOUDINARY_CLOUD_NAME=your_production_cloud
CLOUDINARY_API_KEY=your_production_key
CLOUDINARY_API_SECRET=your_production_secret
```

## 🔧 Configuration

### Cloudinary Setup
1. Create account at [cloudinary.com](https://cloudinary.com)
2. Get API credentials from dashboard
3. Configure upload presets for video/image processing
4. Set up transformation parameters

### Clerk Setup
1. Create account at [clerk.dev](https://clerk.dev)
2. Create new application
3. Configure authentication methods
4. Set up redirect URLs

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

### Development Guidelines
- Follow existing code style and patterns
- Maintain consistent component structure
- Add proper TypeScript types where applicable
- Test responsive design on multiple devices
- Ensure accessibility standards

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Cloudinary** - For powerful media processing APIs
- **Clerk** - For seamless authentication solutions
- **Vercel** - For excellent deployment platform
- **Tailwind CSS** - For utility-first styling approach
- **Lucide** - For beautiful icon library

## 📞 Support

For any questions:
- 📧 Email: ppruthviraj254@gmail.com


---

<div align="center">
  <p>Built with ❤️ using Next.js and Cloudinary</p>
  <p>
    <a href="https://nextjs.org">
      <img src="https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js" alt="Next.js" />
    </a>
    <a href="https://tailwindcss.com">
      <img src="https://img.shields.io/badge/Tailwind-CSS-blue?style=flat-square&logo=tailwindcss" alt="Tailwind CSS" />
    </a>
    <a href="https://cloudinary.com">
      <img src="https://img.shields.io/badge/Cloudinary-Media-orange?style=flat-square&logo=cloudinary" alt="Cloudinary" />
    </a>
    <a href="https://clerk.dev">
      <img src="https://img.shields.io/badge/Clerk-Auth-purple?style=flat-square&logo=clerk" alt="Clerk" />
    </a>
  </p>
</div>
