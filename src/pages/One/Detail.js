import React, { Component } from 'react';
import { Button } from 'antd';
import './Detail.css'

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loding:false
        }
    }
    render() {
        return (
            <div className="Detail">
                <div>detail</div>
                <Button type="primary">Button</Button>
                <Button type="dashed">Dashed</Button>
                <Button type="primary" icon="search">Search</Button>
                <Button type="primary" loading={this.state.loading} onClick={this.enter.bind(this)}>
                    Loading
                </Button>
            </div>
        )
    }
    enter() {
        this.setState({
            loading:true
        })
    }
}

export default Detail;