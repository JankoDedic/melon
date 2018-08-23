import React from 'react';

export default () => (
  <div>
    <div className="add-song__header">
      Add Song
    </div>
    <form className="add-song__form">
      <input
        type="text"
        placeholder="Title"
        autoFocus
      />
      <input
        type="text"
        placeholder="Artists"
      />
      <input
        type="text"
        placeholder="URL (YouTube, Soundcloud...)"
      />
      <button className="primary-button">Save Song</button>
    </form>
  </div>
);
