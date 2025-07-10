import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import LandingPage from "./pages/LandingPage"
import Dashboard from "./pages/Dashboard"
import PreEventPlanning from "./pages/PreEventPlanning"
import VenueIntelligence from "./pages/VenueIntelligence"
import RealTimeMonitoring from "./pages/RealTimeMonitoring"
import SmartVenueExperience from "./pages/SmartVenueExperience"
import EmergencyResponse from "./pages/EmergencyResponse"
import VoiceAssistant from "./pages/VoiceAssistant"
import SocialMediaIntelligence from "./pages/SocialMediaIntelligence"

function App() {
    return (
        <div className="dark-lime-bg">
            <Navbar />
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/pre-event-planning" element={<PreEventPlanning />} />
                <Route path="/venue-intelligence" element={<VenueIntelligence />} />
                <Route path="/real-time-monitoring" element={<RealTimeMonitoring />} />
                <Route path="/smart-venue-experience" element={<SmartVenueExperience />} />
                <Route path="/emergency-response" element={<EmergencyResponse />} />
                <Route path="/voice-assistant" element={<VoiceAssistant />} />
                <Route path="/social-media-intelligence" element={<SocialMediaIntelligence />} />
            </Routes>
        </div>
    )
}

export default App
