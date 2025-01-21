import "./ExerciseDb.css"

import { useEffect, useState } from "react"
import CategoryFilter from "../../Components/CategoryFilter/CategoryFilter";
import axios from "axios";

export default function ExerciseDb(){

    const [filter, setFilter] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    const [exercises, setExercises] = useState([]);
 
    function getExercises(){
        let api_endpoint = "https://wger.de/api/v2/exercisebaseinfo/?language=2&limit=900"
        if(filter > 0){
            api_endpoint += `&category=${filter}`
        }

        axios.get(api_endpoint)
            .then((response) => {
                // console.log(response.data);
                let foundExercises = [];
                for(let exerciseMetadata of response.data.results){
                    for(let exercise of exerciseMetadata.exercises){
                        if(exercise.language === 2){
                            foundExercises.push(exercise)
                        }
                    }
                }
                setExercises(foundExercises)
                setIsLoading(false)
                console.log(foundExercises)
            })
            .catch((error) => {
                setError(error?.response?.data?.detail || "Error Occured")
                setIsLoading(false)
            })
    }

    useEffect(() => {
        getExercises()
    }, [filter])

    if(isLoading){
        return (
            <>
                <CategoryFilter selected={filter} setFilter={setFilter}/>
                <p>Loading Exercises</p>
            </>
        )
    }
    if(error){
        return(
            <>
                <CategoryFilter selected={filter} setFilter={setFilter}/>
                <p>Error occuer: {error}</p>
            </>
        )
    }

    return(
        <>
            <CategoryFilter selected={filter} setFilter={setFilter}/>
            <div className="found-exercises-container">
            {
                exercises.map((exercise) => {
                    return(
                        <div className="exercise-container">
                            {exercise.name}
                        </div>
                    )
                })
            }
            </div>
        </>
    )
}