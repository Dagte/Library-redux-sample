import {useSelector} from "react-redux";
import {CartState} from "../slices/cartSlice.tsx";
import BookItem from "./BookItem.tsx";
import books from '../assets/books.json';
import {Book} from "../type/Book";

const Cart = () => {
    const ids: number[] = useSelector((state: CartState) => state.idsInInterface);

    return (
        <div className="container mt-3">
            <div className="row">
                <h2>Your Cart</h2>
                {books.filter((book: Book) => ids.includes(book.id))
                    .map((book: Book) => (
                            <div key={book.id} className="col-md-4 mb-4">
                                <BookItem key={book.id} book={book} onLoan={ids.includes(book.id)}/>
                            </div>
                        )
                    )
                }
            </div>
        </div>
    );
}

export default Cart