/**
 * Single spell
 * @author Gabe Abrams
 */
type Spell = {
  // Name of the spell
  name: string,
  // Level of the spell
  level: number,
  // School of the spell
  school: string,
  // Is the spell a ritual?
  isRitual: boolean,
  // Casting time of the spell
  castingTime: string,
  // Range of the spell
  range: string,
  // Target or area of the spell
  targetOrArea: string,
  // Is the spell verbal?
  isVerbal: boolean,
  // Is the spell somatic?
  isSomatic: boolean,
  // Is the spell material?
  isMaterial: boolean,
  // Components of the spell
  components: string,
  // Cost of the spell
  cost: string,
  // Is the spell concentration?
  isConcentration: boolean,
  // Duration of the spell
  duration: string,
  // Attack or saving throw of the spell
  attackOrSavingThrow: string,
  // Damage type of the spell
  damageType: string,
  // Damage or heal of the spell
  damageOrHeal: string,
  // Sourcebook of the spell
  sourcebook: string,
  // Page number of the spell in the sourcebook
  pageNumber: number,
  // Additional detail about the spell
  additionalDetail: string,
  // Per higher spell level detail
  perHigherSpellLevel: string,
  // For which class the spell is available
  forClass: {
    [k: string]: boolean
  },
};

export default Spell;
