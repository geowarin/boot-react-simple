import React from "react";

export default class App extends React.Component {

  constructor (props, context) {
    super(props, context);
    this.state = {};
  }

  componentDidMount () {
    fetch('http://localhost:8080/api/hello')
      .then(r => r.text())
      .then(text => this.setState({text}));
  }

  render () {
    return <div>
      <h2>Welcome to React</h2>

      <p>{this.state.text}</p>
    </div>
  }
}
