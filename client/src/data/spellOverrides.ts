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
  'spider-climb': {
    "descriptionHTML": "Until the spell ends, one willing creature you touch gains the ability to move up, down, and across vertical surfaces and along ceilings, while leaving its hands free. The target also gains a Climb Speed equal to its Speed.<br><strong><em>Using a Higher-Level Spell Slot</em></strong>. You can target one additional creature for each spell slot level above 2.<br>",
  },
  'detect-thoughts': {
    range: '30ft',
  },
};

export default spellOverrides;
