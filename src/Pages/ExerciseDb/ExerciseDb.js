import "./ExerciseDb.css"

import { useEffect, useState } from "react"
import axios from "axios";
import CategoryFilter from "../../Components/CategoryFilter/CategoryFilter";

export default function ExerciseDb() {

    const [filter, setFilter] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    const [exercises, setExercises] = useState([]);

    function getExercises() {
        let api_endpoint = "https://wger.de/api/v2/exercisebaseinfo/?language=2&limit=900"

        if (filter > 0) {
            api_endpoint += `&category=${filter}`
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

                setExercises(foundExercises);
                setIsLoading(false);
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

    if (isLoading) {
        return (
            <>
                <CategoryFilter selected={filter} setFilter={setFilter} />
                <div>Exercises are loading...</div>
            </>
        )
    }
    if (error) {
        return (
            <>
                <CategoryFilter selected={filter} setFilter={setFilter} />
                <div>Error loading exercises: {error}</div>
            </>
        )
    }

    return (
        <>
            <CategoryFilter selected={filter} setFilter={setFilter} />
            {
                exercises.map((exercise, i) => {
                    return <div
                        key={i}
                    >{exercise.name}</div>
                })
            }
        </>

    )

} 