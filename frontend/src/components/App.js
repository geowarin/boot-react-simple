import React from "react";
import { Component, PropTypes, connect } from 'shasta';
import actions from '../core/actions';

@connect({
  count: 'counter.count'
})
export default class App extends Component {

  componentDidMount () {
  //   fetch('http://localhost:8080/api/hello')
  //     .then(r => r.text())
  //     .then(text => this.setState({text}));
  }

  render () {
    return <div>
      <h2>Welcome to React</h2>

      <p>{this.props.count}</p>

      <button onClick={() => actions.counter.increment()}>
        Increment
      </button>
      <button onClick={() => actions.counter.decrement()}>
        Decrement
      </button>
      <button onClick={() => actions.counter.reset()}>
        Reset
      </button>
    </div>
  }
}
