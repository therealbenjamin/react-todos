import React, { Component } from 'react';
import HelloWorld from './HelloWorld';
import AddGreeter from './AddGreeter';


class HelloWorldList extends Component {
  constructor(props) {
    super(props);
    this.state = { greetings: ['Catherine', 'Ben', 'Patrick'] };
    this.addGreeting = this.addGreeting.bind(this);
  }

  addGreeting(newName) {
    this.setState({ greetings: [...this.state.greetings, newName] });
  }

  render() {
    return (
      <div className="HelloWorldList">
        <AddGreeter addGreeting={this.addGreeting} />
        {this.renderGreetings()}
      </div>
    );
  }

  renderGreetings() {
    return this.state.greetings.map(name => (
      <HelloWorld key={name} name={name}/>
    ));
  }
}

export default HelloWorldList;
