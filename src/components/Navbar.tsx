import {useSelector} from "react-redux";
import {CartState} from "../slices/cartSlice.tsx";
import {Link} from 'react-router-dom';


const Navbar = () => {
    const ids: number[] = useSelector((state: CartState) => state.idsInInterface);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Bookstore</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                </ul>
                <Link to="/onLoan" className="btn btn-outline-success my-2 my-sm-0">
                    Cart ({ids.length})
                </Link>
            </div>
        </nav>
    );
}

export default Navbar