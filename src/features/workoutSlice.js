import {createSlice, configureStore} from "@reduxjs/toolkit";

const workoutSlice = createSlice({
    name: "workout",
    initialState: {
        workouts: []
    },
    reducers: {
        createWorkout: (state, action) => {
            state.workouts = [...state.workouts, action.payload];
        },
        deleteWorkout: (state, action) => {
            state.workouts = state.workouts.filter(workout =>{
                return workout._id != action.payload._id;
            })
        },
        setWorkouts: (state, action) => {
            state.workouts = action.payload;
        }
    }
})

const store = configureStore({
    reducer: workoutSlice.reducer
})

const {createWorkout, deleteWorkout, setWorkouts} = workoutSlice.actions;

export {store, createWorkout, deleteWorkout, setWorkouts}