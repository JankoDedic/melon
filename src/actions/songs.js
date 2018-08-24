import uuid from 'uuid';

import database from '../firebase/firebase';

export const setSongs = (songs) => ({
  type: 'SET_SONGS',
  songs,
});

export const startSetSongs = () => {
  return (dispatch) => {
    return database.ref('users/420/songs').once('value').then((snapshot) => {
      const songs = [];
      snapshot.forEach((childSnapshot) => {
        songs.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });
      dispatch(setSongs(songs));
    });
  };
};

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

export const startAddSong = (song = {}) => {
  return (dispatch) => {
    return database.ref('users/420/songs').push(song).then((ref) => {
      dispatch(addSong({ id: ref.key, ...song }));
    });
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
