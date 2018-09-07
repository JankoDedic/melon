import React from 'react';
import { shallow } from 'enzyme';

import { AddSongPage } from '../../components/AddSongPage';
import songs from '../fixtures/songs';

let startAddSong, history, wrapper;

beforeEach(() => {
  startAddSong = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<AddSongPage startAddSong={startAddSong} history={history} />);
});

test('AddSongPage is rendered properly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('AddSongPage handles form submission', () => {
  wrapper.find('SongForm').prop('onSubmit')(songs[1]);
  expect(startAddSong).toHaveBeenLastCalledWith(songs[1]);
  expect(history.push).toHaveBeenLastCalledWith('/dashboard');
});
