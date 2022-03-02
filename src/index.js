import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'

import Counter from './components/Counter'

function App(){

    return (
        <React.Fragment>
            Hello world!

            <Counter />
        </React.Fragment>
    )
}

ReactDOM.render( <App />, document.getElementById('root'))