import React from 'react';
import ReactDOM from 'react-dom';

class Component extends React.Component {
    render(){
        return (
            [
                <h1 key='h1'>Hello World! Just one more Test here</h1>,
                <p key='desc'>Simple description here</p>
            ]
        )
    }
}

ReactDOM.render(
    <Component />,
    document.getElementById('root'),
);