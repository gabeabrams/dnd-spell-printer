/**
 * Shorten the range description of a spell.
 * @author Gabe Abrams
 * @param range - The original range string.
 * @returns A shortened range string.
 */

const shortenRange = (range: string): string => {
  if (!range) {
    return '';
  }
  if (range === 'Self') {
    return 'S';
  }
  return (
    range
      .replace(' ft.', 'ft')
      .replace(' feet', 'ft')
      .replace(' foot', 'ft')
      .replace(' miles', 'mi')
      .replace(' mile', 'mi')
      .replace(' yards', 'yd')
      .replace(' yard', 'yd')
      .replace(' inches', 'in')
      .replace(' inch', 'in')
  );
};

export default shortenRange;
