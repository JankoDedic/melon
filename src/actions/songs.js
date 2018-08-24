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

export const addSong = (song) => {
  return {
    type: 'ADD_SONG',
    song,
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

export const startEditSong = (id, updates) => {
  return (dispatch) => {
    return database.ref(`users/420/songs/${id}`).update(updates).then(() => {
      dispatch(editSong(id, updates));
    });
  };
};

export const removeSong = (id) => ({
  type: 'REMOVE_SONG',
  id,
});

export const startRemoveSong = (id) => {
  return (dispatch) => {
    return database.ref(`users/420/songs/${id}`).remove().then(() => {
      dispatch(removeSong(id));
    });
  };
};
