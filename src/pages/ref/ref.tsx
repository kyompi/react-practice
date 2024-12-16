import React, { useRef } from 'react';

export const Ref: React.FC = () => {
  const firstInputRef = useRef<HTMLInputElement>(null);
  const secondInputRef = useRef<HTMLInputElement>(null);
  const thirdButtonRef = useRef<HTMLButtonElement>(null);

  const handleButtonClick = (ref: React.RefObject<HTMLElement>) => {
    console.log({ ref })
    ref.current?.focus();
  };

  return (
    <div>
      <h1>Ref</h1>
      <div>
        <button onClick={() => handleButtonClick(firstInputRef)}>Button 1</button>
        <button onClick={() => handleButtonClick(secondInputRef)}>Button 2</button>
        <button onClick={() => handleButtonClick(thirdButtonRef)}>Button 3</button>
      </div>

      <div id="first">
        <input type="text" ref={firstInputRef} />
        <input type="text" />
        <button>Button 4</button>
      </div>

      <div id="second">
        <input type="text" ref={secondInputRef} />
        <button>Button 4</button>
        <button>Button 5</button>
      </div>

      <div id="third">
        <button ref={thirdButtonRef}>Button 6</button>
        <button>Button 7</button>
        <button>Button 8</button>
      </div>
    </div>
  );
};
