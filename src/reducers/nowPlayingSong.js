export default (nowPlayingSong = {}, action) => {
  switch (action.type) {
    case 'SET_NOW_PLAYING_SONG':
      return action.song;
    case 'RESET_NOW_PLAYING_SONG':
      return {
        url: '',
      };
    default:
      return nowPlayingSong;
  }
};
