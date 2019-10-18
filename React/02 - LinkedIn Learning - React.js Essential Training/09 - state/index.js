import React from "react";
import { render } from "react-dom";

let bookList = [
    {
        title: "The Hobbit",
        date: "21 September, 1937",
        author: "J.R.R. Tolkien",
        pages: 304
    },
    {
        title: "The Fellowship of the Ring",
        date: "29 July, 1954",
        author: "J.R.R. Tolkien",
        pages: 479
    },
    {
        title: "The Two Towers",
        date: "11 November, 1954",
        author: "J.R.R. Tolkien",
        pages: 415
    },
    {
        title: "The Return of the King",
        date: "20 October, 1955",
        author: "J.R.R. Tolkien",
        pages: 347
    }
];

const Book = ({ title, date, author, pages }) => {
    return (
        <section>
            <h2>{title}</h2>
            <p>released: {date}</p>
            <p>by: {author}</p>
            <p>pages: {pages}</p>
        </section>
    );
};

class Library extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true
        };
    }

    render() {
        const { books } = this.props;
        return (
            <div>
                <h1>The Library is {this.state.open ? "open" : "closed"}</h1>
                {books.map((book, index) => (
                    <Book
                        key={index}
                        title={book.title}
                        date={book.date}
                        author={book.author}
                        pages={book.pages}
                    />
                ))}
            </div>
        );
    }
}

render(<Library books={bookList} />, document.getElementById("root"));
