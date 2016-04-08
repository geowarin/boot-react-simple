import React from "react";

export default class App extends React.Component {

  componentDidMount () {
    fetch('http://localhost:8080/api/hello').then(r => console.log(r.body));
  }

  render () {
    return <div>
      <h2>Welcome to React</h2>
    </div>
  }
}
