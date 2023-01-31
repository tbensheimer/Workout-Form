import { useDispatch } from "react-redux"
import { deleteWorkout, toggleEdit, getWorkoutDetails } from "../features/workoutSlice";

export default function WorkoutDetails({workout}) {
    const dispatch = useDispatch();

    const handleDeleteClick = async () => {
        console.log(workout._id);
        const response = await fetch("/api/workouts/" + workout._id, {
            method: "DELETE"
        });
        const data = await response.json();

        if(response.ok) {
            dispatch(deleteWorkout(data));
        }
    }

    const handleEditClick = () => {
        dispatch(toggleEdit());
        dispatch(getWorkoutDetails(workout));
    }


    return (
        <div className="workout-details">
            <h4 className="workout-title">{workout.title}</h4>
            <p><strong>Load (kg):</strong> {workout.load}</p>
            <p><strong>Reps: </strong> {workout.reps}</p>
            <p>{workout.createdAt}</p>
            <button class="edit" type="button" onClick={handleEditClick}>edit</button>
            <button class="delete" type="button" onClick={handleDeleteClick}>delete</button>
        </div>
    )
}
