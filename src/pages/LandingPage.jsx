import { Link } from "react-router-dom"

const LandingPage = () => {
    const features = [
        {
            title: "Pre-Event Planning",
            description: "Intelligent arrival orchestration and capacity planning with real-time location tracking",
            icon: "📅",
            link: "/pre-event-planning",
        },
        {
            title: "Venue Intelligence",
            description: "Real-time crowd flow optimization and bottleneck prevention with AI-powered analysis",
            icon: "🏟️",
            link: "/venue-intelligence",
        },
        {
            title: "Real-Time Monitoring",
            description: "Continuous surveillance and early warning system with predictive analytics",
            icon: "📊",
            link: "/real-time-monitoring",
        },
        {
            title: "Smart Experience",
            description: "Enhanced visitor experience through intelligent notifications and queue management",
            icon: "✨",
            link: "/smart-venue-experience",
        },
        {
            title: "Emergency Response",
            description: "Rapid incident detection and coordinated response with intelligent resource dispatch",
            icon: "🚨",
            link: "/emergency-response",
        },
        {
            title: "Voice Assistant",
            description: "Natural language interaction and support with multi-language capabilities",
            icon: "🎤",
            link: "/voice-assistant",
        },
        {
            title: "Social Intelligence",
            description: "External threat detection and sentiment analysis from social media monitoring",
            icon: "📱",
            link: "/social-media-intelligence",
        },
    ]

    const stats = [
        { number: "50%", label: "Reduction in crowd incidents", color: "text-blue-400" },
        { number: "40%", label: "Faster emergency response", color: "text-cyan-400" },
        { number: "30%", label: "Increased venue capacity", color: "text-purple-400" },
        { number: "60%", label: "Less traffic congestion", color: "text-pink-400" },
    ]

    return (
        <div className="min-h-screen dark-lime-bg">
            {/* Hero Section */}
            <section className="pt-32 pb-20">
                <div className="container-max text-center">
                    <div className="mb-12">
                        <div className="w-32 h-32 lime-gradient rounded-full flex items-center justify-center mx-auto mb-8">
                            <span className="text-6xl">👁️</span>
                        </div>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
                        Project <span className="lime-text">Drishti</span>
                    </h1>

                    <p className="text-2xl md:text-3xl text-gray-300 mb-8 max-w-5xl mx-auto leading-relaxed">
                        AI-Powered Event Safety Platform - Transforming Reactive Monitoring into
                        <span className="lime-text font-semibold"> Proactive Intelligence</span>
                    </p>

                    <p className="text-xl text-gray-400 mb-16 max-w-4xl mx-auto leading-relaxed">
                        Moving from reactive incident response to predictive crowd intelligence, preventing emergencies before
                        they occur.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <Link
                            to="/dashboard"
                            className="px-10 py-5 lime-gradient text-white font-bold rounded-2xl hover-lift shadow-2xl text-lg"
                        >
                            🚀 Launch Dashboard
                        </Link>
                        <button className="px-10 py-5 glass-card text-white font-bold rounded-2xl hover-lift text-lg">
                            🎬 Watch Demo
                        </button>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20">
                <div className="container-max">
                    <div className="grid grid-cols-2 lg:grid-cols-4 grid-perfect">
                        {stats.map((stat, index) => (
                            <div key={index} className="stats-card hover-lift">
                                <div className={`text-5xl md:text-6xl font-bold mb-4 ${stat.color}`}>{stat.number}</div>
                                <div className="text-gray-300 text-lg font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20">
                <div className="container-max">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl md:text-6xl font-bold mb-8">
                            Intelligent <span className="lime-text">Modules</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
                            Seven integrated modules working together to create the ultimate event safety ecosystem
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-perfect">
                        {features.map((feature, index) => (
                            <Link key={index} to={feature.link} className="hover-lift">
                                <div className="module-card">
                                    <div className="text-5xl mb-6">{feature.icon}</div>
                                    <h3 className="text-2xl font-bold mb-4 lime-text">{feature.title}</h3>
                                    <p className="text-gray-300 leading-relaxed mb-6 flex-grow">{feature.description}</p>
                                    <div className="flex items-center text-lime-400 mt-auto">
                                        <span className="font-medium">Explore Module</span>
                                        <svg
                                            className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technology Stack */}
            <section className="py-20">
                <div className="container-max">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-6xl font-bold mb-8">
                            Powered by <span className="lime-text">Google AI</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 grid-perfect">
                        {[
                            { name: "Vertex AI", desc: "Vision & Forecasting", icon: "🧠" },
                            { name: "Gemini Pro", desc: "Natural Language", icon: "💎" },
                            { name: "Firebase", desc: "Real-time Database", icon: "🔥" },
                            { name: "Google Maps", desc: "Location Intelligence", icon: "🗺️" },
                        ].map((tech, index) => (
                            <div key={index} className="glass-card p-8 hover-lift text-center">
                                <div className="text-4xl mb-4">{tech.icon}</div>
                                <h3 className="font-bold text-lime-400 mb-2 text-xl">{tech.name}</h3>
                                <p className="text-gray-400">{tech.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="container-max">
                    <div className="max-w-5xl mx-auto">
                        <div className="glass-card p-16 text-center">
                            <h2 className="text-5xl font-bold mb-8">Ready to Transform Event Safety?</h2>
                            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                                Join the revolution in predictive crowd intelligence and proactive safety management.
                            </p>
                            <Link
                                to="/dashboard"
                                className="inline-block px-12 py-6 lime-gradient text-white font-bold rounded-2xl hover-lift shadow-2xl text-xl"
                            >
                                🎯 Get Started Now
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default LandingPage
