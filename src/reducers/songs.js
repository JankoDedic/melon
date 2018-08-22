const defaultSongs = [
  { title: 'This Is What You Came For', artists: 'Calvin Harris, Rihanna' },
  { title: 'Your Way', artists: 'Frank Sinatra' }
];

export default (songs = defaultSongs, action) => {
  switch (action.type) {
    case 'ADD_SONG':
      return [ ...songs, action.song ];
    default:
      return songs;
  }
};

