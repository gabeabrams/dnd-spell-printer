// Import CSV parser
import { parse } from 'papaparse';

// Import spell CSV data
import allSpellsString from './allSpellsString';

// Import shared types
import Spell from '../types/Spell';

/*------------------------------------------------------------------------*/
/* -------------------------- Parse All Spells -------------------------- */
/*------------------------------------------------------------------------*/

// Parse the CSV file containing all spells
const allSpells: Spell[] = [];
(() => {
  // Parse the CSV file
  const parsedCSV = parse<Spell>(
    allSpellsString,
    {
      header: true,
      skipEmptyLines: true,
    },
  );

  // Create a spell from each CSV row
  parsedCSV.data.forEach((row) => {
    // Create a spell
    const spell: Spell = {
      name: row['Spell Name'],
      level: Number.parseInt(row['Level'], 10),
      school: row['School'],
      isRitual: String(row['Ritual']).length > 0,
      castingTime: row['Casting Time'],
      range: row['Range'],
      targetOrArea: row['Target/Area'],
      isVerbal: String(row['V']).length > 0,
      isSomatic: String(row['S']).length > 0,
      isMaterial: String(row['M']).length > 0,
      components: row['Component(s)'],
      cost: row['Cost'],
      isConcentration: String(row['Concentration']).length > 0,
      duration: row['Duration'],
      attackOrSavingThrow: row['Attack/Saving Throw (Effect)'],
      damageType: row['Damage Type'],
      damageOrHeal: row['Damage/Heal'],
      sourcebook: row['Sourcebook'],
      pageNumber: Number.parseInt(row['Page #'], 10),
      additionalDetail: row['Additional Detail'],
      perHigherSpellLevel: row['Per Higher Spell Level'],
      forClass: {
        Bard: String(row['Bard']).length > 0,
        Cleric: String(row['Cleric']).length > 0,
        Druid: String(row['Druid']).length > 0,
        Paladin: String(row['Paladin']).length > 0,
        Ranger: String(row['Ranger']).length > 0,
        Sorceror: String(row['Sorceror']).length > 0,
        Warlock: String(row['Warlock']).length > 0,
        Wizard: String(row['Wizard']).length > 0,
      },
    };

    // Add the spell to the list of all spells
    allSpells.push(spell);
  });

  console.log('Parsed CSV:', parsedCSV);
})();

/*------------------------------------------------------------------------*/
/* ------------------------------- Getter ------------------------------- */
/*------------------------------------------------------------------------*/

/**
 * Get the list of all spells for a certain class
 * @author Gabe Abrams
 * @param className - the name of the class
 * @returns list of spells available to that class
 */
const listSpells = (className: string): Spell[] => {
  const classSpells = (
    allSpells
      .filter((spell) => {
        return spell.forClass[className];
      })
  );

  return classSpells;
};

export default listSpells;

