import { createClient } from '@/lib/supabase/server'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default async function Home() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-2xl font-bold text-white">PharmaHCP</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#analytics" className="text-gray-300 hover:text-white transition-colors">Analytics</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-20 lg:py-32">
            <div className="text-center">
              {/* Main Heading with Enhanced Typography */}
              <div className="mb-8">
                <h1 className="text-6xl lg:text-8xl font-black text-white mb-4 leading-tight">
                  <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                    PharmaHCP
                  </span>
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-100 mb-6 max-w-4xl mx-auto leading-relaxed">
                Next-Generation Healthcare Professional Engagement Platform
              </h2>
              
              <p className="max-w-4xl mx-auto text-xl text-gray-300 mb-12 leading-relaxed">
                Transform your pharmaceutical marketing with AI-powered insights, 
                advanced HCP segmentation, and real-time campaign optimization. 
                Drive engagement across all adoption stages with precision analytics.
              </p>

              {/* Enhanced Feature Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
                <div className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">AI-Powered Analytics</h3>
                  <p className="text-gray-300 leading-relaxed">Machine learning algorithms analyze HCP behavior patterns and predict engagement outcomes with 94% accuracy</p>
                </div>

                <div className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Smart Segmentation</h3>
                  <p className="text-gray-300 leading-relaxed">Advanced HCP profiling from non-adopters to loyalists with personalized engagement strategies</p>
                </div>

                <div className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Real-Time Optimization</h3>
                  <p className="text-gray-300 leading-relaxed">Live campaign performance monitoring with instant optimization recommendations and A/B testing</p>
                </div>
              </div>

              {/* Enhanced CTA Section */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                {user ? (
                  <div className="text-center">
                    <p className="text-2xl text-gray-100 mb-8">
                      Welcome back, <span className="text-cyan-400 font-bold">{user.email}</span>
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                      <Link href="/dashboard">
                        <Button size="lg" className="bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 hover:from-blue-600 hover:via-cyan-600 hover:to-blue-700 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-1">
                          <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                          Access Dashboard
                        </Button>
                      </Link>
                      <form action="/auth/signout" method="post">
                        <Button type="submit" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 px-10 py-4 rounded-2xl font-bold text-lg backdrop-blur-sm">
                          Sign Out
                        </Button>
                      </form>
                    </div>
                  </div>
                ) : (
                  <>
                    <Link href="/login">
                      <Button size="lg" className="bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 hover:from-blue-600 hover:via-cyan-600 hover:to-blue-700 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-1">
                        <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                        </svg>
                        Sign In
                      </Button>
                    </Link>
                    <Link href="/signup">
                      <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-10 py-4 rounded-2xl font-bold text-lg backdrop-blur-sm">
                        <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                        </svg>
                        Get Started
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Stats Section */}
      <div className="relative bg-gradient-to-r from-white/5 via-white/10 to-white/5 backdrop-blur-sm border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Trusted by Leading Pharma Companies</h3>
            <p className="text-gray-300 text-lg">Powering engagement across 50+ countries</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl font-black text-white mb-2 group-hover:scale-110 transition-transform duration-300">2,847</div>
              <div className="text-gray-300 font-medium">Total HCPs</div>
              <div className="text-sm text-green-400 mt-1">+12% this month</div>
            </div>
            <div className="group">
              <div className="text-4xl font-black text-white mb-2 group-hover:scale-110 transition-transform duration-300">68.4%</div>
              <div className="text-gray-300 font-medium">Engagement Rate</div>
              <div className="text-sm text-blue-400 mt-1">+5.2% improvement</div>
            </div>
            <div className="group">
              <div className="text-4xl font-black text-white mb-2 group-hover:scale-110 transition-transform duration-300">23.7%</div>
              <div className="text-gray-300 font-medium">Rx Conversion</div>
              <div className="text-sm text-purple-400 mt-1">+2.1% this quarter</div>
            </div>
            <div className="group">
              <div className="text-4xl font-black text-white mb-2 group-hover:scale-110 transition-transform duration-300">+187%</div>
              <div className="text-gray-300 font-medium">Overall ROI</div>
              <div className="text-sm text-cyan-400 mt-1">Industry leading</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
