import {Routes, Route} from "react-router-dom"
import Home from "./Pages/Home/Home"
import Auth from "./Pages/Auth/Auth"
import Profile from "./Pages/Profile/Profile"
import ExerciseDb from "./Pages/ExerciseDb/ExerciseDb"

export default function Pages(){
    return(
        <main id="page-content">
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/join" element={<Auth/>} />
                <Route path="/profile/*" element={<Profile/>}>
                    <Route path="new_workout" element={<div>new_workout</div>} />
                    <Route path="exercise_database" element={<ExerciseDb/>} />
                    <Route path="past_workouts" element={<div>past_workouts</div>} />
                </Route>
            </Routes>
        </main>
    )
}