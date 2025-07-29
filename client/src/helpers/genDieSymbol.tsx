import React from 'react';

// Import images
import d4 from './diceImages/d4.svg';
import d6 from './diceImages/d6.svg';
import d8 from './diceImages/d8.svg';
import d10 from './diceImages/d10.svg';
import d12 from './diceImages/d12.svg';
import d20 from './diceImages/d20.svg';

/**
 * Generate a symbol for a die
 * @author Gabe Abrams
 * @param die The die to generate a symbol for (i.e. 4, 6, 8, 10, 12, 20)
 * @param textBefore The text to display before the die symbol
 * @returns The generated die symbol as a React node
 */
const genDieSymbol = (die: number, textBefore: string): React.ReactNode => {
  // Get the image of the die
  let dieImage: string;
  switch (die) {
    case 4:
      dieImage = d4;
      break;
    case 6:
      dieImage = d6;
      break;
    case 8:
      dieImage = d8;
      break;
    case 10:
      dieImage = d10;
      break;
    case 12:
      dieImage = d12;
      break;
    case 20:
      dieImage = d20;
      break;
    default:
      throw new Error(`Invalid die: ${die}`);
  }

  // Return the die symbol
  return (
    <>
      {textBefore}
      <img
        src={dieImage}
        alt={`d${die}`}
        style={{
          width: '1.2em',
          height: '1.2em',
          verticalAlign: 'bottom',
        }}
      />
    </>
  );
}

// Export the function
export default genDieSymbol;
