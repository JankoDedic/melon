import nowPlayingSongReducer from '../../reducers/nowPlayingSong';
import {
  setNowPlayingSong,
  resetNowPlayingSong
} from '../../actions/nowPlayingSong';

const song = {
  title: 'Example song title',
  artists: 'Example artists',
  url: 'plain url'
};

test('now playing song gets set in the next state', () => {
  const state = {};
  const action = setNowPlayingSong(song);
  expect(nowPlayingSongReducer(state, action)).toEqual(song);
});

test('now playing song gets reset in the next state', () => {
  const state = {};
  const action = resetNowPlayingSong();
  expect(nowPlayingSongReducer(state, action)).toEqual({
    url: ''
  });
});
