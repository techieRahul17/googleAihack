"use client"

import { useState } from "react"

const EmergencyResponse = () => {
    const [emergencyStatus, setEmergencyStatus] = useState("standby")
    const [activeIncidents, setActiveIncidents] = useState(0)

    const emergencyTeams = [
        { id: "MED-01", type: "Medical", status: "available", location: "Station A", responders: 4, eta: null },
        { id: "SEC-01", type: "Security", status: "deployed", location: "Main Gate", responders: 6, eta: "2 min" },
        { id: "FIRE-01", type: "Fire Safety", status: "available", location: "Station B", responders: 8, eta: null },
        { id: "MED-02", type: "Medical", status: "available", location: "Station C", responders: 3, eta: null },
        { id: "SEC-02", type: "Security", status: "available", location: "Patrol Route", responders: 4, eta: null },
        { id: "EVAC-01", type: "Evacuation", status: "standby", location: "Command Center", responders: 12, eta: null },
    ]

    const recentIncidents = [
        {
            id: "INC-2024-001",
            time: "14:32",
            type: "Medical Emergency",
            location: "Food Court Section B",
            severity: "medium",
            status: "resolved",
            responseTime: "3.2 min",
        },
        {
            id: "INC-2024-002",
            time: "14:28",
            type: "Suspicious Package",
            location: "VIP Lounge",
            severity: "high",
            status: "investigating",
            responseTime: "1.8 min",
        },
        {
            id: "INC-2024-003",
            time: "14:15",
            type: "Lost Child",
            location: "Main Entrance",
            severity: "low",
            status: "resolved",
            responseTime: "8.5 min",
        },
        {
            id: "INC-2024-004",
            time: "13:45",
            type: "Minor Injury",
            location: "Stage Area",
            severity: "low",
            status: "resolved",
            responseTime: "4.1 min",
        },
    ]

    const hospitalNetwork = [
        {
            name: "City General Hospital",
            distance: "2.3 km",
            eta: "8 min",
            specialties: ["Emergency", "Trauma", "Cardiology"],
            availability: "high",
            beds: 15,
        },
        {
            name: "Metro Medical Center",
            distance: "3.1 km",
            eta: "12 min",
            specialties: ["Pediatrics", "Orthopedics", "Neurology"],
            availability: "medium",
            beds: 8,
        },
        {
            name: "Regional Trauma Center",
            distance: "5.2 km",
            eta: "18 min",
            specialties: ["Trauma", "Surgery", "ICU"],
            availability: "high",
            beds: 22,
        },
        {
            name: "Community Health Clinic",
            distance: "1.8 km",
            eta: "6 min",
            specialties: ["General", "Minor Injuries"],
            availability: "high",
            beds: 5,
        },
    ]

    const evacuationRoutes = [
        { route: "Primary Route A", capacity: 2000, currentLoad: 0, status: "clear", exitTime: "8 min" },
        { route: "Primary Route B", capacity: 1500, currentLoad: 0, status: "clear", exitTime: "6 min" },
        { route: "Secondary Route C", capacity: 800, currentLoad: 0, status: "clear", exitTime: "12 min" },
        { route: "Emergency Route D", capacity: 1200, currentLoad: 0, status: "clear", exitTime: "10 min" },
    ]

    const responseMetrics = [
        { label: "Avg Response Time", value: "2.1 min", target: "< 3 min", status: "excellent" },
        { label: "Active Responders", value: "37", target: "30+", status: "good" },
        { label: "Hospital Availability", value: "89%", target: "> 80%", status: "excellent" },
        { label: "Evacuation Capacity", value: "5,500", target: "5,000+", status: "excellent" },
    ]

    const handleEmergencyAlert = () => {
        setEmergencyStatus("active")
        setActiveIncidents((prev) => prev + 1)
    }

    return (
        <div className="page-wrapper">
            <div className="page-container">
                {/* Header */}
                <div className="section-gap">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                            <h1 className="text-4xl font-bold text-lime-400 mb-4">Emergency Response & Crisis Management</h1>
                            <p className="text-xl text-gray-400 max-w-3xl">Rapid incident detection and coordinated response system</p>
                        </div>
                        <div className="mt-4 md:mt-0 flex items-center space-x-4">
                            <div className="flex items-center space-x-2">
                                <div
                                    className={`w-3 h-3 rounded-full ${
                                        emergencyStatus === "active" ? "bg-red-400 animate-pulse" : "bg-green-400"
                                    }`}
                                ></div>
                                <span className={`font-medium ${emergencyStatus === "active" ? "text-red-400" : "text-green-400"}`}>
                  {emergencyStatus === "active" ? "EMERGENCY ACTIVE" : "SYSTEM READY"}
                </span>
                            </div>
                            <button
                                onClick={handleEmergencyAlert}
                                className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg transition-colors"
                            >
                                🚨 Emergency Alert
                            </button>
                        </div>
                    </div>
                </div>

                {/* Response Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    {responseMetrics.map((metric, index) => (
                        <div key={index} className="gradient-card p-6 rounded-xl">
                            <div className="flex items-center justify-between mb-4">
                                <div
                                    className={`w-3 h-3 rounded-full ${metric.status === "excellent" ? "bg-green-400" : "bg-lime-400"}`}
                                ></div>
                                <div
                                    className={`text-sm font-medium ${
                                        metric.status === "excellent" ? "text-green-400" : "text-lime-400"
                                    }`}
                                >
                                    {metric.status.toUpperCase()}
                                </div>
                            </div>
                            <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                            <div className="text-gray-400 text-sm mb-1">{metric.label}</div>
                            <div className="text-xs text-gray-500">Target: {metric.target}</div>
                        </div>
                    ))}
                </div>

                {/* Emergency Teams Status */}
                <div className="gradient-card p-6 rounded-xl mb-8">
                    <h3 className="text-xl font-bold text-lime-400 mb-6">Emergency Response Teams</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {emergencyTeams.map((team) => (
                            <div key={team.id} className="glass-effect p-4 rounded-lg">
                                <div className="flex items-center justify-between mb-3">
                                    <div className="font-medium text-white">{team.id}</div>
                                    <div
                                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                                            team.status === "available"
                                                ? "bg-green-500/20 text-green-400"
                                                : team.status === "deployed"
                                                    ? "bg-orange-500/20 text-orange-400"
                                                    : "bg-gray-500/20 text-gray-400"
                                        }`}
                                    >
                                        {team.status.toUpperCase()}
                                    </div>
                                </div>

                                <div className="text-sm space-y-2">
                                    <div className="flex justify-between">
                                        <span className="text-gray-400">Type:</span>
                                        <span className="text-white">{team.type}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-400">Location:</span>
                                        <span className="text-white">{team.location}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-400">Personnel:</span>
                                        <span className="text-white">{team.responders}</span>
                                    </div>
                                    {team.eta && (
                                        <div className="flex justify-between">
                                            <span className="text-gray-400">ETA:</span>
                                            <span className="text-orange-400">{team.eta}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent Incidents & Hospital Network */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    {/* Recent Incidents */}
                    <div className="gradient-card p-6 rounded-xl">
                        <h3 className="text-xl font-bold text-lime-400 mb-6">Recent Incidents</h3>
                        <div className="space-y-4">
                            {recentIncidents.map((incident) => (
                                <div key={incident.id} className="glass-effect p-4 rounded-lg">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="font-medium text-white">{incident.type}</div>
                                        <div
                                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                                                incident.status === "resolved"
                                                    ? "bg-green-500/20 text-green-400"
                                                    : incident.status === "investigating"
                                                        ? "bg-orange-500/20 text-orange-400"
                                                        : "bg-red-500/20 text-red-400"
                                            }`}
                                        >
                                            {incident.status.toUpperCase()}
                                        </div>
                                    </div>
                                    <div className="text-sm text-gray-300 mb-2">
                                        {incident.location} • {incident.time}
                                    </div>
                                    <div className="flex items-center justify-between text-xs">
                                        <div
                                            className={`${
                                                incident.severity === "high"
                                                    ? "text-red-400"
                                                    : incident.severity === "medium"
                                                        ? "text-orange-400"
                                                        : "text-yellow-400"
                                            }`}
                                        >
                                            Severity: {incident.severity}
                                        </div>
                                        <div className="text-lime-400">Response: {incident.responseTime}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Hospital Network */}
                    <div className="gradient-card p-6 rounded-xl">
                        <h3 className="text-xl font-bold text-lime-400 mb-6">Hospital Network</h3>
                        <div className="space-y-4">
                            {hospitalNetwork.map((hospital, index) => (
                                <div key={index} className="glass-effect p-4 rounded-lg">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="font-medium text-white">{hospital.name}</div>
                                        <div
                                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                                                hospital.availability === "high"
                                                    ? "bg-green-500/20 text-green-400"
                                                    : "bg-orange-500/20 text-orange-400"
                                            }`}
                                        >
                                            {hospital.availability.toUpperCase()}
                                        </div>
                                    </div>
                                    <div className="text-sm space-y-1 mb-3">
                                        <div className="flex justify-between">
                                            <span className="text-gray-400">Distance:</span>
                                            <span className="text-white">{hospital.distance}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-400">ETA:</span>
                                            <span className="text-lime-400">{hospital.eta}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-400">Available Beds:</span>
                                            <span className="text-white">{hospital.beds}</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-1">
                                        {hospital.specialties.map((specialty, idx) => (
                                            <span key={idx} className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs">
                        {specialty}
                      </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Evacuation Routes */}
                <div className="gradient-card p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-lime-400 mb-6">Evacuation Routes Status</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {evacuationRoutes.map((route, index) => (
                            <div key={index} className="glass-effect p-4 rounded-lg">
                                <div className="flex items-center justify-between mb-3">
                                    <div className="font-medium text-white text-sm">{route.route}</div>
                                    <div
                                        className={`w-3 h-3 rounded-full ${route.status === "clear" ? "bg-green-400" : "bg-red-400"}`}
                                    ></div>
                                </div>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-gray-400">Capacity:</span>
                                        <span className="text-white">{route.capacity.toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-400">Current Load:</span>
                                        <span className="text-white">{route.currentLoad}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-400">Exit Time:</span>
                                        <span className="text-lime-400">{route.exitTime}</span>
                                    </div>
                                </div>
                                <div className="mt-3 bg-gray-700 rounded-full h-2">
                                    <div
                                        className="bg-green-400 h-2 rounded-full"
                                        style={{ width: `${(route.currentLoad / route.capacity) * 100}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmergencyResponse
