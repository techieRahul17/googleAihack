"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navItems = [
        { name: "Home", path: "/" },
        { name: "Dashboard", path: "/dashboard" },
        { name: "Pre-Event", path: "/pre-event-planning" },
        { name: "Venue Intel", path: "/venue-intelligence" },
        { name: "Monitoring", path: "/real-time-monitoring" },
        { name: "Experience", path: "/smart-venue-experience" },
        { name: "Emergency", path: "/emergency-response" },
        { name: "Voice AI", path: "/voice-assistant" },
        { name: "Social Intel", path: "/social-media-intelligence" },
    ]

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass-nav" : "bg-transparent"}`}
        >
            <div className="container-max">
                <div className="flex items-center justify-between h-20 px-4">
                    <Link to="/" className="flex items-center space-x-3 hover-lift">
                        <div className="w-12 h-12 lime-gradient rounded-xl perfect-center shadow-lg">
                            <span className="text-white font-bold text-xl">👁️</span>
                        </div>
                        <span className="text-2xl font-bold lime-text">Drishti</span>
                    </Link>

                    <div className="hidden lg:flex items-center space-x-2">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                                    location.pathname === item.path
                                        ? "bg-lime-500/20 text-lime-400 shadow-lg"
                                        : "text-gray-300 hover:text-lime-400 hover:bg-white/10 hover:backdrop-blur-sm"
                                }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-gray-300 hover:text-lime-400 p-2 rounded-lg hover:bg-white/10 transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>

                {isMobileMenuOpen && (
                    <div className="lg:hidden pb-6">
                        <div className="glass-card p-6 mt-4 space-y-3">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`block px-5 py-4 rounded-xl text-base font-medium transition-all duration-300 ${
                                        location.pathname === item.path
                                            ? "bg-lime-500/20 text-lime-400 shadow-lg"
                                            : "text-gray-300 hover:text-lime-400 hover:bg-white/10"
                                    }`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar
