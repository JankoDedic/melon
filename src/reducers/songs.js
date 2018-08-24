export default (songs = [], action) => {
  switch (action.type) {
    case 'SET_SONGS':
      return action.songs;
    case 'ADD_SONG':
      return [ ...songs, action.song ];
    case 'EDIT_SONG':
      return songs.map((song) => {
        if (song.id === action.id) {
          return {
            ...song,
            ...action.updates,
          };
        } else {
          return song;
        }
      });
    case 'REMOVE_SONG':
      return songs.filter((song) => song.id !== action.id);
    default:
      return songs;
  }
};

