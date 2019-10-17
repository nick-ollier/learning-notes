import React from "react";
import PropTypes from "prop-types";
import { Book } from './Book';
import { Hiring } from './Hiring';
import { NotHiring } from './NotHiring';

class Library extends React.Component{

    static defaultProps = {
        books: [
            {"title": "The Silmarillion", "date": "15 September, 1977", "author": "J.R.R. Tolkien", "pages": 365}
        ]
    }

    state = { 
        open: true,
        freeBookmark: true,
        hiring: true,
        data: [],
        loading: false
    };

    componentDidMount() {
        console.log("Component was mounted");
        this.setState({loading: true})
        fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/2')
            .then(data => data.json())
            .then(data => this.setState({data, loading: false}));
    }

    componentDidUpdate() {
        console.log("Component was updated");
    }

    toggleOpenClosed = () => {
        this.setState(prevState => ({
            open: !prevState.open
        }))
    }

    render() {
        const { books } = this.props;
        return (
            <div>
                {this.state.hiring ? <Hiring /> : <NotHiring />}
                {this.state.loading
                    ? "loading..."
                    : <div>
                        <h3>Library products of the week:</h3>
                        {this.state.data.map(product => {
                            return (
                                <div key={product.id}>
                                    <h4>{product.name}</h4>
                                    <img src={product.image} alt={product.name} height="100" />
                                </div>
                            )
                        })}
                    </div>
                }
                <h1>The Library is {this.state.open ? 'open' : 'closed'}</h1>
                <button onClick={this.toggleOpenClosed}>Open/Close Library</button>
                {books.map((book, index) => (
                    <Book key={index} title={book.title} date={book.date} author={book.author} pages={book.pages} freeBookmark={this.state.freeBookmark} />
                ))}   
            </div>
        )
    }
}

Library.propTypes = {
    books: PropTypes.array
}

export default Library