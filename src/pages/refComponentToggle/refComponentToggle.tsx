import React, { useRef, useState, useEffect } from 'react';
import { FirstComponent } from './component/FirstComponent';
import { SecondComponent } from './component/SecondComponent';
import { ThirdComponent } from './component/ThirdComponent';

/**
 * 未完成
 * @returns 
 */
export const RefComponentToggle: React.FC = () => {
  const refs = {
    firstInputRef: useRef<HTMLInputElement>(null),
    secondInputRef: useRef<HTMLInputElement>(null),
    thirdButtonRef: useRef<HTMLButtonElement>(null),
  };
  const [visibleComponent, setVisibleComponent] = useState<string | null>(null);

  useEffect(() => {
    switch (visibleComponent) {
      case 'first':
        refs.firstInputRef.current?.focus();
        break;
      case 'second':
        refs.secondInputRef.current?.focus();
        break;
      case 'third':
        refs.thirdButtonRef.current?.focus();
        break;
      default:
        break;
    }
  }, [visibleComponent]);

  const handleButtonClick = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.focus();
  };

  return (
    <div>
      <h1>Ref</h1>
      <div>
        <button onClick={() => handleButtonClick(refs.firstInputRef)}>Button 1</button>
        <button onClick={() => handleButtonClick(refs.secondInputRef)}>Button 2</button>
        <button onClick={() => handleButtonClick(refs.thirdButtonRef)}>Button 3</button>
      </div>

      {visibleComponent === 'first' && <FirstComponent inputRef={refs.firstInputRef} />}
      {visibleComponent === 'second' && <SecondComponent inputRef={refs.secondInputRef} />}
      {visibleComponent === 'third' && <ThirdComponent inputRef={refs.thirdButtonRef} />}
    </div>
  );
};
