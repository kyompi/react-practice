import React, { useRef } from 'react';
import { FirstComponent } from './component/FirstComponent';
import { SecondComponent } from './component/SecondComponent';
import { ThirdComponent } from './component/ThirdComponent';

export const RefComponent: React.FC = () => {
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

      <FirstComponent inputRef={firstInputRef} />

      <SecondComponent inputRef={secondInputRef} />

      <ThirdComponent inputRef={thirdButtonRef} />
    </div>
  );
};
