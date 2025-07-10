"use client"

import { useState } from "react"

const VoiceAssistant = () => {
    const [isListening, setIsListening] = useState(false)
    const [currentQuery, setCurrentQuery] = useState("")
    const [isProcessing, setIsProcessing] = useState(false)
    const [selectedLanguage, setSelectedLanguage] = useState("en")

    const languages = [
        { code: "en", name: "English", flag: "🇺🇸" },
        { code: "es", name: "Español", flag: "🇪🇸" },
        { code: "fr", name: "Français", flag: "🇫🇷" },
        { code: "de", name: "Deutsch", flag: "🇩🇪" },
        { code: "hi", name: "हिंदी", flag: "🇮🇳" },
        { code: "zh", name: "中文", flag: "🇨🇳" },
    ]

    const conversationHistory = [
        {
            time: "14:35",
            user: "What's the wait time at the food court?",
            assistant:
                "The current wait time at the main food court is approximately 12 minutes. However, I found a shorter option - the Artisan Pizza Corner has only an 8-minute wait and is just 120 meters from your location.",
            type: "query",
        },
        {
            time: "14:32",
            user: "Where is the nearest restroom?",
            assistant:
                "The nearest restroom is in Block A, just 3 minutes walk via the shortest path. It currently has low crowd levels. Would you like me to provide turn-by-turn directions?",
            type: "navigation",
        },
        {
            time: "14:28",
            user: "Tell me about upcoming events",
            assistant:
                "Here are the upcoming events: Jazz performance at Live Jazz Lounge starts in 10 minutes, Art exhibition opening at Local Art Gallery in 15 minutes, and the main stage performance begins at 8 PM.",
            type: "information",
        },
        {
            time: "14:25",
            user: "Is there any emergency situation?",
            assistant:
                "All systems are currently operating normally. No active emergencies detected. Emergency response teams are on standby and all evacuation routes are clear.",
            type: "safety",
        },
    ]

    const quickCommands = [
        { command: "Show me nearby food options", category: "Food & Dining" },
        { command: "What's the crowd level at the main stage?", category: "Crowd Info" },
        { command: "Guide me to the nearest exit", category: "Navigation" },
        { command: "Are there any safety alerts?", category: "Safety" },
        { command: "What events are happening now?", category: "Events" },
        { command: "Find me a quiet area to rest", category: "Comfort" },
    ]

    const voiceMetrics = [
        { label: "Query Resolution", value: "94.2%", trend: "+2.1%" },
        { label: "Response Time", value: "1.8s", trend: "-0.3s" },
        { label: "User Satisfaction", value: "4.7/5", trend: "+0.2" },
        { label: "Languages Supported", value: "12", trend: "+2" },
    ]

    const situationalSummary = {
        crowdLevel: "Moderate",
        activeEvents: 3,
        emergencyStatus: "All Clear",
        weatherCondition: "Clear",
        nextMajorEvent: "Main Stage Performance - 8:00 PM",
        recommendedActions: [
            "Consider visiting the Art Gallery - low crowd",
            "Food court wait times decreasing",
            "Parking lot 78% full - alternative routes available",
        ],
    }

    const handleVoiceCommand = () => {
        setIsListening(!isListening)
        if (!isListening) {
            setCurrentQuery("Listening...")
            setTimeout(() => {
                setCurrentQuery("What's the current crowd situation?")
                setIsListening(false)
                setIsProcessing(true)
                setTimeout(() => {
                    setIsProcessing(false)
                    setCurrentQuery("")
                }, 2000)
            }, 3000)
        }
    }

    return (
        <div className="page-wrapper">
            <div className="page-container">
                {/* Header */}
                <div className="text-center section-gap">
                    <h1 className="heading-lg text-lime-400 mb-6">Voice Assistant & Communication Hub</h1>
                    <p className="text-enhanced text-gray-400 max-w-3xl mx-auto">Natural language interaction and multi-language support system</p>
                </div>

                {/* Voice Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-4 card-spacing section-gap">
                    {voiceMetrics.map((metric, index) => (
                        <div key={index} className="gradient-card p-6 card-flex">
                            <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                            <div className="text-gray-400 text-sm mb-2">{metric.label}</div>
                            <div
                                className={`text-sm font-medium ${
                                    metric.trend.startsWith("+") || (metric.trend.startsWith("-") && metric.label.includes("Response"))
                                        ? "text-green-400"
                                        : "text-lime-400"
                                }`}
                            >
                                {metric.trend}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Voice Interface */}
                <div className="gradient-card p-8 rounded-xl mb-8">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-lime-400 mb-4">Voice Command Interface</h3>

                        {/* Language Selection */}
                        <div className="flex justify-center mb-6">
                            <select
                                value={selectedLanguage}
                                onChange={(e) => setSelectedLanguage(e.target.value)}
                                className="bg-gray-700 text-white px-4 py-2 rounded-lg border border-gray-600 focus:border-lime-400 focus:outline-none"
                            >
                                {languages.map((lang) => (
                                    <option key={lang.code} value={lang.code}>
                                        {lang.flag} {lang.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Voice Button */}
                        <div className="mb-6">
                            <button
                                onClick={handleVoiceCommand}
                                className={`w-32 h-32 rounded-full flex items-center justify-center text-4xl transition-all duration-300 ${
                                    isListening
                                        ? "bg-red-500 animate-pulse shadow-lg shadow-red-500/50"
                                        : "bg-lime-500 hover:bg-lime-600 hover-scale"
                                }`}
                            >
                                {isListening ? "🔴" : "🎤"}
                            </button>
                        </div>

                        {/* Current Query Display */}
                        {(currentQuery || isProcessing) && (
                            <div className="glass-effect p-4 rounded-lg mb-6 max-w-md mx-auto">
                                {isProcessing ? (
                                    <div className="flex items-center justify-center space-x-2">
                                        <div className="animate-spin w-4 h-4 border-2 border-lime-400 border-t-transparent rounded-full"></div>
                                        <span className="text-lime-400">Processing...</span>
                                    </div>
                                ) : (
                                    <div className="text-white">{currentQuery}</div>
                                )}
                            </div>
                        )}

                        <p className="text-gray-400">
                            {isListening ? "Listening... Speak your question" : "Click the microphone to start voice command"}
                        </p>
                    </div>

                    {/* Quick Commands */}
                    <div className="mb-8">
                        <h4 className="text-lg font-bold text-white mb-4">Quick Commands</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                            {quickCommands.map((cmd, index) => (
                                <button
                                    key={index}
                                    className="glass-effect p-3 rounded-lg text-left hover-scale group"
                                    onClick={() => setCurrentQuery(cmd.command)}
                                >
                                    <div className="text-sm text-white mb-1 group-hover:text-lime-400 transition-colors">
                                        "{cmd.command}"
                                    </div>
                                    <div className="text-xs text-gray-400">{cmd.category}</div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Conversation History & Situational Summary */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    {/* Conversation History */}
                    <div className="gradient-card p-6 rounded-xl">
                        <h3 className="text-xl font-bold text-lime-400 mb-6">Recent Conversations</h3>
                        <div className="space-y-4 max-h-96 overflow-y-auto">
                            {conversationHistory.map((conv, index) => (
                                <div key={index} className="space-y-3">
                                    <div className="flex justify-end">
                                        <div className="bg-lime-500/20 text-lime-400 p-3 rounded-lg max-w-xs">
                                            <div className="text-sm">{conv.user}</div>
                                            <div className="text-xs text-gray-400 mt-1">{conv.time}</div>
                                        </div>
                                    </div>
                                    <div className="flex justify-start">
                                        <div className="glass-effect p-3 rounded-lg max-w-sm">
                                            <div className="text-sm text-white">{conv.assistant}</div>
                                            <div
                                                className={`text-xs mt-1 px-2 py-1 rounded-full inline-block ${
                                                    conv.type === "query"
                                                        ? "bg-blue-500/20 text-blue-400"
                                                        : conv.type === "navigation"
                                                            ? "bg-green-500/20 text-green-400"
                                                            : conv.type === "information"
                                                                ? "bg-purple-500/20 text-purple-400"
                                                                : "bg-orange-500/20 text-orange-400"
                                                }`}
                                            >
                                                {conv.type}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Situational Summary */}
                    <div className="gradient-card p-6 rounded-xl">
                        <h3 className="text-xl font-bold text-lime-400 mb-6">Live Situational Summary</h3>

                        <div className="space-y-4 mb-6">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-400">Crowd Level:</span>
                                <span className="text-orange-400 font-medium">{situationalSummary.crowdLevel}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-400">Active Events:</span>
                                <span className="text-white font-medium">{situationalSummary.activeEvents}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-400">Emergency Status:</span>
                                <span className="text-green-400 font-medium">{situationalSummary.emergencyStatus}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-400">Weather:</span>
                                <span className="text-blue-400 font-medium">{situationalSummary.weatherCondition}</span>
                            </div>
                        </div>

                        <div className="glass-effect p-4 rounded-lg mb-4">
                            <div className="text-sm text-gray-400 mb-1">Next Major Event</div>
                            <div className="text-white font-medium">{situationalSummary.nextMajorEvent}</div>
                        </div>

                        <div>
                            <div className="text-sm text-gray-400 mb-3">AI Recommendations</div>
                            <div className="space-y-2">
                                {situationalSummary.recommendedActions.map((action, index) => (
                                    <div key={index} className="flex items-start space-x-2">
                                        <div className="w-1.5 h-1.5 bg-lime-400 rounded-full mt-2 flex-shrink-0"></div>
                                        <div className="text-sm text-gray-300">{action}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Voice Analytics */}
                <div className="gradient-card p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-lime-400 mb-6">Voice Analytics Dashboard</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-lime-400 mb-2">1,247</div>
                            <div className="text-gray-400 text-sm">Queries Today</div>
                            <div className="text-green-400 text-xs">+18% from yesterday</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-blue-400 mb-2">89%</div>
                            <div className="text-gray-400 text-sm">First Response Success</div>
                            <div className="text-green-400 text-xs">+5% improvement</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-purple-400 mb-2">6</div>
                            <div className="text-gray-400 text-sm">Active Languages</div>
                            <div className="text-lime-400 text-xs">Multi-language support</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VoiceAssistant
