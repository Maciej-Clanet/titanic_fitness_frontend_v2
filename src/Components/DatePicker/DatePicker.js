import { useEffect, useState } from "react"
import "./DatePicker.css"


export default function DatePicker({setDate}){

    const [currentDate, setCurrentDate] = useState( new Date().toISOString().split("T")[0]);

    function nextDay(){
        const currentDay = new Date(currentDate);
        currentDay.setDate(currentDay.getDate() + 1); // Increment by one day
        setCurrentDate(currentDay.toISOString().split("T")[0]); // Update state in 'yyyy-mm-dd' format
    }
    function previousDay(){
        const currentDay = new Date(currentDate);
        currentDay.setDate(currentDay.getDate() - 1); // decrement by one day
        setCurrentDate(currentDay.toISOString().split("T")[0]); // Update state in 'yyyy-mm-dd' format
    }

    useEffect(() => {
        const dateArray = currentDate.split("-");
        const formattedDate = `${dateArray[2]}/${dateArray[1]}/${dateArray[0]}`
        setDate(formattedDate);
    }, [currentDate])

    return (
        <div className="date-picker-container">
            <button type="button" onClick={previousDay}> ◄ </button>
            <input type="date" value={currentDate} onChange={(e) => setCurrentDate(e.target.value)} required />
            <button type="button" onClick={nextDay}> ► </button>
        </div>
    )
}