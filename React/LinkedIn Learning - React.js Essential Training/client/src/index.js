import React from "react";
import { render } from "react-dom";
import Library from './Library';

let bookList = [
    {"title": "The Hobbit", "date": "21 September, 1937", "author": "J.R.R. Tolkien", "pages": 304},
    {"title": "The Fellowship of the Ring", "date": "29 July, 1954", "author": "J.R.R. Tolkien", "pages": 479},
    {"title": "The Two Towers", "date": "11 November, 1954", "author": "J.R.R. Tolkien", "pages": 415},
    {"title": "The Return of the King", "date": "20 October, 1955", "author": "J.R.R. Tolkien", "pages": 347}
];

render(
    <Library books={bookList} />,
    document.getElementById("root")
);
