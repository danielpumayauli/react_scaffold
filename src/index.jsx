import React, { Component } from 'react';
import { render } from 'react-dom';

class Prueba extends Component {
    render() {
        return(
            <h1>Hola mundo</h1>
        )
    }
}

render(
    <Prueba/>, document.getElementById('app')
);

//ReactDOM.render(<Prueba />, document.getElementById('app'));
