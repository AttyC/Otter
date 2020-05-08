import React from 'react';
import { shallow } from 'enzyme';
import Header from '../components/Header';

it('renders title', () => {
  const wrapper = shallow(<Header />);
  const title = <h1>Otter</h1>;
  expect(wrapper.contains(title)).toEqual(true);
});