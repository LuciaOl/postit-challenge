import { BrowserRouter , Routes, Route} from "react-router-dom";
import App from "../App";
import Board from "./Board"
import Navbar from "./Navbar";
import Bin from './Bin';


const Root = () => {
    return (
        <BrowserRouter>
        <Navbar />
            <Routes>
                <Route path='/' element={<App />}></Route>
                <Route path='/board' element={<Board />}></Route>
                <Route path='/bin' element={<Bin />}> </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Root; 