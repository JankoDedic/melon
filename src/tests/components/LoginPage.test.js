import React from 'react';
import { shallow } from 'enzyme';

import { LoginPage } from '../../components/LoginPage';

let startLogin, startAnonymousLogin, wrapper;

beforeEach(() => {
  startLogin = jest.fn();
  startAnonymousLogin = jest.fn();
  wrapper = shallow(
    <LoginPage
      startLogin={startLogin}
      startAnonymousLogin={startAnonymousLogin}
    />
  );
});

test('LoginPage gets rendered properly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('LoginPage Google sign in button starts the login process', () => {
  wrapper.find('button').at(0).simulate('click');
  expect(startLogin).toHaveBeenCalled();
});

test('LoginPage anonymous sign in button performs the login process', () => {
  wrapper.find('button').at(1).simulate('click');
  expect(startAnonymousLogin).toHaveBeenCalled();
});
