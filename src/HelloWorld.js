import React, { Component } from 'react';
import './HelloWorld.css'

class HelloWorld extends Component {
  constructor(props) {
    super(props);
    this.state = { greeting: 'Hello' };
    this.frenchify = this.frenchify.bind(this);
  }

  render() {
    return(
      <div className="HelloWorld">
        <p>{this.state.greeting} {this.props.name}!</p>
        <br/>
        <button onClick={this.frenchify}>Frenchify!</button>
      </div>
    );
  }

  frenchify() {
    this.setState({ greeting: 'Bonjour' });
  }
}

export default HelloWorld;
