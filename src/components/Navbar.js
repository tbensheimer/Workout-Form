import {Link} from "react-router-dom"

export default function Navbar() {
    return (
        <header>
            <div className="container">
                <Link to="/"><h1>Workout Buddy</h1></Link>
            </div>
        <nav>
                <div>
                    <Link to="/signup">Sign up</Link>
                    <Link to="/login">Log in</Link>
                </div>
            </nav>
        </header>
    )
}
