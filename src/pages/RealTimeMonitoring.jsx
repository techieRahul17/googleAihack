"use client"

import { useState, useEffect } from "react"

const RealTimeMonitoring = () => {
    const [activeAlerts, setActiveAlerts] = useState(2)
    const [isRecording, setIsRecording] = useState(true)
    const [currentTime, setCurrentTime] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000)
        return () => clearInterval(timer)
    }, [])

    const cameraFeeds = [
        {
            id: "CAM-001",
            location: "Main Entrance",
            status: "active",
            alerts: 0,
            quality: "HD",
            image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop",
        },
        {
            id: "CAM-002",
            location: "Stage Area",
            status: "active",
            alerts: 1,
            quality: "HD",
            image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
        },
        {
            id: "CAM-003",
            location: "Food Court",
            status: "active",
            alerts: 0,
            quality: "4K",
            image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=300&fit=crop",
        },
        {
            id: "CAM-004",
            location: "Parking Lot",
            status: "active",
            alerts: 0,
            quality: "HD",
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
        },
        {
            id: "CAM-005",
            location: "Exit Gate A",
            status: "maintenance",
            alerts: 0,
            quality: "N/A",
            image: null,
        },
        {
            id: "CAM-006",
            location: "VIP Section",
            status: "active",
            alerts: 1,
            quality: "4K",
            image: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=400&h=300&fit=crop",
        },
        {
            id: "DRONE-01",
            location: "Aerial Overview",
            status: "active",
            alerts: 0,
            quality: "4K",
            image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=400&h=300&fit=crop",
        },
        {
            id: "DRONE-02",
            location: "Perimeter Patrol",
            status: "active",
            alerts: 0,
            quality: "HD",
            image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&h=300&fit=crop",
        },
    ]

    const anomalyDetections = [
        {
            time: "14:32:15",
            type: "Crowd Density",
            location: "Main Entrance",
            severity: "medium",
            description: "Unusual crowd gathering detected",
            confidence: 87,
        },
        {
            time: "14:28:42",
            type: "Suspicious Activity",
            location: "VIP Section",
            severity: "high",
            description: "Unattended bag detected for >5 minutes",
            confidence: 94,
        },
        {
            time: "14:25:18",
            type: "Smoke Detection",
            location: "Food Court",
            severity: "low",
            description: "Possible cooking smoke - normal levels",
            confidence: 76,
        },
        {
            time: "14:20:33",
            type: "Panic Behavior",
            location: "Stage Area",
            severity: "low",
            description: "Minor crowd movement irregularity",
            confidence: 68,
        },
    ]

    const predictiveAnalytics = [
        {
            prediction: "Bottleneck Formation",
            location: "Main Entrance Gate 2",
            timeframe: "15-20 minutes",
            probability: 78,
            impact: "Medium",
        },
        {
            prediction: "Crowd Surge",
            location: "Stage Front",
            timeframe: "45-60 minutes",
            probability: 65,
            impact: "High",
        },
        {
            prediction: "Parking Overflow",
            location: "Main Parking Lot",
            timeframe: "30-45 minutes",
            probability: 82,
            impact: "Low",
        },
    ]

    const systemMetrics = [
        { label: "Active Cameras", value: "23/24", status: "good" },
        { label: "Processing Latency", value: "2.1s", status: "excellent" },
        { label: "Detection Accuracy", value: "94.2%", status: "excellent" },
        { label: "False Positive Rate", value: "3.8%", status: "good" },
    ]

    return (
        <div className="pt-24 pb-12">
            <div className="container-max">
                {/* Header */}
                <div className="mb-12">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                        <div>
                            <h1 className="text-5xl font-bold lime-text mb-4">Real-Time Monitoring & Anomaly Detection</h1>
                            <p className="text-xl text-gray-400">Continuous surveillance and early warning system</p>
                        </div>
                        <div className="mt-6 lg:mt-0 flex items-center space-x-6">
                            <div className="flex items-center space-x-3">
                                <div
                                    className={`w-4 h-4 rounded-full ${isRecording ? "bg-red-400 animate-pulse" : "bg-gray-400"}`}
                                ></div>
                                <span className="text-white font-medium text-lg">{isRecording ? "RECORDING" : "STANDBY"}</span>
                            </div>
                            <div className="text-gray-400 font-mono">{currentTime.toLocaleTimeString()}</div>
                        </div>
                    </div>
                </div>

                {/* System Metrics */}
                <div className="grid grid-cols-2 lg:grid-cols-4 grid-perfect mb-12">
                    {systemMetrics.map((metric, index) => (
                        <div key={index} className="glass-card p-8 text-center">
                            <div className="flex items-center justify-center mb-4">
                                <div
                                    className={`w-4 h-4 rounded-full mr-3 ${
                                        metric.status === "excellent" ? "bg-green-400" : "bg-lime-400"
                                    }`}
                                ></div>
                                <div className={`font-medium ${metric.status === "excellent" ? "text-green-400" : "text-lime-400"}`}>
                                    {metric.status.toUpperCase()}
                                </div>
                            </div>
                            <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                            <div className="text-gray-400">{metric.label}</div>
                        </div>
                    ))}
                </div>

                {/* Camera Feed Grid */}
                <div className="glass-card p-8 mb-12">
                    <h3 className="text-2xl font-bold lime-text mb-8">Live Camera Feeds</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-perfect">
                        {cameraFeeds.map((camera) => (
                            <div key={camera.id} className="camera-feed">
                                <div className="relative">
                                    {camera.image ? (
                                        <img
                                            src={camera.image || "/placeholder.svg"}
                                            alt={camera.location}
                                            className="w-full h-48 object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-48 bg-gray-800 perfect-center">
                                            <div className="text-6xl opacity-50">📹</div>
                                        </div>
                                    )}

                                    {camera.status === "active" && (
                                        <div className="absolute top-2 left-2 flex items-center space-x-1">
                                            <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                                            <span className="text-white text-xs font-medium bg-black/50 px-2 py-1 rounded">LIVE</span>
                                        </div>
                                    )}

                                    {camera.alerts > 0 && (
                                        <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                                            {camera.alerts} Alert{camera.alerts > 1 ? "s" : ""}
                                        </div>
                                    )}

                                    <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                                        {camera.quality}
                                    </div>
                                </div>

                                <div className="p-4">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <div className="font-medium text-white">{camera.id}</div>
                                            <div className="text-gray-400 text-sm">{camera.location}</div>
                                        </div>
                                        <div
                                            className={`w-3 h-3 rounded-full ${
                                                camera.status === "active"
                                                    ? "bg-green-400"
                                                    : camera.status === "maintenance"
                                                        ? "bg-orange-400"
                                                        : "bg-red-400"
                                            }`}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Anomaly Detection & Predictive Analytics */}
                <div className="grid grid-cols-1 lg:grid-cols-2 grid-perfect mb-12">
                    {/* Anomaly Detection */}
                    <div className="glass-card p-8">
                        <h3 className="text-2xl font-bold lime-text mb-8">Recent Anomaly Detections</h3>
                        <div className="space-y-4">
                            {anomalyDetections.map((anomaly, index) => (
                                <div key={index} className="bg-white/5 p-4 rounded-lg">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center space-x-2">
                                            <div
                                                className={`w-3 h-3 rounded-full ${
                                                    anomaly.severity === "high"
                                                        ? "bg-red-400"
                                                        : anomaly.severity === "medium"
                                                            ? "bg-orange-400"
                                                            : "bg-yellow-400"
                                                }`}
                                            ></div>
                                            <div className="font-medium text-white">{anomaly.type}</div>
                                        </div>
                                        <div className="text-gray-400 text-sm font-mono">{anomaly.time}</div>
                                    </div>
                                    <div className="text-sm text-gray-300 mb-2">{anomaly.description}</div>
                                    <div className="flex items-center justify-between text-xs">
                                        <div className="text-gray-400">Location: {anomaly.location}</div>
                                        <div className="text-lime-400">Confidence: {anomaly.confidence}%</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Predictive Analytics */}
                    <div className="glass-card p-8">
                        <h3 className="text-2xl font-bold lime-text mb-8">Predictive Analytics</h3>
                        <div className="space-y-4">
                            {predictiveAnalytics.map((prediction, index) => (
                                <div key={index} className="bg-white/5 p-4 rounded-lg">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="font-medium text-white">{prediction.prediction}</div>
                                        <div
                                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                                                prediction.impact === "High"
                                                    ? "bg-red-500/20 text-red-400"
                                                    : prediction.impact === "Medium"
                                                        ? "bg-orange-500/20 text-orange-400"
                                                        : "bg-green-500/20 text-green-400"
                                            }`}
                                        >
                                            {prediction.impact} Impact
                                        </div>
                                    </div>
                                    <div className="text-sm text-gray-300 mb-3">Location: {prediction.location}</div>
                                    <div className="flex items-center justify-between text-sm mb-2">
                                        <div className="text-gray-400">ETA: {prediction.timeframe}</div>
                                        <div className="text-lime-400">{prediction.probability}% probability</div>
                                    </div>
                                    <div className="bg-gray-700 rounded-full h-2">
                                        <div className="bg-lime-400 h-2 rounded-full" style={{ width: `${prediction.probability}%` }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* AI Video Simulation */}
                <div className="glass-card p-8">
                    <h3 className="text-2xl font-bold lime-text mb-8">AI-Generated Video Simulation</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 grid-perfect">
                        <div className="camera-feed">
                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop"
                                    alt="Emergency Evacuation Simulation"
                                    className="w-full h-64 object-cover"
                                />
                                <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">SIMULATION</div>
                                <div className="absolute bottom-2 left-2 text-white text-sm bg-black/50 px-2 py-1 rounded">
                                    Crowd Surge Scenario - Stage Area
                                </div>
                            </div>
                            <div className="p-4">
                                <div className="text-white font-medium mb-2">Emergency Evacuation Test</div>
                                <div className="text-gray-400 text-sm">
                                    AI-generated simulation showing optimal evacuation routes during peak capacity
                                </div>
                            </div>
                        </div>

                        <div className="camera-feed">
                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop"
                                    alt="Staff Training Scenario"
                                    className="w-full h-64 object-cover"
                                />
                                <div className="absolute top-2 left-2 bg-purple-500 text-white text-xs px-2 py-1 rounded">TRAINING</div>
                                <div className="absolute bottom-2 left-2 text-white text-sm bg-black/50 px-2 py-1 rounded">
                                    Bottleneck Prevention - Main Entrance
                                </div>
                            </div>
                            <div className="p-4">
                                <div className="text-white font-medium mb-2">Staff Training Scenario</div>
                                <div className="text-gray-400 text-sm">
                                    Synthetic video data for training security personnel on crowd management
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RealTimeMonitoring
