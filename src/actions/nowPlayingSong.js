export const setNowPlayingSong = (song) => ({
  type: 'SET_NOW_PLAYING_SONG',
  song,
});

export const resetNowPlayingSong = () => ({
  type: 'RESET_NOW_PLAYING_SONG',
});
