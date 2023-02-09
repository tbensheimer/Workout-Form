import {useState} from "react";
import {useDispatch} from "react-redux";
import { login } from "../features/workoutSlice";

export function useSignup() {
const [error, setError] = useState(null);
const [loading, setLoading] =useState(false);
const dispatch = useDispatch();

const signup = async (email, password) => {
setLoading(true);
setError(null);

const response = await fetch("/api/users/signupUser", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({email, password})
})
const data = await response.json();

if(!response.ok) {
    setLoading(false);
    setError(data.error);
}

if(response.ok) {
    setLoading(false);
    localStorage.setItem('user', JSON.stringify(data))
    dispatch(login(data));
}

}
return {loading, error, signup }

}

