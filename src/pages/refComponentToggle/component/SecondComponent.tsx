import React, { useRef } from 'react';

interface Props {
  inputRef: React.RefObject<HTMLInputElement>;
}

export const SecondComponent: React.FC<Props> = ({ inputRef }) => {
  return (
    <div id="second">
      <input type="text" ref={inputRef} />
      <button>Button 4</button>
      <button>Button 5</button>
    </div>
  );
};