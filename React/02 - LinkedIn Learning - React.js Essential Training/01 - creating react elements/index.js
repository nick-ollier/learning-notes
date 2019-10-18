import React from 'react';
import ReactDOM from 'react-dom';

const style = {
    backgroundColor: 'tomato',
    color: 'white',
    fontFamily: 'Comic Sans MS'
}

const title = React.createElement(
    'h1',
    {id: 'title', className: 'header', style: style},
    'Hello World'
);

ReactDOM.render(
    title,
    document.getElementById('root')
)