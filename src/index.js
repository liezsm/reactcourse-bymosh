import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'

import Counter from './components/Counter'
import Counter2 from './components/Counter2'

function App(){

    return (
        <React.Fragment>
           
            <Counter2 />
        </React.Fragment>
    )
}

ReactDOM.render( <App />, document.getElementById('root'))