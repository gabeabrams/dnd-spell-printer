/**
 * Shorten the description of a duration
 * @author Gabe Abrams
 * @param duration - The original duration string.
 * @returns A shortened duration string.
 */

const shortenDuration = (duration: string): string => {
  if (!duration || duration === 'Instantaneous') {
    return 'Inst';
  }

  return (
    duration
      .replace('minute', 'm')
      .replace('minutes', 'm')
      .replace('min', 'm')
      .replace('hour', 'h')
      .replace('hours', 'h')
      .replace('hr', 'h')
      .replace('day', 'd')
      .replace('days', 'd')
      .replace('turn', 't')
      .replace(' round', 'rnd')
      .replace('second', 's')
      .replace('seconds', 's')
      .replace('≤', '')
      .replace('Until dispelled', '∞')
  );
};

export default shortenDuration;
