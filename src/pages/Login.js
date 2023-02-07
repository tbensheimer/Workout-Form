import {useState} from "react"
import {useLogin} from "../hooks/useLogin";

export default function Signup() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const {error, login, isLoading} = useLogin();

const handleSubmit = async (e) =>{
e.preventDefault();

await login(email, password);
}

return (
    <form className="login" onSubmit={handleSubmit}>
        <h3>Log in</h3>
        <label>Email</label>
        <input onchange={e => setEmail(e.target.value)} value={email} type="email" />
        <label>Password</label>
        <input type="password" onChange={e => setPassword(e.target.value)} value={password} />
        <button disabled={isLoading}>Log in</button>
        {error && <div className="error">{error}</div>}
    </form>
)

}
