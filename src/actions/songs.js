import database from '../firebase/firebase';

export const setSongs = (songs) => ({
  type: 'SET_SONGS',
  songs,
});

const defaultSongs = [{
  id: '1',
  title: 'Uptown Funk',
  artists: 'Mark Ronson, Bruno Mars',
  url: 'https://www.youtube.com/watch?v=OPf0YbXqDm0',
}, {
  id: '2',
  title: "Stayin' Alive",
  artists: 'Bee Gees',
  url: 'https://www.youtube.com/watch?v=I_izvAbhExY',
}, {
  id: '3',
  title: 'Slide',
  artists: 'Calvin Harris, Frank Ocean, Migos',
  url: 'https://www.youtube.com/watch?v=8Ee4QjCEHHc',
}];

export const startSetSongs = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/songs`).once('value').then((snapshot) => {
      const songs = [];
      snapshot.forEach((childSnapshot) => {
        songs.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });
      if (songs.length === 0) {
        return dispatch(setSongs(defaultSongs));
      } else {
        return dispatch(setSongs(songs));
      }
    });
  };
};

export const clearSongs = () => ({
  type: 'CLEAR_SONGS',
});

export const addSong = (song) => {
  return {
    type: 'ADD_SONG',
    song,
  };
};

export const startAddSong = (song = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/songs`).push(song).then((ref) => {
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
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/songs/${id}`).update(updates).then(() => {
      dispatch(editSong(id, updates));
    });
  };
};

export const removeSong = (id) => ({
  type: 'REMOVE_SONG',
  id,
});

export const startRemoveSong = (id) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/songs/${id}`).remove().then(() => {
      dispatch(removeSong(id));
    });
  };
};
