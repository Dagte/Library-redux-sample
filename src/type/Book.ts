interface Book {
    id: number;
    title: string;
    author: string;
    publishingDate: string;
    genre: string;
}

interface CatalogProps {
    books: Book[];
}

export type {Book, CatalogProps}