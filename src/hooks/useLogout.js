import {useDispatch} from "react-redux";
import { logout, setWorkouts } from "../features/workoutSlice";

export function useLogout() {
const dispatch = useDispatch();
    const Logout = () => {
        localStorage.removeItem('user')

        dispatch(logout);
        dispatch(setWorkouts(null));
    }

    return {Logout}
}
