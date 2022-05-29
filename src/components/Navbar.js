import { Link } from "react-router-dom"


const Navbar = () => {
    return (
        <nav>
            <Link to="/" class="text-lg">Home</Link>
            {'                    '}| {'                    '}
            <Link to="/board" class="text-sm" >Board</Link>
         
        </nav>

    )
}

export default Navbar;
