import React from 'react';
import { shallow } from 'enzyme';

import { SongList } from '../../components/SongList';
import songs from '../fixtures/songs';

test('SongList snapshot', () => {
  const wrapper = shallow(<SongList songs={songs} />);
  expect(wrapper).toMatchSnapshot();
});
