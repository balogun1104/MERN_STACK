import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header>
             <div className="container">
            <Link to='/home'>
                <h1>Workout Manager</h1>
            </Link>
        </div>
        </header>
    )
}

export default Navbar;