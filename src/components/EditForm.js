import {useState, useEffect} from "react";
import { useDispatch} from "react-redux";
import {toggleEdit, getWorkoutDetails, updateWorkout } from "../features/workoutSlice";

export default function EditForm({workout}) {

const [title, setTitle] = useState("");
const [load, setLoad] = useState("");
const [reps, setReps] = useState("");
const [error, setError] = useState("");
const [emptyFields, setEmptyFields] = useState([]);
const dispatch = useDispatch();
const workoutInfo = {_id: workout._id, title, load, reps};

useEffect(() => {
    setTitle(workout.title);
    setLoad(workout.load);
    setReps(workout.reps);
}, [])

const handleEditFormSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/workouts/" + workout._id , {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(workoutInfo)
    })
    const data = await response.json();

    if(!response.ok) {
        setError(data.error);
        setEmptyFields(data.emptyFields);
    }

    if(response.ok) {
        setError(null);
        setEmptyFields([]);
        dispatch(updateWorkout(workoutInfo))
        setTitle("");
        setLoad("");
        setReps("");
        dispatch(toggleEdit());
        dispatch(getWorkoutDetails({}));
    }
}

return (<>
<form className="create" onSubmit={handleEditFormSubmit} >
    <h3>Update Workout</h3>
    <label htmlFor="title">Exercise Title:</label>
    <input className={emptyFields.includes('title') ? "error" : ""} id="title" type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
    <label htmlFor="load">Load (in Kg):</label>
    <input className={emptyFields.includes('load') ? "error" : ""} type="number" id="load" onChange={(e) => setLoad(e.target.value)} value={load} />
    <label htmlFor="reps">Reps: </label>
    <input className={emptyFields.includes('reps') ? "error" : ""} id="reps" type="number" onChange={(e) => setReps(e.target.value)} value={reps} />
    <button>Update Workout</button>
    <button className="cancel" type="button" onClick={() => dispatch(toggleEdit())}>Cancel</button>
    {error && <div className="error">{error}</div>}
</form>


</>)

}
