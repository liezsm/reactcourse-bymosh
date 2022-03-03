import React, {Component} from 'react'


class Counter2 extends Component{

    state = {
        count: 2
    }

    // constructor() {

    //     super();
    //     console.log('constructor', this)
    //     this.handleIncrement = this.handleIncrement.bind(this)
    // }
    // reminder: if we dont want to always bind an event handler like this, we can convert the function to an arrow function

    getBadgeclasses() {
        let classes = "badge m-2 ";
        classes += (this.state.count === 0 ) ? 'bg-warning text-dark' : 'badge bg-success'
        return classes;
    }

    // handleIncrement() {
    //     console.log('Clicked!', this)
    // }

    handleIncrement = () => {

        // console.log('click', this)
        // this.setState( { count: this.state.count + 1})
        // exp the other way
        this.setState( prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }
    render() {
       
// todo started for handling events part
        return(
            <div className='container container-fluid m-3'>
            
            <span className={this.getBadgeclasses() }  > {this.state.count} </span>
            <button
             className="btn btn-primary btn-sm"
             onClick={this.handleIncrement}
            >Increment</button>

            </div>
        )
    }
}

export default Counter2