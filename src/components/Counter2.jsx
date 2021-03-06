import React, {Component} from 'react'


class Counter2 extends Component{

    state = {
        value: this.props.counter.value
    }

    // constructor() {

    //     super();
    //     console.log('constructor', this)
    //     this.handleIncrement = this.handleIncrement.bind(this)
    // }
    // reminder: if we dont want to always bind an event handler like this, we can convert the function to an arrow function

    getBadgeclasses() {
        let classes = "badge m-2 ";
        classes += (this.state.value === 0 ) ? 'bg-warning text-dark' : 'badge bg-success'
        return classes;
    }

    // handleIncrement() {
    //     console.log('Clicked!', this)
    // }

    handleIncrement = product => {

        // console.log('click', this)
        // this.setState( { count: this.state.count + 1})
        // exp the other way
        this.setState( prevState => {
            return {
                value: prevState.value + 1
            }
        })
        
    }

    // exp part: passing event arguments
    // reminder: when we want to pass an event argument, on the event put an arrow function and put the exact function with the arguments you want to pass
    render() {

// todo started for handling events part
        return(
            <div className='container container-fluid m-3'>
            
            <span className={this.getBadgeclasses() }  > {this.state.value} </span>
            <button
             className="btn btn-primary btn-sm"
             onClick={ () => this.handleIncrement( { id: 1})}
            >Increment
            </button>

            <button className="btn btn-danger btn-sm m-2"
            onClick={ () =>this.props.onDelete(this.props.counter.id) }
            >
                Delete</button>

            </div>
        )
    }
}

export default Counter2