// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {isTimerRunning: false, timeElaspedSeconds: 0}

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  onClickStopButton = () => {
    clearInterval(this.timerId)
    this.setState({isTimerRunning: false})
  }

  onClickResetButton = () => {
    clearInterval(this.timerId)
    this.setState({isTimerRunning: false, timeElaspedSeconds: 0})
  }

  startTimer = () => {
    this.setState(prevState => ({
      timeElaspedSeconds: prevState.timeElaspedSeconds + 1,
    }))
  }

  onClickStartButton = () => {
    this.timerId = setInterval(this.startTimer, 1000)
    this.setState({isTimerRunning: true})
  }

  getDigitalTimer = timeElaspedSeconds => {
    const minitues = Math.floor(timeElaspedSeconds / 60)
    const seconds = Math.floor(timeElaspedSeconds % 60)
    const stringfiedMinutes = minitues < 10 ? `0${minitues}` : minitues
    const stringfiedSeconds = seconds < 10 ? `0${seconds}` : seconds

    return `${stringfiedMinutes}:${stringfiedSeconds}`
  }

  render() {
    const {isTimerRunning, timeElaspedSeconds} = this.state
    const digitalTimer = this.getDigitalTimer(timeElaspedSeconds)

    return (
      <div className="app-container">
        <div className="content-container">
          <h1 className="heading">Stopwatch</h1>
          <div className="stopwatch-set-up">
            <div className="stopwatch-img-heading">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="img-icon"
              />
              <h1 className="stopwatch-heading">Timer</h1>
            </div>
            <h1 className="timer">{digitalTimer}</h1>
            <div className="buttons-container">
              <button
                className="start-btn"
                type="button"
                onClick={this.onClickStartButton}
                disabled={isTimerRunning}
              >
                Start
              </button>
              <button
                className="stop-btn"
                type="button"
                onClick={this.onClickStopButton}
              
              >
                Stop
              </button>
              <button
                className="reset-btn"
                type="button"
                onClick={this.onClickResetButton}
                
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
