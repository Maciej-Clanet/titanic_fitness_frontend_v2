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
                {/* Notice the star after the /profile/ */}
                <Route path="/profile/*" element={<Profile />}>
                    {/* divs are temporary*/}
                    <Route path="past_workouts"
                        element={<div>Past Workouts</div>}
                    />
                    <Route path="exercise_database"
                        element={<div>Exercise Database</div>}
                    />
                    <Route path="new_workout"
                        element={<div>New Workout</div>}
                    />
                </Route>
            </Routes>
        </main>
    )
}

