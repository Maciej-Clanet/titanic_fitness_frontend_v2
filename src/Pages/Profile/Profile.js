import "./Profile.css"
import { Link, Outlet } from "react-router-dom"
export default function Profile() {
    return (
        <>
            <nav className="profile-nav">
                <Link to="past_workouts" className="profile-nav-btn">
                    Past Workouts
                </Link>
                <Link to="exercise_database" className="profile-nav-btn">
                    Exercise Database
                </Link>
                <div class="nav-dropdown-container">
                    <button className="profile-nav-btn nav-dropdown">Tracking <span class="dropdown-arrow">▼</span></button>
                    <div className="nav-dropdown-options">
                        <Link to="track_weight" className="profile-nav-btn">Track Weight</Link>
                        <Link to="track_calories" className="profile-nav-btn">Track Calories</Link>
                        <Link to="track_mood" className="profile-nav-btn">Track Mood</Link>
                    </div>
                </div>

                <Link to="new_workout" className="profile-nav-btn action">
                    Start New Workout
                </Link>
            </nav>

            <div className="profile-content">
                {/* this is where the subroute will render */}
                <Outlet />
            </div>
        </>
    )
}