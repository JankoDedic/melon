import React from 'react';
import { shallow } from 'enzyme';

import { EditSongPage } from '../../components/EditSongPage';
import songs from '../fixtures/songs';

let history, song, startEditSong, startRemoveSong, wrapper;

beforeEach(() => {
  history = { push: jest.fn() };
  song = songs[0];
  startEditSong = jest.fn();
  startRemoveSong = jest.fn();
  wrapper = shallow(
    <EditSongPage
      history={history}
      song={song}
      startEditSong={startEditSong}
      startRemoveSong={startRemoveSong}
    />
  );
});

test('EditSongPage is rendered properly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('EditSongPage handles form submission', () => {
  wrapper.find('SongForm').prop('onSubmit')(song);
  expect(startEditSong).toHaveBeenLastCalledWith(song.id, song);
  expect(history.push).toHaveBeenLastCalledWith('/dashboard');
});

test('EditSongPage handles song removal', () => {
  wrapper.find('SongForm').prop('onRemove')(song.id);
  expect(startRemoveSong).toHaveBeenLastCalledWith(song.id);
  expect(history.push).toHaveBeenLastCalledWith('/dashboard');
});
