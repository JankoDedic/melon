const defaultSongs = [
  { id: 0, title: 'This Is What You Came For', artists: 'Calvin Harris, Rihanna' },
  { id: 1, title: 'Your Way', artists: 'Frank Sinatra' }
];

export default (songs = defaultSongs, action) => {
  switch (action.type) {
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

