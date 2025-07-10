"use client"

import { useState } from "react"

const SmartVenueExperience = () => {
    const [userProfile, setUserProfile] = useState({
        name: "Alex Johnson",
        interests: ["Music", "Food", "Art"],
        location: "Main Entrance",
    })

    const stallRecommendations = [
        {
            name: "Artisan Pizza Corner",
            category: "Food",
            waitTime: "8 min",
            crowdLevel: "moderate",
            distance: "120m",
            rating: 4.8,
            match: 95,
        },
        {
            name: "Live Jazz Lounge",
            category: "Music",
            waitTime: "2 min",
            crowdLevel: "low",
            distance: "85m",
            rating: 4.9,
            match: 92,
        },
        {
            name: "Local Art Gallery",
            category: "Art",
            waitTime: "0 min",
            crowdLevel: "low",
            distance: "200m",
            rating: 4.6,
            match: 88,
        },
        {
            name: "Craft Beer Garden",
            category: "Food",
            waitTime: "15 min",
            crowdLevel: "high",
            distance: "150m",
            rating: 4.7,
            match: 78,
        },
    ]

    const queueManagement = [
        { location: "Main Food Court", currentWait: "12 min", predictedWait: "8 min", trend: "decreasing" },
        { location: "Merchandise Store", currentWait: "5 min", predictedWait: "7 min", trend: "increasing" },
        { location: "VIP Lounge Entry", currentWait: "3 min", predictedWait: "3 min", trend: "stable" },
        { location: "Photo Booth Area", currentWait: "18 min", predictedWait: "22 min", trend: "increasing" },
    ]

    const navigationSuggestions = [
        {
            destination: "Stage Area",
            route: "Via Main Corridor",
            walkTime: "6 min",
            crowdLevel: "moderate",
            accessibility: "wheelchair-friendly",
        },
        {
            destination: "Restrooms (Block A)",
            route: "Shortest Path",
            walkTime: "3 min",
            crowdLevel: "low",
            accessibility: "stairs required",
        },
        {
            destination: "Emergency Exit",
            route: "Fastest Route",
            walkTime: "4 min",
            crowdLevel: "low",
            accessibility: "wheelchair-friendly",
        },
    ]

    const liveNotifications = [
        {
            time: "2 min ago",
            type: "recommendation",
            message: "Jazz performance starting in 10 minutes at Live Jazz Lounge",
            priority: "medium",
        },
        {
            time: "5 min ago",
            type: "queue",
            message: "Wait time at Artisan Pizza reduced to 8 minutes",
            priority: "low",
        },
        {
            time: "8 min ago",
            type: "navigation",
            message: "Alternative route to Stage Area now available",
            priority: "low",
        },
        {
            time: "12 min ago",
            type: "event",
            message: "New art exhibition opened at Local Art Gallery",
            priority: "medium",
        },
    ]

    const experienceMetrics = [
        { label: "Satisfaction Score", value: "4.8/5", trend: "+0.2" },
        { label: "Avg. Wait Time", value: "9.2 min", trend: "-2.1 min" },
        { label: "Navigation Accuracy", value: "96%", trend: "+3%" },
        { label: "Recommendation CTR", value: "42%", trend: "+8%" },
    ]

    return (
        <div className="page-wrapper">
            <div className="page-container">
                {/* Header */}
                <div className="text-center section-gap">
                    <h1 className="text-4xl font-bold text-lime-400 mb-6">Smart Venue Experience</h1>
                    <p className="text-xl text-gray-400 max-w-4xl mx-auto">
                        Enhanced visitor experience through intelligent notifications and personalized recommendations
                    </p>
                </div>

                {/* User Profile & Experience Metrics */}
                <div className="grid grid-cols-1 lg:grid-cols-3 card-spacing section-gap">
                    {/* User Profile */}
                    <div className="gradient-card p-6 rounded-xl">
                        <h3 className="text-xl font-bold text-lime-400 mb-4">Your Profile</h3>
                        <div className="flex items-center space-x-4 mb-4">
                            <div className="w-12 h-12 bg-lime-500 rounded-full flex items-center justify-center">
                                <span className="text-white font-bold text-lg">A</span>
                            </div>
                            <div>
                                <div className="font-medium text-white">{userProfile.name}</div>
                                <div className="text-gray-400 text-sm">📍 {userProfile.location}</div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <div className="text-gray-400 text-sm mb-2">Interests</div>
                            <div className="flex flex-wrap gap-2">
                                {userProfile.interests.map((interest, index) => (
                                    <span key={index} className="px-2 py-1 bg-lime-500/20 text-lime-400 rounded-full text-xs">
                    {interest}
                  </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Experience Metrics */}
                    <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-4">
                        {experienceMetrics.map((metric, index) => (
                            <div key={index} className="gradient-card p-4 rounded-xl">
                                <div className="text-lg font-bold text-white mb-1">{metric.value}</div>
                                <div className="text-gray-400 text-xs mb-2">{metric.label}</div>
                                <div
                                    className={`text-xs font-medium ${
                                        metric.trend.startsWith("+")
                                            ? "text-green-400"
                                            : metric.trend.startsWith("-") && metric.label.includes("Wait")
                                                ? "text-green-400"
                                                : metric.trend.startsWith("-")
                                                    ? "text-red-400"
                                                    : "text-lime-400"
                                    }`}
                                >
                                    {metric.trend}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Personalized Recommendations */}
                <div className="gradient-card p-6 rounded-xl mb-8">
                    <h3 className="text-xl font-bold text-lime-400 mb-6">Personalized Recommendations</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {stallRecommendations.map((stall, index) => (
                            <div key={index} className="glass-effect p-4 rounded-lg hover-scale">
                                <div className="flex items-center justify-between mb-3">
                                    <div
                                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                                            stall.category === "Food"
                                                ? "bg-orange-500/20 text-orange-400"
                                                : stall.category === "Music"
                                                    ? "bg-purple-500/20 text-purple-400"
                                                    : "bg-blue-500/20 text-blue-400"
                                        }`}
                                    >
                                        {stall.category}
                                    </div>
                                    <div className="text-lime-400 text-sm font-medium">{stall.match}% match</div>
                                </div>

                                <h4 className="font-medium text-white mb-2">{stall.name}</h4>

                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-gray-400">Wait Time:</span>
                                        <span
                                            className={`${
                                                Number.parseInt(stall.waitTime) <= 5
                                                    ? "text-green-400"
                                                    : Number.parseInt(stall.waitTime) <= 10
                                                        ? "text-orange-400"
                                                        : "text-red-400"
                                            }`}
                                        >
                      {stall.waitTime}
                    </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-400">Distance:</span>
                                        <span className="text-white">{stall.distance}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-400">Rating:</span>
                                        <span className="text-lime-400">⭐ {stall.rating}</span>
                                    </div>
                                </div>

                                <button className="w-full mt-3 px-3 py-2 bg-lime-500/20 text-lime-400 rounded-lg text-sm font-medium hover:bg-lime-500/30 transition-colors">
                                    Get Directions
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Queue Management & Navigation */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    {/* Queue Management */}
                    <div className="gradient-card p-6 rounded-xl">
                        <h3 className="text-xl font-bold text-lime-400 mb-6">Live Queue Management</h3>
                        <div className="space-y-4">
                            {queueManagement.map((queue, index) => (
                                <div key={index} className="glass-effect p-4 rounded-lg">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="font-medium text-white">{queue.location}</div>
                                        <div
                                            className={`flex items-center space-x-1 text-sm ${
                                                queue.trend === "decreasing"
                                                    ? "text-green-400"
                                                    : queue.trend === "increasing"
                                                        ? "text-red-400"
                                                        : "text-gray-400"
                                            }`}
                                        >
                                            <span>{queue.trend === "decreasing" ? "↓" : queue.trend === "increasing" ? "↑" : "→"}</span>
                                            <span>{queue.trend}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between text-sm">
                                        <div>
                                            <span className="text-gray-400">Current: </span>
                                            <span className="text-white">{queue.currentWait}</span>
                                        </div>
                                        <div>
                                            <span className="text-gray-400">Predicted: </span>
                                            <span className="text-white">{queue.predictedWait}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Suggestions */}
                    <div className="gradient-card p-6 rounded-xl">
                        <h3 className="text-xl font-bold text-lime-400 mb-6">Smart Navigation</h3>
                        <div className="space-y-4">
                            {navigationSuggestions.map((nav, index) => (
                                <div key={index} className="glass-effect p-4 rounded-lg">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="font-medium text-white">{nav.destination}</div>
                                        <div className="text-lime-400 text-sm">{nav.walkTime}</div>
                                    </div>
                                    <div className="text-sm text-gray-300 mb-2">{nav.route}</div>
                                    <div className="flex items-center justify-between text-xs">
                                        <div
                                            className={`${
                                                nav.crowdLevel === "low"
                                                    ? "text-green-400"
                                                    : nav.crowdLevel === "moderate"
                                                        ? "text-orange-400"
                                                        : "text-red-400"
                                            }`}
                                        >
                                            Crowd: {nav.crowdLevel}
                                        </div>
                                        <div
                                            className={`${
                                                nav.accessibility === "wheelchair-friendly" ? "text-green-400" : "text-orange-400"
                                            }`}
                                        >
                                            ♿ {nav.accessibility}
                                        </div>
                                    </div>
                                    <button className="w-full mt-3 px-3 py-2 bg-lime-500/20 text-lime-400 rounded-lg text-sm font-medium hover:bg-lime-500/30 transition-colors">
                                        Start Navigation
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Live Notifications */}
                <div className="gradient-card p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-lime-400 mb-6">Live Notifications</h3>
                    <div className="space-y-3">
                        {liveNotifications.map((notification, index) => (
                            <div key={index} className="glass-effect p-4 rounded-lg flex items-start space-x-3">
                                <div
                                    className={`w-2 h-2 rounded-full mt-2 ${
                                        notification.type === "recommendation"
                                            ? "bg-purple-400"
                                            : notification.type === "queue"
                                                ? "bg-orange-400"
                                                : notification.type === "navigation"
                                                    ? "bg-blue-400"
                                                    : "bg-green-400"
                                    }`}
                                ></div>
                                <div className="flex-1">
                                    <div className="text-white text-sm">{notification.message}</div>
                                    <div className="text-gray-400 text-xs mt-1">{notification.time}</div>
                                </div>
                                <div
                                    className={`px-2 py-1 rounded-full text-xs ${
                                        notification.priority === "high"
                                            ? "bg-red-500/20 text-red-400"
                                            : notification.priority === "medium"
                                                ? "bg-orange-500/20 text-orange-400"
                                                : "bg-gray-500/20 text-gray-400"
                                    }`}
                                >
                                    {notification.priority}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SmartVenueExperience
