import React from "react";
import "./CounterClassComponent.css";

class CounterCLassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  handleCount = () => {
    this.setState((prev) => ({
      count: prev.count + 1,
    }));
  };

  render() {
    return (
      <div>
        <h1>Hello, {this.props.name || "World"}</h1>
        <h3>Count: {this.state.count}</h3>
        <button onClick={this.handleCount}>Increment</button>
      </div>
    );
  }
}

export default CounterCLassComponent;
