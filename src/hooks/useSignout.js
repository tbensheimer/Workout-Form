import {useState} from "react";
import {useContext} from "./useAuthContext";

export default function useSignout() {
const [error, setError] = useState(null);
const [loading, setLoading] =useState(false);
const {dispatch} = useContext();

const signup = async (email, password) => {

setLoading(true);
setError(null);

const response = await fetch("/api/user/signup", {
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
    dispatch({type: "LOGIN", payload: data})
}

return {loading, error, signup }

}


}
