import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

ColorBox.propTypes = {};

function ColorBox(props) {
  const [color, setColor] = useState('white');
  return (
    <div>
      {color}

      <button onClick={() => setColor('red')}>Change to red</button>
      <button onClick={() => setColor('blue')}>Change to blue</button>
    </div>
  );
}

export default ColorBox;
