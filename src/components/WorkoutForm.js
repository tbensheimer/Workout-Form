import {useState} from "react";
import { useDispatch } from "react-redux";
import { createWorkout } from "../features/workoutSlice";

export default function WorkoutForm() {

const [title, setTitle] = useState("");
const [load, setLoad] = useState("");
const [reps, setReps] = useState("");
const [error, setError] = useState("");
const [emptyFields, setEmptyFields] = useState([]);
const dispatch = useDispatch();

const handleFormSubmit = async (e) => {
    e.preventDefault();

    const workout = {title, load, reps};

    const response = await fetch("/api/workouts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(workout)
    })
    const data = await response.json();

    if(!response.ok) {
        setError(data.error);
        setEmptyFields(data.emptyFields);
    }

    if(response.ok) {
        setError(null);
        setEmptyFields([]);
        dispatch(createWorkout(data))
        console.log("new workout added", data);
        setTitle("");
        setLoad("");
        setReps("");
    }
}

return (<>
<form className="create" onSubmit={handleFormSubmit} >
    <h3>Add a new Workout</h3>
    <label htmlFor="title">Exercise Title:</label>
    <input className={emptyFields.includes('title') ? "error" : ""} id="title" type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
    <label htmlFor="load">Load (in Kg):</label>
    <input className={emptyFields.includes('load') ? "error" : ""} type="number" id="load" onChange={(e) => setLoad(e.target.value)} value={load} />
    <label htmlFor="reps">Reps: </label>
    <input className={emptyFields.includes('reps') ? "error" : ""} id="reps" type="number" onChange={(e) => setReps(e.target.value)} value={reps} />
    <button>Add Workout</button>
    {error && <div className="error">{error}</div>}
</form>


</>)

}
