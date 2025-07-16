/**
 * Shorten the range description of a spell.
 * @author Gabe Abrams
 * @param range - The original range string.
 * @returns A shortened range string.
 */

const shortenRange = (range: string): string => {
  if (range === 'Self') {
    return '';
  }
  return (
    range
      .replace(' ft.', 'ft')
  );
};

export default shortenRange;
