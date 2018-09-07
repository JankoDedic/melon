import React from 'react';
import { shallow } from 'enzyme';

import { Header } from '../../components/Header';

let startLogout, wrapper;

beforeEach(() => {
  startLogout = jest.fn();
  wrapper = shallow(<Header startLogout={startLogout} />);
});

test('Header gets rendered properly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('Header logout button logs the user out', () => {
  wrapper.find('button').simulate('click');
  expect(startLogout).toHaveBeenCalled();
});
