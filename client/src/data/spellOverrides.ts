/**
 * Overrides for spell data (only define values that differ from the
 * default spell data)
 * @author Gabe Abrams
 */
const spellOverrides: {
  [spellId: string]: { [k: string]: string },
} = {
  'protection-from-evil-and-good': {
    name: 'Protection from Evil & Good',
  },
};

export default spellOverrides;
