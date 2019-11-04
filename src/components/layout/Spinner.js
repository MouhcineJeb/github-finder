import React, { Fragment } from 'react';
import spinner from './spinner_gif.gif';

const Spinner = () => {
  return (
    <Fragment>
      <img
        src={spinner}
        alt='Loading...'
        style={{ width: '100px', margin: 'auto', display: 'block' }}
      />
    </Fragment>
  );
};

export default Spinner;
