import {createSlice, configureStore} from "@reduxjs/toolkit";

const WorkoutSlice = createSlice({
    name: "workout",
    initialState: {
        workouts: [],
        isEdit: false,
        workoutInfoForEdit: {},
        user: null
    },
    reducers: {
        createWorkout: (state, action) => {
            state.workouts.unshift(action.payload);
        },
        deleteWorkout: (state, action) => {
            const index = state.workouts.findIndex(workout => workout._id === action.payload._id);
            state.workouts.splice(index, 1);
        },
        updateWorkout: (state, action) => {
            const actionIndex = state.workouts.findIndex(workout => workout._id === action.payload._id);

           const updatedArray = state.workouts.map((workout, index) => {
                if(index === actionIndex) {
                    return {...workout, ...action.payload};
                }
                return workout;
            })
            state.workouts = updatedArray;
        },
        setWorkouts: (state, action) => {
         state.workouts = action.payload;
        },
        toggleEdit: (state) => {
            state.isEdit = !state.isEdit;
        },
        getWorkoutDetails: (state, action) => {
            state.workoutInfoForEdit =  action.payload;
        },
        login: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
        }
    }
})

const store = configureStore({
    reducer: WorkoutSlice.reducer
})

const {createWorkout, deleteWorkout, setWorkouts, toggleEdit, getWorkoutDetails, updateWorkout, login, logout} = WorkoutSlice.actions;

export {store, createWorkout, deleteWorkout, setWorkouts, toggleEdit, getWorkoutDetails, updateWorkout, login, logout}
