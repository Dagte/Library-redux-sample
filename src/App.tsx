import './App.css'
import Catalog from "./components/Catalog.tsx";
import Navbar from "./components/Navbar.tsx";
import Cart from "./components/Cart.tsx";
import books from './assets/books.json'; // Import the books data
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';


function App() {

    return (
        <>
            <div>
                <Router>
                    <Navbar/>
                    <Routes>
                        <Route path="/" element={<Catalog books={books}/>}>
                        </Route>
                        <Route path="/onLoan" element={<Cart/>}/>
                    </Routes>
                </Router>
            </div>
        </>
    )
}

export default App
