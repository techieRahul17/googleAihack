"use client"

import { useState } from "react"

const PreEventPlanning = () => {
    const [selectedEvent, setSelectedEvent] = useState("concert")
    const [registrations, setRegistrations] = useState(2847)
    const [arrivalOptimization, setArrivalOptimization] = useState(94)

    const eventTypes = [
        { id: "concert", name: "Music Concert", capacity: 15000, icon: "🎵" },
        { id: "sports", name: "Sports Event", capacity: 25000, icon: "⚽" },
        { id: "conference", name: "Tech Conference", capacity: 5000, icon: "💼" },
        { id: "festival", name: "Cultural Festival", capacity: 30000, icon: "🎭" },
    ]

    const trafficRoutes = [
        { route: "Route A (Main Highway)", load: 45, time: "25 min", status: "optimal" },
        { route: "Route B (City Center)", load: 78, time: "35 min", status: "congested" },
        { route: "Route C (Bypass Road)", load: 32, time: "22 min", status: "optimal" },
        { route: "Route D (Alternate)", load: 56, time: "28 min", status: "moderate" },
    ]

    const arrivalPredictions = [
        { time: "16:00-17:00", predicted: 850, actual: 823, variance: "-3%" },
        { time: "17:00-18:00", predicted: 1200, actual: 1156, variance: "-4%" },
        { time: "18:00-19:00", predicted: 950, actual: 0, variance: "Pending" },
        { time: "19:00-20:00", predicted: 600, actual: 0, variance: "Pending" },
    ]

    return (
        <div className="page-wrapper">
            <div className="page-container">
                {/* Header */}
                <div className="text-center section-gap">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Pre-Event Planning & Registration</h1>
                    <p className="text-xl text-gray-300 max-w-4xl mx-auto">Intelligent arrival orchestration and capacity planning system</p>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-4 card-spacing section-gap">
                    <div className="gradient-card p-6 rounded-xl">
                        <div className="flex items-center justify-between mb-4">
                            <div className="text-3xl">👥</div>
                            <div className="text-green-400 text-sm font-medium">+12%</div>
                        </div>
                        <div className="text-2xl font-bold text-white mb-1">{registrations.toLocaleString()}</div>
                        <div className="text-gray-400 text-sm">Total Registrations</div>
                    </div>

                    <div className="gradient-card p-6 rounded-xl">
                        <div className="flex items-center justify-between mb-4">
                            <div className="text-3xl">🎯</div>
                            <div className="text-lime-400 text-sm font-medium">{arrivalOptimization}%</div>
                        </div>
                        <div className="text-2xl font-bold text-white mb-1">Optimized</div>
                        <div className="text-gray-400 text-sm">Arrival Distribution</div>
                    </div>

                    <div className="gradient-card p-6 rounded-xl">
                        <div className="flex items-center justify-between mb-4">
                            <div className="text-3xl">🚗</div>
                            <div className="text-blue-400 text-sm font-medium">4 Routes</div>
                        </div>
                        <div className="text-2xl font-bold text-white mb-1">Active</div>
                        <div className="text-gray-400 text-sm">Traffic Management</div>
                    </div>

                    <div className="gradient-card p-6 rounded-xl">
                        <div className="flex items-center justify-between mb-4">
                            <div className="text-3xl">⏱️</div>
                            <div className="text-orange-400 text-sm font-medium">±10min</div>
                        </div>
                        <div className="text-2xl font-bold text-white mb-1">Accurate</div>
                        <div className="text-gray-400 text-sm">Time Predictions</div>
                    </div>
                </div>

                {/* Event Selection */}
                <div className="gradient-card p-6 rounded-xl mb-10">
                    <h3 className="text-xl font-bold text-lime-400 mb-6 text-left">Event Configuration</h3>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {eventTypes.map((event) => (
                            <button
                                key={event.id}
                                onClick={() => setSelectedEvent(event.id)}
                                className={`p-4 rounded-lg border-2 transition-all hover-scale ${
                                    selectedEvent === event.id
                                        ? "border-lime-400 bg-lime-400/10"
                                        : "border-gray-600 glass-effect hover:border-lime-400/50"
                                }`}
                            >
                                <div className="text-3xl mb-2">{event.icon}</div>
                                <div className="font-medium text-white mb-1">{event.name}</div>
                                <div className="text-sm text-gray-400">Capacity: {event.capacity.toLocaleString()}</div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Traffic Routes & Arrival Predictions */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
                    {/* Traffic Routes */}
                    <div className="gradient-card p-6 rounded-xl">
                        <h3 className="text-xl font-bold text-lime-400 mb-6 text-left">Traffic Route Optimization</h3>
                        <div className="space-y-6">
                            {trafficRoutes.map((route, index) => (
                                <div key={index} className="glass-effect p-4 rounded-lg">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="font-medium text-white">{route.route}</div>
                                        <div
                                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                                                route.status === "optimal"
                                                    ? "bg-green-500/20 text-green-400"
                                                    : route.status === "congested"
                                                        ? "bg-red-500/20 text-red-400"
                                                        : "bg-orange-500/20 text-orange-400"
                                            }`}
                                        >
                                            {route.status}
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between text-sm">
                                        <div className="text-gray-400">Load: {route.load}%</div>
                                        <div className="text-gray-400">ETA: {route.time}</div>
                                    </div>
                                    <div className="mt-2 bg-gray-700 rounded-full h-2">
                                        <div
                                            className={`h-2 rounded-full ${
                                                route.status === "optimal"
                                                    ? "bg-green-400"
                                                    : route.status === "congested"
                                                        ? "bg-red-400"
                                                        : "bg-orange-400"
                                            }`}
                                            style={{ width: `${route.load}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Arrival Predictions */}
                    <div className="gradient-card p-6 rounded-xl">
                        <h3 className="text-xl font-bold text-lime-400 mb-6 text-left">Arrival Time Predictions</h3>
                        <div className="space-y-6">
                            {arrivalPredictions.map((prediction, index) => (
                                <div key={index} className="glass-effect p-4 rounded-lg">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="font-medium text-white">{prediction.time}</div>
                                        <div
                                            className={`text-sm font-medium ${
                                                prediction.variance === "Pending"
                                                    ? "text-gray-400"
                                                    : prediction.variance.startsWith("-")
                                                        ? "text-green-400"
                                                        : "text-red-400"
                                            }`}
                                        >
                                            {prediction.variance}
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between text-sm">
                                        <div className="text-gray-400">Predicted: {prediction.predicted.toLocaleString()}</div>
                                        <div className="text-gray-400">
                                            Actual: {prediction.actual ? prediction.actual.toLocaleString() : "TBD"}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Registration Analytics */}
                <div className="gradient-card p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-lime-400 mb-6 text-left">Registration Analytics</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-lime-400 mb-2">89%</div>
                            <div className="text-gray-400">Pre-Registration Rate</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-blue-400 mb-2">15min</div>
                            <div className="text-gray-400">Avg. Registration Time</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-green-400 mb-2">94%</div>
                            <div className="text-gray-400">Location Tracking Consent</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PreEventPlanning
