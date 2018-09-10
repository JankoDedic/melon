import {
  setNowPlayingSong,
  resetNowPlayingSong
} from '../../actions/nowPlayingSong';

describe('set now playing song action generator', () => {
  describe('given a song', () => {
    const song = {
      title: 'Example title',
      artists: 'Example artists',
      url: 'Example url'
    };

    it('generates a valid action', () => {
      const action = setNowPlayingSong(song);

      expect(action).toEqual({
        type: 'SET_NOW_PLAYING_SONG',
        song
      });
    });
  });
});

describe('reset now playing song action generator', () => {
  it('generates a valid action', () => {
    const action = resetNowPlayingSong();

    expect(action).toEqual({
      type: 'RESET_NOW_PLAYING_SONG'
    });
  });
});
