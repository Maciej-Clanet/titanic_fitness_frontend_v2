import "./AddWorkout.css"
import { useState, useEffect, useContext } from "react"
import { UserContext } from "../../Contexts/UserContext"
import axios from "axios";

export default function AddWorkout(){
    const { user } = useContext(UserContext);

    const [day, setDay] = useState(new Date().toLocaleDateString("en-GB"));

    const [exercises, setExercises] = useState(null);
    const [loadingExercises, setLoadingExercises] = useState(true);
    const [exercisesError, setExercisesError] = useState("");

    function loadExercises(){
        const ENDPOINT_URL = "http://localhost:8001/workouts/workout_day";

        const DATA = {
            "user_email" : user.email,
            "date": day
        }

        axios.post(ENDPOINT_URL, DATA)
            .then(response => {
                setExercises(response.data.exercises);
                setLoadingExercises(false)
            })
            .catch(error => {
                setExercisesError(error?.response?.data?.detail || "Error occured")
                setExercises(null);
                setLoadingExercises(false)
            })
    }

    useEffect(() => {
        loadExercises()
    }, [day])


    function buildWorkoutsSummary(){
        if(loadingExercises){
            return <h3>Loading Data...</h3>
        }
        if(exercisesError){
            return <h3>{exercisesError}</h3>
        }

        // no error but not exercises in data (user didn't log anything yet)
        if(!exercises || Object.keys(exercises).length === 0){
            return <h3>Nothing yet, go workout dud</h3>
        }

        // here we will handle using the data
        return(
            <>
                {Object.entries(exercises).map( ([exerciseName, entries]) => (
                    <div className="exercise-box" key={exerciseName}>
                        <h4>{exerciseName}</h4>

                        {entries.map((entry, index) => (
                            <div className="exercise-entry-line" key={index}>
                                <span className="weight">{entry.weight}kg</span>
                                <span className="reps">{entry.reps} reps</span>
                            </div>
                        ))}

                    </div>
                ) )}
            </>
        )
    }


    return(
        <div className="workout-tracker-wrapper">
            <div className="workout-summary-container">
                <h1>{day}</h1>
                <div className="exercises-grid">
                    { buildWorkoutsSummary() }
                </div>
            </div>
            <form className="workout-form">
                dsadsa
            </form>
        </div>
    )
}