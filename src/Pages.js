import {Routes, Route} from "react-router-dom"
import Home from "./Pages/Home/Home"
import Auth from "./Pages/Auth/Auth"
import Workouts from "./Pages/Workouts/Workouts"

export default function Pages(){
    return(
        <main id="page-content">
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/join" element={<Auth/>} />
                <Route path="/workouts" element={<Workouts/>} />
            </Routes>
        </main>
    )
}