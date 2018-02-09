import React, { Component } from 'react';
import Detail from './Detail'

class One extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <div>one</div>
                <Detail />
            </div>
         )
    }
}
 
export default One;