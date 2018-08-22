import uuid from 'uuid';

export const addSong = (song) => {
  const { title = '', artists = '' } = song;
  return {
    type: 'ADD_SONG',
    song: { id: uuid.v4(), title, artists },
  };
};
