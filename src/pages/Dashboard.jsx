"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const Dashboard = () => {
    const [currentTime, setCurrentTime] = useState(new Date())
    const [activeAlerts, setActiveAlerts] = useState(3)

    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000)
        return () => clearInterval(timer)
    }, [])

    const modules = [
        {
            title: "Pre-Event Planning",
            status: "Active",
            users: "2,847",
            efficiency: "94%",
            icon: "📅",
            link: "/pre-event-planning",
        },
        {
            title: "Venue Intelligence",
            status: "Monitoring",
            capacity: "78%",
            bottlenecks: "2",
            icon: "🏟️",
            link: "/venue-intelligence",
        },
        {
            title: "Real-Time Monitoring",
            status: "Active",
            cameras: "24/24",
            anomalies: "0",
            icon: "📊",
            link: "/real-time-monitoring",
        },
        {
            title: "Emergency Response",
            status: "Standby",
            responders: "12",
            avgResponse: "1.8min",
            icon: "🚨",
            link: "/emergency-response",
        },
    ]

    const recentEvents = [
        { time: "14:32", event: "Crowd density alert - Gate 3", severity: "medium" },
        { time: "14:28", event: "Route optimization completed", severity: "low" },
        { time: "14:25", event: "New user registration spike", severity: "low" },
        { time: "14:20", event: "Weather update received", severity: "low" },
        { time: "14:15", event: "Emergency drill completed", severity: "medium" },
    ]

    const liveMetrics = [
        { label: "Total Attendees", value: "8,247", change: "+12%" },
        { label: "Active Cameras", value: "24", change: "100%" },
        { label: "Response Time", value: "1.8min", change: "-15%" },
        { label: "Satisfaction", value: "4.8/5", change: "+8%" },
    ]

    return (
        <div className="page-wrapper">
            <div className="page-container">
                {/* Header */}
                <div className="section-gap">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                        <div>
                            <h1 className="heading-md lime-text mb-4">Mission Control Dashboard</h1>
                            <p className="text-muted text-lg">
                                {currentTime.toLocaleDateString()} • {currentTime.toLocaleTimeString()}
                            </p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-3">
                                <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                                <span className="text-green-400 font-medium text-lg">System Online</span>
                            </div>
                            <div className="glass-card px-6 py-3">
                                <span className="text-orange-400 font-medium">{activeAlerts} Active Alerts</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Live Metrics */}
                <div className="grid grid-cols-2 lg:grid-cols-4 card-spacing section-gap space-x-4">
                    {liveMetrics.map((metric, index) => (
                        <div key={index} className="stats-card hover-lift">
                            <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                            <div className="text-muted mb-3">{metric.label}</div>
                            <div
                                className={`text-sm font-medium ${
                                    metric.change.startsWith("+")
                                        ? "text-green-400"
                                        : metric.change.startsWith("-")
                                            ? "text-red-400"
                                            : "text-lime-400"
                                }`}
                            >
                                {metric.change}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Module Status Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 card-spacing section-gap space-x-4">
                    {modules.map((module, index) => (
                        <Link key={index} to={module.link} className="hover-lift group">
                            <div className="module-card">
                                <div className="flex items-center justify-between mb-6">
                                    <div className="text-4xl">{module.icon}</div>
                                    <div
                                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                                            module.status === "Active"
                                                ? "bg-green-500/20 text-green-400"
                                                : module.status === "Monitoring"
                                                    ? "bg-blue-500/20 text-blue-400"
                                                    : "bg-gray-500/20 text-gray-400"
                                        }`}
                                    >
                                        {module.status}
                                    </div>
                                </div>

                                <h3 className="font-bold text-white mb-4 text-xl">{module.title}</h3>

                                <div className="space-y-3 flex-grow">
                                    {module.users && (
                                        <div className="flex justify-between">
                                            <span className="text-muted">Users:</span>
                                            <span className="text-white font-medium">{module.users}</span>
                                        </div>
                                    )}
                                    {module.efficiency && (
                                        <div className="flex justify-between">
                                            <span className="text-muted">Efficiency:</span>
                                            <span className="text-lime-400 font-medium">{module.efficiency}</span>
                                        </div>
                                    )}
                                    {module.capacity && (
                                        <div className="flex justify-between">
                                            <span className="text-muted">Capacity:</span>
                                            <span className="text-blue-400 font-medium">{module.capacity}</span>
                                        </div>
                                    )}
                                    {module.cameras && (
                                        <div className="flex justify-between">
                                            <span className="text-muted">Cameras:</span>
                                            <span className="text-green-400 font-medium">{module.cameras}</span>
                                        </div>
                                    )}
                                    {module.responders && (
                                        <div className="flex justify-between">
                                            <span className="text-muted">Responders:</span>
                                            <span className="text-red-400 font-medium">{module.responders}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Recent Events & Quick Actions */}
                <div className="grid grid-cols-1 lg:grid-cols-2 card-spacing space-x-4">
                    {/* Recent Events */}
                    <div className="glass-card p-8">
                        <h3 className="text-2xl font-bold lime-text mb-8">Recent Events</h3>
                        <div className="space-y-4">
                            {recentEvents.map((event, index) => (
                                <div
                                    key={index}
                                    className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                                >
                                    <div className="text-muted font-mono text-sm">{event.time}</div>
                                    <div
                                        className={`w-3 h-3 rounded-full ${
                                            event.severity === "high"
                                                ? "bg-red-400"
                                                : event.severity === "medium"
                                                    ? "bg-orange-400"
                                                    : "bg-green-400"
                                        }`}
                                    ></div>
                                    <div className="flex-1 text-white">{event.event}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="glass-card p-8">
                        <h3 className="text-2xl font-bold lime-text mb-8">Quick Actions</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <Link
                                to="/emergency-response"
                                className="p-6 bg-white/5 rounded-xl hover-lift text-center hover:bg-red-500/10 transition-colors"
                            >
                                <div className="text-3xl mb-3">{`🚨`}</div>
                                <div className="font-medium text-white">Emergency Alert</div>
                            </Link>
                            <Link
                                to="/voice-assistant"
                                className="p-6 bg-white/5 rounded-xl hover-lift text-center hover:bg-blue-500/10 transition-colors"
                            >
                                <div className="text-3xl mb-3">{`🎤`}</div>
                                <div className="font-medium text-white">Voice Command</div>
                            </Link>
                            <Link
                                to="/real-time-monitoring"
                                className="p-6 bg-white/5 rounded-xl hover-lift text-center hover:bg-purple-500/10 transition-colors"
                            >
                                <div className="text-3xl mb-3">{`📊`}</div>
                                <div className="font-medium text-white">Live Analytics</div>
                            </Link>
                            <Link
                                to="/social-media-intelligence"
                                className="p-6 bg-white/5 rounded-xl hover-lift text-center hover:bg-cyan-500/10 transition-colors"
                            >
                                <div className="text-3xl mb-3">{`📱`}</div>
                                <div className="font-medium text-white">Social Monitor</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
