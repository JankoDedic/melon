import React from 'react';

export const Logo = ({ className }) => {
  let imageClassNames;
  if (className) {
    imageClassNames = className.split(' ').map(name => name + '__image').join(' ');
  }
  return (
    <div className={className}>
      <div className={imageClassNames}></div>
      melon
    </div>
  );
};

export default Logo;
