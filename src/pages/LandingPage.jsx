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
            <section className="section-padding pt-32">
                <div className="container-max">
                    <div className="text-center">
                        <div className="mb-16">
                            <div className="w-32 h-32 lime-gradient rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
                                <span className="text-6xl">👁️</span>
                            </div>
                        </div>

                       <div className="flex flex-col items-center text-center">
    <h1 className="heading-xl mb-8 leading-tight">
        Project <span className="lime-text">Drishti</span>
    </h1>

    <p className="heading-md text-muted mb-8 max-w-5xl mx-auto">
        AI-Powered Event Safety Platform - Transforming Reactive Monitoring into
        <span className="lime-text font-semibold"> Proactive Intelligence</span>
    </p>

    <p className="text-enhanced mb-16 max-w-4xl mx-auto">
        Moving from reactive incident response to predictive crowd intelligence, preventing emergencies before
        they occur.
    </p>
</div>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-6">
                            <Link
                                to="/dashboard"
                                className="btn-primary text-lg px-12 py-5"
                            >
                                🚀 Launch Dashboard
                            </Link>
                            <button className="btn-secondary text-lg px-12 py-5">
                                🎬 Watch Demo
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="section-padding">
                <div className="container-max">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="stats-card hover-lift">
                                <div className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${stat.color}`}>{stat.number}</div>
                                <div className="text-muted text-base md:text-lg font-medium leading-tight">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="section-padding">
                <div className="container-max">
                    <div className="text-center mb-20">
                        <h2 className="heading-lg mb-8">
                            Intelligent <span className="lime-text">Modules</span>
                        </h2>
                        <p className="text-enhanced max-w-4xl mx-auto">
                            Seven integrated modules working together to create the ultimate event safety ecosystem
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 grid-equal-height">
                        {features.map((feature, index) => (
                            <Link key={index} to={feature.link} className="hover-lift group">
                                <div className="module-card">
                                    <div className="text-center mb-6">
                                        <div className="text-5xl mb-4">{feature.icon}</div>
                                        <h3 className="text-2xl font-bold lime-text">{feature.title}</h3>
                                    </div>
                                    <p className="text-muted leading-relaxed mb-6 flex-grow text-center">{feature.description}</p>
                                    <div className="flex items-center justify-center text-lime-400 mt-auto group-hover:translate-x-2 transition-transform duration-300">
                                        <span className="font-medium">Explore Module</span>
                                        <svg
                                            className="w-5 h-5 ml-2"
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
            <section className="section-padding">
                <div className="container-max">
                    <div className="text-center mb-16">
                        <h2 className="heading-lg mb-8">
                            Powered by <span className="lime-text">Google AI</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                        {[
                            { name: "Vertex AI", desc: "Vision & Forecasting", icon: "🧠" },
                            { name: "Gemini Pro", desc: "Natural Language", icon: "💎" },
                            { name: "Firebase", desc: "Real-time Database", icon: "🔥" },
                            { name: "Google Maps", desc: "Location Intelligence", icon: "🗺️" },
                        ].map((tech, index) => (
                            <div key={index} className="glass-card p-6 md:p-8 hover-lift text-center">
                                <div className="text-3xl md:text-4xl mb-4">{tech.icon}</div>
                                <h3 className="font-bold text-lime-400 mb-2 text-lg md:text-xl">{tech.name}</h3>
                                <p className="text-muted text-sm md:text-base">{tech.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding">
                <div className="container-max">
                    <div className="max-w-5xl mx-auto">
                        <div className="glass-card p-8 md:p-12 lg:p-16 text-center">
                            <h2 className="heading-md mb-6 md:mb-8">Ready to Transform Event Safety?</h2>
                            <p className="text-enhanced mb-8 md:mb-12 max-w-3xl mx-auto">
                                Join the revolution in predictive crowd intelligence and proactive safety management.
                            </p>
                            <Link
                                to="/dashboard"
                                className="btn-primary text-lg md:text-xl px-12 md:px-16 py-5 md:py-6"
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
