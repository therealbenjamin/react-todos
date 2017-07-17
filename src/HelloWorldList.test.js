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


});
