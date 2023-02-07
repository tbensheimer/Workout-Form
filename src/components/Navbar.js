import {Link} from "react-router-dom"
import {useLogout} from "../hooks/useLogout";

export default function Navbar() {
    const {logout} = useLogout();

    const handleLogout = () =>{
        logout();
    }

    return (
        <header>
            <div className="container">
                <Link to="/"><h1>Workout Buddy</h1></Link>
            </div>
            <nav>
                <div>
                    <button onClick={handleLogout} >Log out</button>
                </div>
                <div>
                    <Link to="/signup">Sign up</Link>
                    <Link to="/login">Log in</Link>
                </div>
            </nav>
        </header>
    )
}
