import React from "react";
import { render } from "react-dom";

let bookList = [
    // {"title": "The Hobbit", "date": "21 September, 1937", "author": "J.R.R. Tolkien", "pages": 304},
    { date: "21 September, 1937", pages: 304 },
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

const Book = ({
    title = "No Title",
    date = "No Date",
    author = "No Author",
    pages = 0,
    freeBookmark
}) => {
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

const Hiring = () => (
    <div>
        <p>Now Hiring!</p>
        <a href="http://thelibrary.com/jobs">thelibrary.com/jobs</a>
    </div>
);

const NotHiring = () => (
    <div>
        <p>We're not hiring, sorry!!</p>
    </div>
);

class Library extends React.Component {
    static defaultProps = {
        books: [
            {
                title: "The Silmarillion",
                date: "15 September, 1977",
                author: "J.R.R. Tolkien",
                pages: 365
            }
        ]
    };

    state = {
        open: true,
        freeBookmark: true,
        hiring: true,
        data: [],
        loading: false
    };

    componentDidMount() {
        this.setState({ loading: true });
        fetch("https://hplussport.com/api/products/order/price/sort/asc/qty/2")
            .then(data => data.json())
            .then(data => this.setState({ data, loading: false }));
    }

    componentDidUpdate() {
        console.log("Component was updated");
    }

    toggleOpenClosed = () => {
        this.setState(prevState => ({
            open: !prevState.open
        }));
    };

    render() {
        const { books } = this.props;
        return (
            <div>
                {this.state.hiring ? <Hiring /> : <NotHiring />}
                {this.state.loading ? (
                    "loading..."
                ) : (
                    <div>
                        <h3>Library products of the week:</h3>
                        {this.state.data.map(product => {
                            return (
                                <div key={product.id}>
                                    <h4>{product.name}</h4>
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        height="100"
                                    />
                                </div>
                            );
                        })}
                    </div>
                )}
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

render(
    // <Library />,
    <Library books={bookList} />,
    document.getElementById("root")
);
