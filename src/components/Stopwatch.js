import React, { Component } from "react";
import "../App.css";

class Stopwatch extends Component {
  state = 
  {
    timerActive: false,
    timerStartTime: 0,
    currentTimerTime: 0
  };

  startTimer = () => {
    this.setState({
      timerActive: true,
      currentTimerTime: this.state.currentTimerTime,
      timerStartTime: Date.now() - this.state.currentTimerTime
    });
    this.timer = setInterval(() => {
      this.setState({
        currentTimerTime: Date.now() - this.state.timerStartTime
      });
    }, 10);
  };

  stopTimer = () => {
    this.setState({ timerActive: false });
    clearInterval(this.timer);
  };

  resetTimer = () => {
    this.setState({
      timerStartTime: 0,
      currentTimerTime: 0
    });
  };

  render() {
    const { currentTimerTime } = this.state;
    let centiseconds = ("0" + (Math.floor(currentTimerTime / 10) % 100)).slice(-2);
    let seconds = ("0" + (Math.floor(currentTimerTime / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(currentTimerTime / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor(currentTimerTime / 3600000)).slice(-2);
    return (
      <div className="Stopwatch">
        <div className="Stopwatch-header">Stopwatch</div>
        <div className="Stopwatch-display">
          {hours} : {minutes} : {seconds} : {centiseconds}
        </div>
        {this.state.timerActive === false && this.state.currentTimerTime === 0 && (
          <button onClick={this.startTimer}>Start</button>
        )}
        {this.state.timerActive === true && (
          <button onClick={this.stopTimer}>Stop</button>
        )}
        {this.state.timerActive === false && this.state.currentTimerTime > 0 && (
          <button onClick={this.startTimer}>Resume</button>
        )}
        {this.state.timerActive === false && this.state.currentTimerTime > 0 && (
          <button onClick={this.resetTimer}>Reset</button>
        )}
      </div>
    );
  }
}

export default Stopwatch;
