import React, { Component } from 'react';

class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {value} = this.props 
        return ( 
            <div className="test">
                <div>{value}</div>
            </div>
         )
    }
}
 
export default Test;