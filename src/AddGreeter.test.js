import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import AddGreeter from './AddGreeter'

describe(AddGreeter, () => {
  const mockAddGreeting = jest.fn();
  const component = shallow(
    <AddGreeter addGreeting={mockAddGreeting}/>
  );

  it('renders and matches snapshot', () => {
    const component = renderer.create(
      <AddGreeter />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
