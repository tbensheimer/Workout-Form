import {useEffect, useState} from "react";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import { useSelector, useDispatch } from "react-redux";
import { setWorkouts } from "../features/workoutSlice";

export default function Home() {

const workouts = useSelector(state => state.workouts);
const dispatch = useDispatch();

useEffect(() => {
const fetchWorkouts = async () => {
    const response = await fetch('/api/workouts');
    const data = await response.json();

    if(response.ok) {
        dispatch(setWorkouts(data));
        console.log(data);
    }
}
    fetchWorkouts();
}, [])

    return (
        <>
        <div><h2>Home</h2></div>
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout) => {
                  return <WorkoutDetails key={workout._id} workout={workout} />
                })}
            </div>
            <WorkoutForm />
        </div>
        </>
    )
}