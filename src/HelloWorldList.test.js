import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import HelloWorldList from './HelloWorldList';
import HelloWorld from './HelloWorld'
import AddGreeter from './AddGreeter'

describe(HelloWorldList, () => {
  const component = shallow(
    <HelloWorldList/>
  );

  it('renders a matching snapshot', () => {
    const component = renderer.create(
      <HelloWorldList/>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('contains AddGreeter subcomponent', () => {
    expect(component.find(AddGreeter)).toHaveLength(1);
  });

  it('contains the same number of HelloWorld components as greetings', () => {
    const helloWorlds = component.find(HelloWorld).length;
    const greetings = component.state('greetings').length;
    expect(helloWorlds).toEqual(greetings);
  });

  it('adds another greeting when add greeting function is called', () => {
    const before = component.find(HelloWorld).length;
    component.instance().addGreeting('Sample');
    const after = component.find(HelloWorld).length;
    expect(after).toBeGreaterThan(before);
  });

  it('removes a greeting from the list', () => {
    const before = component.find(HelloWorld).length;
    const getRidOfMe = component.state('greetings')[0];
    component.instance().removeGreeting(getRidOfMe);
    const after = component.find(HelloWorld).length;
    expect(after).toBeLessThan(before);
  });
});
