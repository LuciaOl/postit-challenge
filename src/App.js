import "./App.css";
import Board from "./components/UI/Board";
import { Link } from "react-router-dom"



function App( ) {

	return (
		<div className="App">
			<header className="App-header">
       		 	<h1>Post it </h1> 
				<p>
					The App where you can organize your work
				</p>
				<button className="board-button" onClick={Board}>
					<nav>
						<Link to="/board" class="text-sm" >My Board</Link>
					</nav>
				</button>
			</header>
		</div>
	);
}

export default App;
