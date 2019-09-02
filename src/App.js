import React, { Component } from 'react';
import engine from './demoEngine';

class App extends Component {
  constructor() {
    super();

    this.state = {
      timer: null,
      time: .5,
      step: engine.get()
    }

    this.tick = this.tick.bind(this)
  }

  tick() {
    this.setState({ step: engine.get() });
  }

  componentDidMount() {
    this.setState({
      timer: setInterval(this.tick, this.state.time * 1000)
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
  }

  render() {
    return (
      <div>
        <div>APP</div>
        <div>{this.state.step}</div>
      </div>
    );
  }
};



export default App;
