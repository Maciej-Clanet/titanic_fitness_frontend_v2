import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home/Home"
import Auth from "./Pages/Auth/Auth"
import Profile from "./Pages/Profile/Profile"


export default function Pages() {
    return (
        <main id="page-content" style={{ height: "100%" }}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/join" element={<Auth />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </main>
    )
}