import React, { Component } from 'react'

class Counter extends Component {

    state = {
        count: 0
    };

    render() {

        return (
            <div>
                    <span>{this.state.count}</span>
                    {/* we cal also create a operation */}
                    <span>{ 2 + 2}</span>
                    {/*  we can also pass a value from a function */}
                    <span>{this.formatCount()}</span>
                    <button type="button" className="btn btn-primary">Increment</button>
                  
                      
            </div>
        )
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ?  <h1>Zero</h1> : count;
    }
}

export default Counter;