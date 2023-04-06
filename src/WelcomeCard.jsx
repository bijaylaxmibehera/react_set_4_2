import { useState } from "react";

export function Welcome() {
  const [fontSize, setFontSize] = useState(18);

  function increaseFontSize() {
    setFontSize((fontSize) => fontSize + 1);
  }
  function decreaseFontSize() {
    setFontSize((fontSize) => fontSize - 1);
  }

  return (
    <>
      <h1 style={{ fontSize: `${fontSize}px` }}>Welcome</h1>
      <button onClick={increaseFontSize}>+</button>
      <button onClick={decreaseFontSize}>-</button>
    </>
  );
}
