import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'

import Counter from './components/Counter'

function App(){

    return (
        <div>
            Hello world!

            <Counter />
        </div>
    )
}

ReactDOM.render( <App />, document.getElementById('root'))