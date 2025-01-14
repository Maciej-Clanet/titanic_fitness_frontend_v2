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

                <div className="nav-dropdown-container">
                    <button className="profile-nav-btn nav-dropdown">
                        Tracking <span className="dropdown-arrow">▼</span>
                    </button>
                    <div className="nav-dropdown-options">
                        <Link to="track_weight">Track Weight</Link>
                        <Link to="track_mood">Track Mood</Link>
                        <Link to="track_calories">Track Calories</Link>
                    </div>
                </div>
                <Link to="new_workout" className="profile-nav-btn action">
                    New Workout
                </Link>
            </nav>
            <div className="profile-content">
                <Outlet />
            </div>
        </>
    )
}