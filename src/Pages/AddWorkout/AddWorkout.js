import "./AddWorkout.css"
import { useState, useEffect, useContext } from "react"
import { UserContext } from "../../Contexts/UserContext"
import axios from "axios";

import DatePicker from "../../Components/DatePicker/DatePicker";
import CategoryFilter from "../../Components/CategoryFilter/CategoryFilter";

export default function AddWorkout(){
    const { user } = useContext(UserContext);

    const [day, setDay] = useState(new Date().toLocaleDateString("en-GB"));
    const [selectedExercise, setSelectedExercise] = useState("")

    const [exercises, setExercises] = useState(null);
    const [loadingExercises, setLoadingExercises] = useState(true);
    const [exercisesError, setExercisesError] = useState("");

    const [filter, setFilter] = useState(0);
   

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


    const [exerciseNames, setExerciseNames] = useState([]);
    const [exerciseNamesError, setExerciseNamesError] = useState("");
    
    function getExercisesNames(){
        let api_endpoint = "https://wger.de/api/v2/exercisebaseinfo/?language=2&limit=900"

        if (filter > 0) {
            api_endpoint += `&category=${filter}`
        }

        const cached = localStorage.getItem(api_endpoint);
        if (cached) {
            setExerciseNames(JSON.parse(cached));
            // setIsLoading(false);
            return;
        }

        axios.get(api_endpoint)
            .then((response) => {
                console.log(response.data.results);

                let foundExercises = []
                for (let exerciseMetadata of response.data.results) {
                    for (let exercise of exerciseMetadata.exercises) {
                        if (exercise.language === 2) {
                            foundExercises.push(exercise)
                        }
                    }
                }

                localStorage.setItem(api_endpoint, JSON.stringify(foundExercises));
                setExerciseNames(foundExercises);
                // setIsLoading(false);
                console.log(foundExercises)
            })
            .catch((error) => {
                setExerciseNamesError(error?.response?.data?.detail || "Error Occured")
                // setIsLoading(false)
            })
    }

    useEffect(() => {
        getExercisesNames();
    }, [filter])

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
                <DatePicker setDate={setDay}/>
                <CategoryFilter selected={filter} setFilter={setFilter} />
                <select 
                    value={selectedExercise}
                    onChange={(e) => setSelectedExercise(e.target.value)}
                    >
                    <option value="">Select Exercise</option>

                    {
                        exerciseNames.map((exercise) => (
                            <option 
                                key={exercise.name}
                                value={exercise.name}
                                >{exercise.name}</option>
                        ))
                    }
                </select>
            </form>
        </div>
    )
}