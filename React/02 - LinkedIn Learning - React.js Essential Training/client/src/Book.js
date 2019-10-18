import React from "react";
import PropTypes from "prop-types";

export const Book = ({title="No Title", date="No Date", author="No Author", pages=0, freeBookmark}) => {
    return (
        <section>
            <h2>{title}</h2>
            <p>released: {date}</p>
            <p>by: {author}</p>
            <p>pages: {pages}</p>
            <p>Free bookmark: {freeBookmark ? "Yes!" : "No :("}</p>
        </section>
    )
}

Book.propTypes = {
    title: PropTypes.string,
    date: PropTypes.string,
    author: PropTypes.string,
    pages: PropTypes.number,
    freeBookmark: PropTypes.bool
}