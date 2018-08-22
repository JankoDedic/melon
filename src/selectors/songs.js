export default (songs, filters) => {
  return songs.filter((song) => {
    const doesTitleMatch = song.title.toLowerCase().includes(filters.text.toLowerCase());
    const doArtistsMatch = song.artists.toLowerCase().includes(filters.text.toLowerCase());
    return doesTitleMatch || doArtistsMatch;
  });
};
