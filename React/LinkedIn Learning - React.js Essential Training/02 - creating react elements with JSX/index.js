import React from 'react';
import ReactDOM from 'react-dom';

const style = {
    backgroundColor: 'tomato',
    color: 'white',
    fontFamily: 'Comic Sans MS'
}

ReactDOM.render(
    <div style={style}>
        <h1>Hello World</h1>
        <p>How's it goin'..?</p>
    </div>,
    document.getElementById('root')
)