"use client"

import { useState } from "react"

const SocialMediaIntelligence = () => {
    const [selectedPlatform, setSelectedPlatform] = useState("all")
    const [sentimentFilter, setSentimentFilter] = useState("all")

    const platforms = [
        { id: "all", name: "All Platforms", icon: "🌐", posts: 1247 },
        { id: "twitter", name: "Twitter/X", icon: "🐦", posts: 456 },
        { id: "instagram", name: "Instagram", icon: "📷", posts: 389 },
        { id: "facebook", name: "Facebook", icon: "👥", posts: 234 },
        { id: "tiktok", name: "TikTok", icon: "🎵", posts: 168 },
    ]

    const socialMetrics = [
        { label: "Total Mentions", value: "1,247", trend: "+23%", period: "Last 24h" },
        { label: "Sentiment Score", value: "7.2/10", trend: "+0.8", period: "Positive" },
        { label: "Threat Level", value: "Low", trend: "Stable", period: "No alerts" },
        { label: "Engagement Rate", value: "4.8%", trend: "+1.2%", period: "Above avg" },
    ]

    const recentPosts = [
        {
            platform: "twitter",
            user: "@musiclover2024",
            content: "Amazing crowd energy at the main stage! The sound quality is incredible 🎵 #EventName",
            sentiment: "positive",
            engagement: 127,
            time: "2 min ago",
            location: "Main Stage Area",
        },
        {
            platform: "instagram",
            user: "@foodie_adventures",
            content: "Long lines at the food court but the pizza is worth the wait! 🍕",
            sentiment: "neutral",
            engagement: 89,
            time: "5 min ago",
            location: "Food Court",
        },
        {
            platform: "facebook",
            user: "Sarah Johnson",
            content: "Parking situation is getting chaotic. Took 20 minutes to find a spot.",
            sentiment: "negative",
            engagement: 45,
            time: "8 min ago",
            location: "Parking Area",
        },
        {
            platform: "twitter",
            user: "@event_photographer",
            content: "Security team is doing an excellent job managing the crowd flow 👏",
            sentiment: "positive",
            engagement: 203,
            time: "12 min ago",
            location: "Security Checkpoint",
        },
        {
            platform: "tiktok",
            user: "@dance_moves_2024",
            content: "The art installation is mind-blowing! Everyone needs to see this ✨",
            sentiment: "positive",
            engagement: 1456,
            time: "15 min ago",
            location: "Art Gallery",
        },
    ]

    const trendingTopics = [
        { topic: "#EventName2024", mentions: 456, sentiment: "positive", growth: "+45%" },
        { topic: "#MainStageVibes", mentions: 234, sentiment: "positive", growth: "+67%" },
        { topic: "#FoodCourtWait", mentions: 123, sentiment: "neutral", growth: "+12%" },
        { topic: "#ParkingIssues", mentions: 89, sentiment: "negative", growth: "+23%" },
        { topic: "#ArtInstallation", mentions: 167, sentiment: "positive", growth: "+89%" },
    ]

    const threatDetection = [
        {
            level: "low",
            type: "Weather Concern",
            description: "Users discussing potential rain, but no immediate threat",
            posts: 23,
            time: "1 hour ago",
        },
        {
            level: "medium",
            type: "Crowd Complaint",
            description: "Multiple posts about overcrowding at main entrance",
            posts: 15,
            time: "30 min ago",
        },
        {
            level: "low",
            type: "Traffic Alert",
            description: "Social media reports of traffic delays on Route B",
            posts: 8,
            time: "45 min ago",
        },
    ]

    const sentimentAnalysis = {
        positive: 68,
        neutral: 22,
        negative: 10,
        breakdown: [
            { category: "Music/Entertainment", positive: 85, neutral: 12, negative: 3 },
            { category: "Food & Beverages", positive: 72, neutral: 20, negative: 8 },
            { category: "Venue/Facilities", positive: 45, neutral: 35, negative: 20 },
            { category: "Staff/Security", positive: 78, neutral: 18, negative: 4 },
            { category: "Parking/Transport", positive: 35, neutral: 25, negative: 40 },
        ],
    }

    const getSentimentColor = (sentiment) => {
        switch (sentiment) {
            case "positive":
                return "text-green-400"
            case "negative":
                return "text-red-400"
            default:
                return "text-orange-400"
        }
    }

    const getPlatformIcon = (platform) => {
        const platformData = platforms.find((p) => p.id === platform)
        return platformData ? platformData.icon : "🌐"
    }

    return (
        <div className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 min-h-screen">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-gradient mb-4">Social Media Intelligence</h1>
                    <p className="text-xl text-gray-400">
                        External threat detection and sentiment analysis from social media monitoring
                    </p>
                </div>

                {/* Social Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    {socialMetrics.map((metric, index) => (
                        <div key={index} className="gradient-card p-6 rounded-xl">
                            <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                            <div className="text-gray-400 text-sm mb-2">{metric.label}</div>
                            <div className="flex items-center justify-between text-xs">
                <span
                    className={`font-medium ${
                        metric.trend.startsWith("+")
                            ? "text-green-400"
                            : metric.trend === "Stable"
                                ? "text-lime-400"
                                : "text-orange-400"
                    }`}
                >
                  {metric.trend}
                </span>
                                <span className="text-gray-500">{metric.period}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Platform Selection & Filters */}
                <div className="gradient-card p-6 rounded-xl mb-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                        <h3 className="text-xl font-bold text-lime-400 mb-4 md:mb-0">Platform Monitoring</h3>
                        <div className="flex items-center space-x-4">
                            <select
                                value={selectedPlatform}
                                onChange={(e) => setSelectedPlatform(e.target.value)}
                                className="bg-gray-700 text-white px-3 py-2 rounded-lg border border-gray-600 focus:border-lime-400 focus:outline-none"
                            >
                                {platforms.map((platform) => (
                                    <option key={platform.id} value={platform.id}>
                                        {platform.icon} {platform.name}
                                    </option>
                                ))}
                            </select>
                            <select
                                value={sentimentFilter}
                                onChange={(e) => setSentimentFilter(e.target.value)}
                                className="bg-gray-700 text-white px-3 py-2 rounded-lg border border-gray-600 focus:border-lime-400 focus:outline-none"
                            >
                                <option value="all">All Sentiments</option>
                                <option value="positive">Positive</option>
                                <option value="neutral">Neutral</option>
                                <option value="negative">Negative</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {platforms.map((platform) => (
                            <button
                                key={platform.id}
                                onClick={() => setSelectedPlatform(platform.id)}
                                className={`p-4 rounded-lg border-2 transition-all hover-scale ${
                                    selectedPlatform === platform.id
                                        ? "border-lime-400 bg-lime-400/10"
                                        : "border-gray-600 glass-effect hover:border-lime-400/50"
                                }`}
                            >
                                <div className="text-2xl mb-2">{platform.icon}</div>
                                <div className="font-medium text-white text-sm mb-1">{platform.name}</div>
                                <div className="text-gray-400 text-xs">{platform.posts} posts</div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Recent Posts & Trending Topics */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    {/* Recent Posts */}
                    <div className="gradient-card p-6 rounded-xl">
                        <h3 className="text-xl font-bold text-lime-400 mb-6">Live Social Feed</h3>
                        <div className="space-y-4 max-h-96 overflow-y-auto">
                            {recentPosts
                                .filter((post) => selectedPlatform === "all" || post.platform === selectedPlatform)
                                .filter((post) => sentimentFilter === "all" || post.sentiment === sentimentFilter)
                                .map((post, index) => (
                                    <div key={index} className="glass-effect p-4 rounded-lg">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center space-x-2">
                                                <span className="text-lg">{getPlatformIcon(post.platform)}</span>
                                                <span className="font-medium text-white text-sm">{post.user}</span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <div
                                                    className={`w-2 h-2 rounded-full ${
                                                        post.sentiment === "positive"
                                                            ? "bg-green-400"
                                                            : post.sentiment === "negative"
                                                                ? "bg-red-400"
                                                                : "bg-orange-400"
                                                    }`}
                                                ></div>
                                                <span className="text-gray-400 text-xs">{post.time}</span>
                                            </div>
                                        </div>
                                        <p className="text-gray-300 text-sm mb-3">{post.content}</p>
                                        <div className="flex items-center justify-between text-xs">
                                            <span className="text-gray-400">📍 {post.location}</span>
                                            <span className="text-lime-400">❤️ {post.engagement}</span>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>

                    {/* Trending Topics */}
                    <div className="gradient-card p-6 rounded-xl">
                        <h3 className="text-xl font-bold text-lime-400 mb-6">Trending Topics</h3>
                        <div className="space-y-4">
                            {trendingTopics.map((topic, index) => (
                                <div key={index} className="glass-effect p-4 rounded-lg">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="font-medium text-white">{topic.topic}</div>
                                        <div
                                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                                                topic.sentiment === "positive"
                                                    ? "bg-green-500/20 text-green-400"
                                                    : topic.sentiment === "negative"
                                                        ? "bg-red-500/20 text-red-400"
                                                        : "bg-orange-500/20 text-orange-400"
                                            }`}
                                        >
                                            {topic.sentiment}
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-gray-400">{topic.mentions} mentions</span>
                                        <span className="text-lime-400 font-medium">{topic.growth}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Sentiment Analysis & Threat Detection */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    {/* Sentiment Analysis */}
                    <div className="gradient-card p-6 rounded-xl">
                        <h3 className="text-xl font-bold text-lime-400 mb-6">Sentiment Analysis</h3>

                        {/* Overall Sentiment */}
                        <div className="mb-6">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-gray-400">Overall Sentiment</span>
                                <span className="text-white font-medium">{sentimentAnalysis.positive}% Positive</span>
                            </div>
                            <div className="bg-gray-700 rounded-full h-3 overflow-hidden">
                                <div className="h-full flex">
                                    <div className="bg-green-400" style={{ width: `${sentimentAnalysis.positive}%` }}></div>
                                    <div className="bg-orange-400" style={{ width: `${sentimentAnalysis.neutral}%` }}></div>
                                    <div className="bg-red-400" style={{ width: `${sentimentAnalysis.negative}%` }}></div>
                                </div>
                            </div>
                            <div className="flex justify-between text-xs mt-1">
                                <span className="text-green-400">{sentimentAnalysis.positive}% Positive</span>
                                <span className="text-orange-400">{sentimentAnalysis.neutral}% Neutral</span>
                                <span className="text-red-400">{sentimentAnalysis.negative}% Negative</span>
                            </div>
                        </div>

                        {/* Category Breakdown */}
                        <div className="space-y-3">
                            {sentimentAnalysis.breakdown.map((category, index) => (
                                <div key={index} className="glass-effect p-3 rounded-lg">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-white text-sm font-medium">{category.category}</span>
                                        <span className="text-green-400 text-sm">{category.positive}%</span>
                                    </div>
                                    <div className="bg-gray-700 rounded-full h-2 overflow-hidden">
                                        <div className="h-full flex">
                                            <div className="bg-green-400" style={{ width: `${category.positive}%` }}></div>
                                            <div className="bg-orange-400" style={{ width: `${category.neutral}%` }}></div>
                                            <div className="bg-red-400" style={{ width: `${category.negative}%` }}></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Threat Detection */}
                    <div className="gradient-card p-6 rounded-xl">
                        <h3 className="text-xl font-bold text-lime-400 mb-6">Threat Detection</h3>
                        <div className="space-y-4">
                            {threatDetection.map((threat, index) => (
                                <div key={index} className="glass-effect p-4 rounded-lg">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="font-medium text-white">{threat.type}</div>
                                        <div
                                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                                                threat.level === "low"
                                                    ? "bg-green-500/20 text-green-400"
                                                    : threat.level === "medium"
                                                        ? "bg-orange-500/20 text-orange-400"
                                                        : "bg-red-500/20 text-red-400"
                                            }`}
                                        >
                                            {threat.level.toUpperCase()}
                                        </div>
                                    </div>
                                    <p className="text-gray-300 text-sm mb-3">{threat.description}</p>
                                    <div className="flex items-center justify-between text-xs">
                                        <span className="text-gray-400">{threat.posts} related posts</span>
                                        <span className="text-gray-400">{threat.time}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                            <div className="flex items-center space-x-2 mb-2">
                                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                <span className="text-green-400 font-medium text-sm">System Status</span>
                            </div>
                            <p className="text-gray-300 text-sm">
                                No high-priority threats detected. All monitoring systems operational.
                            </p>
                        </div>
                    </div>
                </div>

                {/* AI Insights */}
                <div className="gradient-card p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-lime-400 mb-6">AI-Generated Insights</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="glass-effect p-4 rounded-lg">
                            <div className="flex items-center mb-3">
                                <div className="text-xl mr-3">📈</div>
                                <div className="font-medium text-white">Positive Trend Alert</div>
                            </div>
                            <p className="text-gray-300 text-sm mb-3">
                                Art installation mentions increased by 89% with overwhelmingly positive sentiment. Consider extending
                                exhibition hours or adding guided tours.
                            </p>
                            <button className="px-4 py-2 bg-lime-500/20 text-lime-400 rounded-lg text-sm font-medium hover:bg-lime-500/30 transition-colors">
                                View Details
                            </button>
                        </div>

                        <div className="glass-effect p-4 rounded-lg">
                            <div className="flex items-center mb-3">
                                <div className="text-xl mr-3">⚠️</div>
                                <div className="font-medium text-white">Attention Required</div>
                            </div>
                            <p className="text-gray-300 text-sm mb-3">
                                Parking complaints increasing. Social media suggests implementing shuttle service from overflow parking
                                areas to reduce negative sentiment.
                            </p>
                            <button className="px-4 py-2 bg-orange-500/20 text-orange-400 rounded-lg text-sm font-medium hover:bg-orange-500/30 transition-colors">
                                Take Action
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SocialMediaIntelligence
