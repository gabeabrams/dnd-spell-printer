/**
 * Single spell
 * @author Gabe Abrams
 */
type Spell = {
  // Spell ID
  id: string,
  // Name of the spell
  name: string,
  // Level of the spell
  level: number,
  // If true, the spell is an attack
  isAttack: boolean,
  // Is the spell a ritual?
  isRitual: boolean,
  // Casting time of the spell
  castingTime: string,
  // Bonus action additional description
  bonusActionDescription?: string,
  // Range of the spell
  range: string,
  // If true, the spell is verbal
  isVerbal: boolean,
  // If true, the spell is somatic
  isSomatic: boolean,
  // If true, the spell is material
  isMaterial: boolean,
  // Requires concentration
  isConcentration: boolean,
  // Material cost of the spell
  materialCost: string,
  // Duration
  duration: string,
  // Description HTML
  descriptionHTML: string,
  // Classes that can cast the spell
  classes: string[],
}

export default Spell;
