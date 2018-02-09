import React, { Component } from 'react'

class Lists extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <div>{this.props.match.params.id}</div>
            </div>
         )
    }
}
 
export default Lists;

