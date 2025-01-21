import { useEffect, useState } from "react";
import "./CategoryFilter.css"
import axios from "axios";

export default function CategoryFilter({selected, setFilter}){

    const [filters, setFilters] = useState([]);

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    const api_endpoint = "https://wger.de/api/v2/exercisecategory/"


    useEffect(() => {

        axios.get(api_endpoint)
            .then(response => {
                setFilters([{
                    "id": 0,
                    "name": "All"
                },  ...response.data.results]);
                setIsLoading(false)
            })
            .catch(error => {
                setIsLoading(false)
                setError(error?.response?.data?.detail || "Error Occured")
            });

    }, []);

    if(isLoading){
        return(
            <div>Filters Loading</div>
        )
    }
    if(error){
        return(
            <div>Filters failed to load: {error}</div>
        )
    }

    return(
        <div className="category-filter-container">
            <span>Filter:</span>
            <div className="filter-options">
                {
                    filters.map((filter) => {
                        return <button 
                            key={filter.id}
                            className={`filter-btn ${selected === filter.id ? "active" : null}`}
                            onClick={() => setFilter(filter.id)}
                            >
                                {filter.name}
                            </button>
                    })
                }
            </div>
        </div>
    )
}