import React from 'react';

export default ({ songTitle, artists }) => (
  <div>
    <div>{songTitle}</div>
    <div>{artists}</div>
    <button>Edit</button>
  </div>
);
