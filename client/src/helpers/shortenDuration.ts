/**
 * Shorten the description of a duration
 * @author Gabe Abrams
 * @param duration - The original duration string.
 * @returns A shortened duration string.
 */

const shortenDuration = (duration: string): string => {
  if (duration === 'Instantaneous') {
    return 'Inst';
  }
  return duration;
};

export default shortenDuration;
