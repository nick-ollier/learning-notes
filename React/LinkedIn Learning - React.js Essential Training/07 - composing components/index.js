import React from "react";
import { render } from "react-dom";

const Book = ({title, date, author, pages}) => {
    return (
        <section>
            <h2>{title}</h2>
            <p>released: {date}</p>
            <p>by: {author}</p>
            <p>pages: {pages}</p>
        </section>
    )
}

const Library = () => {
    return (
        <div>
            <Book title="The Hobbit" date="21 September, 1937" author="J.R.R. Tolkien" pages={304} />
            <Book title="The Fellowship of the Ring" date="29 July, 1954" author="J.R.R. Tolkien" pages={479} />
            <Book title="The Two Towers" date="11 November, 1954" author="J.R.R. Tolkien" pages={415} />
            <Book title="The Return of the King" date="20 October, 1955" author="J.R.R. Tolkien" pages={347} />
        </div>
    )
}

render(
    <Library />,
    document.getElementById("root")
);
