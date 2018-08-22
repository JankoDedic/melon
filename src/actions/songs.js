import uuid from 'uuid';

export const addSong = (song) => {
  const { title = '', artists = '' } = song;
  return {
    type: 'ADD_SONG',
    song: { id: uuid.v4(), title, artists },
  };
};

export const editSong = (id, updates) => ({
  type: 'EDIT_SONG',
  id,
  updates,
});
