/**
 * Shorten casting time for spells in the DnD Spell Printer application.
 * This function takes a casting time string and returns a shortened version.
 * @author Gabe Abrams
 * @param castingTime - The original casting time string.
 * @returns A shortened casting time string.
 */
const shortenCastingTime = (castingTime?: string): string | undefined => {
  // If casting time is empty, return an empty string
  if (!castingTime) {
    return undefined;
  }

  // Split the casting time by spaces to handle different formats
  const words = (
    castingTime
      .replace('Bonus Action', 'Bonus')
      .split(',')[0] // Take only the first part before any commas
      .split(' ')
  );

  // Shorten each word
  const shortenedWords = words.map((word) => {
    // Handle common casting time formats
    if (word === 'minute' || word === 'minutes') {
      return 'm';
    } else if (word === 'hour' || word === 'hours') {
      return 'h';
    } else if (word === 'day' || word === 'days') {
      return 'd';
    } else {
      return word;
    }
  });

  // Combine words
  return shortenedWords.join('');
};

export default shortenCastingTime;
