import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import HelloWorld from './HelloWorld';

describe(HelloWorld, () => {
  const name = 'Person';
  const mockRemoveGreeting = jest.fn();
  const component = shallow(
    <HelloWorld name={name} removeGreeting={mockRemoveGreeting}/ >
  )

  it('renders and matches our snapshot', () => {
    const component = renderer.create(
      <HelloWorld name="Person"/>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('contains the name we supply', () => {
    expect(component.text()).toContain(name);
  });

  it('frenchifies the greeting when user clicks frenchify', () =>{
    component.find('button.frenchify').simulate('click');
    expect(component.text()).toContain('Bonjour');
  });

  it('calls the removeGreeting function when user clicks remove', () => {
    component.find('button.remove').simulate('click');
    expect(mockRemoveGreeting).toBeCalled();
  });

});
