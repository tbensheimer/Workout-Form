export default function WorkoutDetails({workout}) {

    return (
        <div className="workout-details">
            <h4 className="workout-title">{workout.title}</h4>
            <p><strong>Load (kg):</strong> {workout.load}</p>
            <p><strong>Reps: </strong> {workout.reps}</p>
            <p>{workout.createdAt}</p>
        </div>
    )
}