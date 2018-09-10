import nowPlayingSongReducer from '../../reducers/nowPlayingSong';
import {
  setNowPlayingSong,
  resetNowPlayingSong
} from '../../actions/nowPlayingSong';

describe('given an empty state and set now playing song action', () => {
  const state = {};
  const song = {
    title: 'Example song title',
    artists: 'Example artists',
    url: 'plain url'
  };
  const action = setNowPlayingSong(song);

  it('sets the now playing song', () => {
    const newState = nowPlayingSongReducer(state, action);

    expect(newState).toEqual(song);
  });
});

describe('given some state and reset now playing song action', () => {
  const state = {};
  const action = resetNowPlayingSong();

  it('resets the now playing song', () => {
    const newState = nowPlayingSongReducer(state, action);

    expect(newState).toEqual({ url: '' });
  });
});
