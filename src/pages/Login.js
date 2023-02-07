import {useState} from "react"

export default function Signup() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleSubmit = async (e) =>{
e.preventDefault();

console.log(email, password);

}

return (
    <form className="login" onSubmit={handleSubmit}>
        <h3>Log in</h3>
        <label>Email</label>
        <input onchange={e => setEmail(e.target.value)} value={email} type="email" />
        <label>Password</label>
        <input type="password" onChange={e => setPassword(e.target.value)} value={password} />
        <button>Log in</button>
    </form>
)

}
