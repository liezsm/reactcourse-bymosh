import React, { Component } from 'react'

class Counter extends Component {

    state = {
        count: 0,
        imgUrl: 'https://picsum.photos/200',
        // tags: ['tag1', 'tag2', 'tag3']
        tags: []
    };
    
  styles = {
     fontSize: 10
 };

 renderTags() {
            if(this.state.tags.length === 0) { return  <p> No data</p>}
            return <ul> { this.state.tags.map( tag => <li key={tag}>  tag </li> ) }</ul>
        }

    render() {

        return (
            <div className='container-fluid'>
                        {/* setting attrbutes */}
                    {/* <img src={this.state.imgUrl} alt="" /> */}

                    {/* setting style */}
                    {/* rendering class dynamically */}
                    <span className= {this.getBadgeClasses()} >{this.state.count}</span>
                    {/* we cal also create a operation */}
                    <span className='badge bg-danger m-2'
                    // style={this.styles}
                    >{ 2 + 2}</span>
                    {/*  we can also pass a value from a function */}
                    <span>{this.formatCount()}</span>
                    <button type="button" className="btn btn-primary btn-sm">Increment</button>

                    {/* rendering list lesson */}
                    {/* //todo my own way of conditional rendering */}
                    {/* { this.state.tags.length > 0 &&
                    <ul>
                        {this.state.tags.map( i =>  <li key={ i }>{ i }</li>)}
                    </ul>
                     } */}

                     {/* //todo tutorial  */}
                     {this.renderTags()}
                     {/* //Reminder when rendereing lists, we SHOULD put a key prop because react needs to uniquely identify each items so that react will easily identify what element will be change when state is updated to be used in virtual dom */}
                  
                      
            </div>
        )
    }

    getBadgeClasses() {
            
        let classes = 'badge m-2';
        classes += (this.state.count === 0)  ?  'badge bg-warning': 'badge bg-primary';
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ?  <h1>Zero</h1> : count;
    }
}

export default Counter;