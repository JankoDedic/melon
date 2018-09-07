import React from 'react';
import { shallow } from 'enzyme';

import { SongDashboardPage } from '../../components/SongDashboardPage';

let setTextFilter, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  wrapper = shallow(<SongDashboardPage setTextFilter={setTextFilter} />);
});

test('SongDashboardPage gets rendered properly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('the text filter gets set on input text change', () => {
  const e = { target: { value: 'example text' }};
  wrapper.find('input').simulate('change', e);
  expect(setTextFilter).toHaveBeenLastCalledWith(e.target.value);
});
