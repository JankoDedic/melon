import {
  setNowPlayingSong,
  resetNowPlayingSong
} from '../../actions/nowPlayingSong';

test('action for setting nowPlayingSong gets generated', () => {
  const song = {
    title: 'Example title',
    artists: 'Example artists',
    url: 'Example url'
  };
  const action = setNowPlayingSong(song);
  expect(action).toEqual({
    type: 'SET_NOW_PLAYING_SONG',
    song
  });
});

test('action for resetting the nowPlayingSong gets generated', () => {
  const action = resetNowPlayingSong();
  expect(action).toEqual({
    type: 'RESET_NOW_PLAYING_SONG'
  })
});
