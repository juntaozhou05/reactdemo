import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import Lists from './Lists'

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Link to="/">跳转回主页</Link>
                <br/>
                <Link to={`/List/Lists/这是路由参数`}>跳转</Link>
                <Route path={`/List/Lists/:id`} component={Lists}></Route>
            </div>
        )
    }
}

export default List