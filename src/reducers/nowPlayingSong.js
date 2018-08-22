export default (nowPlayingSong, action) => {
  switch (action.type) {
    case 'SET_NOW_PLAYING_SONG':
      return action.song;
    default:
      return {
        title: '',
        artists: '',
        url: '',
      };
  }
};
