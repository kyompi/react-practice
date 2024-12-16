import React, { useRef } from 'react';

interface Props {
  inputRef: React.RefObject<HTMLButtonElement>;
}

export const ThirdComponent: React.FC<Props> = ({ inputRef }) => {
  return (
    <div id="third">
      <button ref={inputRef}>Button 6</button>
      <button>Button 7</button>
      <button>Button 8</button>
    </div>
  );
};