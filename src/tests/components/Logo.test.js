import React from 'react';
import { shallow } from 'enzyme';

import { Logo } from '../../components/Logo';

test('Logo gets rendered properly', () => {
  const wrapper = shallow(<Logo />);
  expect(wrapper).toMatchSnapshot();
});
