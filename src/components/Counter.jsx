import React, { Component } from 'react'

class Counter extends Component {

    state = {
        count: 0,
        imgUrl: 'https://picsum.photos/200'
    };
  styles = {
     fontSize: 10
 };
    render() {

        return (
            <div className='container-fluid'>
                        {/* setting attrbutes */}
                    {/* <img src={this.state.imgUrl} alt="" /> */}

                    {/* setting style */}
                    <span>{this.state.count}</span>
                    {/* we cal also create a operation */}
                    <span className='badge bg-danger m-2'
                    // style={this.styles}
                    >{ 2 + 2}</span>
                    {/*  we can also pass a value from a function */}
                    <span>{this.formatCount()}</span>
                    <button type="button" className="btn btn-primary btn-sm">Increment</button>
                  
                      
            </div>
        )
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ?  <h1>Zero</h1> : count;
    }
}

export default Counter;