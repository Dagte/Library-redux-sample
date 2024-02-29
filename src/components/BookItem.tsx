import {Book} from "../type/Book.ts";
import {useDispatch, useSelector} from 'react-redux';
import {cartActions} from '../slices/cartSlice.tsx';
import {RootState} from "../type/State.ts";

interface BookItemProps {
    book: Book;
    onLoan: boolean;
}

const styleActive = {backgroundColor: '#FFF8DC', color: 'black'}
const styleOnLoan = {backgroundColor: 'bisque', color: 'black'}

const BookItem = ({book, onLoan}: BookItemProps) => {
    const ids: number[] = useSelector((state: RootState) => state.cart.idsInInterface);
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(cartActions.add(book.id));
    };

    const handleRemoveFromCart = () => {
        dispatch(cartActions.remove(book.id));
    };

    return (
        <>
            <div className="card h-100" style={onLoan ? styleOnLoan : styleActive}>
                <div className="card-body">
                    <h5 className="card-title">{book.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{book.author}</h6>
                    <p className="card-text">Publishing Date: {book.publishingDate}</p>
                    <p className="card-text">Genre: {book.genre}</p>
                    {(!ids.includes(book.id) &&
                        <button className="btn btn-primary" onClick={handleAddToCart}>Loan book</button>)}
                    {(ids.includes(book.id) &&
                        <button className="btn btn-warning" onClick={handleRemoveFromCart}>Return book</button>)}
                </div>
            </div>
        </>
    );
}

export default BookItem