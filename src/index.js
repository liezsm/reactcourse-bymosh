import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'

import Counters from './components/Counters'

function App(){

    return (
        <React.Fragment>
           
            <Counters />
        </React.Fragment>
    )
}

ReactDOM.render( <App />, document.getElementById('root'))