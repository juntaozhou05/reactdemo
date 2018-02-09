import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'//导入的方式跟之前有点变化
import One from '../pages/One/'
import Hello from '../pages/Hello/'
import List from '../pages/List/'

class RouterList extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (<Router>
      <div>
        <Link to="/">首页</Link>
        <br />
        <Link to="/hello">第二页</Link>
        <br />
        <Link to="/List">一个列表</Link>
        <br />
        <Route exact path="/" component={One} />
        <Route path="/hello" component={Hello} />
        <Route path="/List" component={List} />
      </div>
    </Router>)
  }
}

export default RouterList
