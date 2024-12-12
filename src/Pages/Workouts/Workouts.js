import "./Workouts.css"
import { useState, useEffect } from "react"

export default function Workouts(){
    const [workouts, setWorkouts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    // const [workoutsUI, setWorkoutsUI] = useState();

    function load_workouts(){

        const URL = "http://localhost:8001/workouts/";

        fetch(URL)
        .then(response => {
            if(!response.ok){
                throw new Error("Response was not ok")
            }
            return response.json();
        })
        .then(workouts => {
            setError("")
            setWorkouts(workouts)
        })
        .catch(error => {
            setError(error.message)
        })

    }
    let workout_entries = [];
    function build_workout_entries(){
        workout_entries = [];

        workouts.forEach(workout => {
            workout_entries.push(
                <div className="workout-container">
                    <h2>{workout.name}</h2>
                </div>
            );
        });
        // return workout_entries;
    }

    useEffect(() => {
        load_workouts()
        build_workout_entries()
        // setWorkoutsUI(build_workout_entries())
        setLoading(false)
    },[])

    if(loading){
        return(
            <div className="workouts-content">
            <h1>Loading Workotus...</h1>
            </div>
        )
    }
    if(error){
        return(
            <div className="workouts-content">
            <h1>Error</h1>
            <p>{error}</p>
            </div>
        )
    }

    return(
        <div className="workouts-content">
            <h1>Workotus</h1>
            {workout_entries}
        </div>
    )
}