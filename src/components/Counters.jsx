import React, { Component } from 'react';

import Counter2 from './Counter2';

class Counters extends Component {

    state = {
        counters : [
            { id: 1, value:3},
            { id: 2, value:6},
            { id: 3, value:9},
            { id: 4, value:0}
        ]
    }

    render() {

        return (
            <div className="counters-container d-flex flex-column justify-content-center align-items-center text-center mt-5
            ">
               {/* <Counter2 />
               <Counter2 />
               <Counter2 /> */}
               { this.state.counters.map( c => 
               <Counter2  key={c.id} 
               value={c.value} selected ={true} test='test'
               />)}
            </div>
        )

    }
}

export default Counters;