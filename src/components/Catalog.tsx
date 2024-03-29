import {Book, CatalogProps} from "../type/Book";
import BookItem from "./BookItem.tsx";
import {useSelector} from "react-redux";
import {RootState} from "../type/State";


const Catalog = ({books}: CatalogProps) => {
    const ids: number[] = useSelector((state: RootState) => state.cart.idsInInterface);

    return (
        <div>
            <h1>Book Catalog</h1>
            <div className="container mt-3">
                <div className="row">
                    {books.map((book: Book) => (
                        <div key={book.id} className="col-md-4 mb-4">
                            <BookItem book={book} onLoan={ids.includes(book.id)}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Catalog;