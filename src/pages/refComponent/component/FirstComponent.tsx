import React, { useRef } from 'react';

interface Props {
  inputRef: React.RefObject<HTMLInputElement>;
}

export const FirstComponent: React.FC<Props> = ({ inputRef }) => {
  return (
    <div id="first">
      <input type="text" ref={inputRef} />
      <input type="text" />
      <button>Button 4</button>
    </div>
  );
};