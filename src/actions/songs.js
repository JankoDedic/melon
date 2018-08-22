import uuid from 'uuid';

export const addSong = (song = {
  title: '',
  artists: '',
  url: '',
}) => {
  return {
    type: 'ADD_SONG',
    song: { id: uuid.v4(), ...song },
  };
};

export const editSong = (id, updates) => ({
  type: 'EDIT_SONG',
  id,
  updates,
});

export const removeSong = (id) => ({
  type: 'REMOVE_SONG',
  id,
});
