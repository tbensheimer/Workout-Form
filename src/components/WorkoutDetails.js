import { useDispatch, useSelector } from "react-redux"
import { deleteWorkout, toggleEdit, getWorkoutDetails } from "../features/workoutSlice";
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

export default function WorkoutDetails({workout}) {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);

    const handleDeleteClick = async () => {
        console.log(workout._id);
        const response = await fetch("/api/workouts/" + workout._id, {
            method: "DELETE",
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
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
            <p>{formatDistanceToNow(new Date(workout.createdAt), {suffix: true})} ago</p>
            <button className="edit" type="button" onClick={handleEditClick}>edit</button>
            <button className="delete" type="button" onClick={handleDeleteClick}>delete</button>
        </div>
    )
}


    return (
        <div className="workout-details">
            <h4 className="workout-title">{workout.title}</h4>
            <p><strong>Load (kg):</strong> {workout.load}</p>
            <p><strong>Reps: </strong> {workout.reps}</p>
            <p>{formatDistanceToNow(new Date(workout.createdAt), {suffix: true})} ago</p>
            <button className="edit" type="button" onClick={handleEditClick}>edit</button>
            <button className="delete" type="button" onClick={handleDeleteClick}>delete</button>
        </div>
    )
}
