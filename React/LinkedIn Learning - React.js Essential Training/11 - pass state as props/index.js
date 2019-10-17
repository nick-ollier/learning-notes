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

const Book = ({ title, date, author, pages, freeBookmark }) => {
    return (
        <section>
            <h2>{title}</h2>
            <p>released: {date}</p>
            <p>by: {author}</p>
            <p>pages: {pages}</p>
            <p>Free bookmark: {freeBookmark ? "Yes!" : "No :("}</p>
        </section>
    );
};

class Library extends React.Component {
    state = {
        open: true,
        freeBookmark: true
    };

    toggleOpenClosed = () => {
        this.setState(prevState => ({
            open: !prevState.open
        }));
    };

    render() {
        const { books } = this.props;
        return (
            <div>
                <h1>The Library is {this.state.open ? "open" : "closed"}</h1>
                <button onClick={this.toggleOpenClosed}>
                    Open/Close Library
                </button>
                {books.map((book, index) => (
                    <Book
                        key={index}
                        title={book.title}
                        date={book.date}
                        author={book.author}
                        pages={book.pages}
                        freeBookmark={this.state.freeBookmark}
                    />
                ))}
            </div>
        );
    }
}

render(<Library books={bookList} />, document.getElementById("root"));
