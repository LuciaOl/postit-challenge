import { Link } from "react-router-dom"



const Navbar = () => {
    return (
        <nav>
            <Link to="/" class="text-lg">Home</Link>
            {'                    '}| {'                    '}
            <Link to="/board" class="text-sm" >Board</Link>
            {'                    '}| {'                    '}
            <Link to="/bin" class="text-lg"> Bin</Link>
            
         
        </nav>

    )
}

export default Navbar;
