import React from "react";
import {connect} from "shasta";
import actions from "../core/actions";
import DataComponent from 'shasta-data-view'

@connect({
  count: 'counter.count',
  greeting: 'api.subsets.greeting'
})
export default class App extends DataComponent {

  resolveData() {
    actions.hello.greet({
      subset: 'greeting'
    })
  }

  renderLoader() {
    return (
      <div>
        Loading...
      </div>
    )
  }

  renderData ({greeting, count}) {
    return <div>
      <h2>Welcome to React</h2>

      <p>{greeting.get('text')}</p>

      <hr/>

      <p>{count}</p>

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

  renderErrors(errors) {
    return (
      <div>
        Error
      </div>
    )
  }
}
