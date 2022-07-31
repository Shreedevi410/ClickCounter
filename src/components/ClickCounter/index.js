// Write your code here
import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrementCount = () => {
    this.setState(PrevState => ({count: PrevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="counter-container">
        <h1 className="heading">
          The Button Has Been Clicked <br />
          <span className="counter">{count}</span> times.
        </h1>
        <p className="para">click the button to increase the count!</p>
        <div>
          <button
            type="button"
            className="button-container"
            onClick={this.onIncrementCount}
          >
            click me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
