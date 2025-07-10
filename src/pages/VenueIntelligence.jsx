"use client"

import { useState } from "react"

const VenueIntelligence = () => {
    const [selectedZone, setSelectedZone] = useState("main-entrance")
    const [capacityAlert, setCapacityAlert] = useState(false)

    const venueZones = [
        { id: "main-entrance", name: "Main Entrance", capacity: 85, maxCapacity: 500, status: "high" },
        { id: "food-court", name: "Food Court", capacity: 62, maxCapacity: 300, status: "moderate" },
        { id: "stage-area", name: "Stage Area", capacity: 78, maxCapacity: 800, status: "high" },
        { id: "parking", name: "Parking Lot", capacity: 45, maxCapacity: 1000, status: "optimal" },
        { id: "exit-gates", name: "Exit Gates", capacity: 23, maxCapacity: 400, status: "optimal" },
        { id: "restrooms", name: "Restroom Areas", capacity: 67, maxCapacity: 150, status: "moderate" },
    ]

    const bottleneckPredictions = [
        { location: "Main Entrance Gate 2", predictedTime: "18:45", severity: "high", crowd: 450 },
        { location: "Food Court Junction", predictedTime: "19:15", severity: "medium", crowd: 280 },
        { location: "Stage Front Barrier", predictedTime: "20:00", severity: "high", crowd: 650 },
        { location: "Parking Exit Route", predictedTime: "22:30", severity: "medium", crowd: 320 },
    ]

    const pathwayAnalysis = [
        { pathway: "Main Corridor A", width: "8m", safeCapacity: 400, currentFlow: 285, efficiency: 92 },
        { pathway: "Side Passage B", width: "5m", safeCapacity: 250, currentFlow: 180, efficiency: 88 },
        { pathway: "Emergency Route C", width: "6m", safeCapacity: 300, currentFlow: 45, efficiency: 95 },
        { pathway: "VIP Access D", width: "4m", safeCapacity: 150, currentFlow: 85, efficiency: 90 },
    ]

    const crowdFlowMetrics = [
        { metric: "Average Flow Rate", value: "2.3 p/s/m", status: "optimal" },
        { metric: "Peak Density", value: "4.2 p/m²", status: "moderate" },
        { metric: "Bottleneck Risk", value: "Medium", status: "warning" },
        { metric: "Evacuation Time", value: "12.5 min", status: "optimal" },
    ]

    return (
        <div className="page-wrapper">
            <div className="page-container">
                {/* Header */}
                <div className="text-center section-gap">
                    <h1 className="heading-lg text-gradient mb-6">Venue Intelligence & Capacity Management</h1>
                    <p className="text-enhanced text-gray-400 max-w-3xl mx-auto">Real-time crowd flow optimization and bottleneck prevention system</p>
                </div>

                {/* Alert Banner */}
                {capacityAlert && (
                    <div className="bg-orange-500/20 border border-orange-500/50 rounded-lg p-4 section-gap">
                        <div className="flex items-center">
                            <div className="text-orange-400 text-xl mr-3">⚠️</div>
                            <div>
                                <div className="font-medium text-orange-400">Capacity Alert</div>
                                <div className="text-sm text-gray-300">Main Entrance approaching maximum safe capacity</div>
                            </div>
                            <button onClick={() => setCapacityAlert(false)} className="ml-auto text-orange-400 hover:text-orange-300">
                                ✕
                            </button>
                        </div>
                    </div>
                )}

                {/* Crowd Flow Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-4 card-spacing section-gap">
                    {crowdFlowMetrics.map((metric, index) => (
                        <div key={index} className="gradient-card p-6 card-flex">
                            <div className="flex-between mb-4">
                                <div
                                    className={`w-3 h-3 rounded-full ${
                                        metric.status === "optimal"
                                            ? "bg-green-400"
                                            : metric.status === "warning"
                                                ? "bg-orange-400"
                                                : "bg-red-400"
                                    }`}
                                ></div>
                                <div
                                    className={`text-sm font-medium ${
                                        metric.status === "optimal"
                                            ? "text-green-400"
                                            : metric.status === "warning"
                                                ? "text-orange-400"
                                                : "text-red-400"
                                    }`}
                                >
                                    {metric.status.toUpperCase()}
                                </div>
                            </div>
                            <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                            <div className="text-gray-400 text-sm">{metric.metric}</div>
                        </div>
                    ))}
                </div>

                {/* Venue Zone Monitoring */}
                <div className="gradient-card p-6 mb-8">
                    <h3 className="text-xl font-bold text-lime-400 mb-6">Live Venue Zone Monitoring</h3>
                    <div className="grid-responsive cols-6">
                        {venueZones.map((zone) => (
                            <button
                                key={zone.id}
                                onClick={() => setSelectedZone(zone.id)}
                                className={`p-4 rounded-lg border-2 transition-all hover-scale ${
                                    selectedZone === zone.id
                                        ? "border-lime-400 bg-lime-400/10"
                                        : "border-gray-600 glass-effect hover:border-lime-400/50"
                                }`}
                            >
                                <div
                                    className={`text-2xl font-bold mb-2 ${
                                        zone.status === "high"
                                            ? "text-red-400"
                                            : zone.status === "moderate"
                                                ? "text-orange-400"
                                                : "text-green-400"
                                    }`}
                                >
                                    {zone.capacity}%
                                </div>
                                <div className="font-medium text-white text-sm mb-1">{zone.name}</div>
                                <div className="text-xs text-gray-400">
                                    {Math.round((zone.maxCapacity * zone.capacity) / 100)}/{zone.maxCapacity}
                                </div>
                                <div className="mt-2 bg-gray-700 rounded-full h-1">
                                    <div
                                        className={`h-1 rounded-full ${
                                            zone.status === "high"
                                                ? "bg-red-400"
                                                : zone.status === "moderate"
                                                    ? "bg-orange-400"
                                                    : "bg-green-400"
                                        }`}
                                        style={{ width: `${zone.capacity}%` }}
                                    ></div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Bottleneck Predictions & Pathway Analysis */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    {/* Bottleneck Predictions */}
                    <div className="gradient-card p-6 rounded-xl">
                        <h3 className="text-xl font-bold text-lime-400 mb-6">Bottleneck Predictions (Next 2 Hours)</h3>
                        <div className="space-y-4">
                            {bottleneckPredictions.map((prediction, index) => (
                                <div key={index} className="glass-effect p-4 rounded-lg">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="font-medium text-white">{prediction.location}</div>
                                        <div
                                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                                                prediction.severity === "high"
                                                    ? "bg-red-500/20 text-red-400"
                                                    : "bg-orange-500/20 text-orange-400"
                                            }`}
                                        >
                                            {prediction.severity.toUpperCase()}
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between text-sm">
                                        <div className="text-gray-400">Predicted Time: {prediction.predictedTime}</div>
                                        <div className="text-gray-400">Expected Crowd: {prediction.crowd}</div>
                                    </div>
                                    <div className="mt-2 flex items-center text-xs">
                                        <div className="text-lime-400">🔄 Auto-rerouting enabled</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Pathway Analysis */}
                    <div className="gradient-card p-6 rounded-xl">
                        <h3 className="text-xl font-bold text-lime-400 mb-6">Pathway Capacity Analysis</h3>
                        <div className="space-y-4">
                            {pathwayAnalysis.map((pathway, index) => (
                                <div key={index} className="glass-effect p-4 rounded-lg">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="font-medium text-white">{pathway.pathway}</div>
                                        <div className="text-lime-400 text-sm font-medium">{pathway.efficiency}%</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 text-sm mb-2">
                                        <div>
                                            <div className="text-gray-400">Width</div>
                                            <div className="text-white">{pathway.width}</div>
                                        </div>
                                        <div>
                                            <div className="text-gray-400">Capacity</div>
                                            <div className="text-white">{pathway.safeCapacity}</div>
                                        </div>
                                        <div>
                                            <div className="text-gray-400">Current</div>
                                            <div className="text-white">{pathway.currentFlow}</div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-700 rounded-full h-2">
                                        <div
                                            className="bg-lime-400 h-2 rounded-full"
                                            style={{ width: `${(pathway.currentFlow / pathway.safeCapacity) * 100}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* AI Recommendations */}
                <div className="gradient-card p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-lime-400 mb-6">AI-Powered Recommendations</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="glass-effect p-4 rounded-lg">
                            <div className="flex items-center mb-3">
                                <div className="text-xl mr-3">🎯</div>
                                <div className="font-medium text-white">Route Optimization</div>
                            </div>
                            <p className="text-gray-300 text-sm mb-3">
                                Redirect 30% of main entrance traffic to Side Entrance B to prevent bottleneck at 18:45
                            </p>
                            <button className="px-4 py-2 bg-lime-500/20 text-lime-400 rounded-lg text-sm font-medium hover:bg-lime-500/30 transition-colors">
                                Apply Recommendation
                            </button>
                        </div>

                        <div className="glass-effect p-4 rounded-lg">
                            <div className="flex items-center mb-3">
                                <div className="text-xl mr-3">⚡</div>
                                <div className="font-medium text-white">Capacity Management</div>
                            </div>
                            <p className="text-gray-300 text-sm mb-3">
                                Open additional food stalls in Zone C to distribute crowd from main food court
                            </p>
                            <button className="px-4 py-2 bg-lime-500/20 text-lime-400 rounded-lg text-sm font-medium hover:bg-lime-500/30 transition-colors">
                                Implement Solution
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VenueIntelligence
