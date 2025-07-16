import sendRequest from 'caccl-send-request';
import { parse as parseHTML } from 'node-html-parser';
import fs from 'fs';
import path from 'path';
import { parallelLimit } from 'async';

// Import shared types
import Spell from './Spell';

(async () => {
  // Get list of all spells
  const allSpellResponse = await sendRequest({
    host: 'aidedd.org',
    path: '/spell',
    method: 'GET',
    responseType: 'Text',
  });
  const allSpellsHTML = allSpellResponse.body;
  const allSpellsDOM = parseHTML(allSpellsHTML);
  const spellCheckboxes = allSpellsDOM.querySelectorAll('input[name="select_item[]"]');
  const allSpellCheckboxValues = (
    spellCheckboxes
      .map((checkbox) => {
        return checkbox.getAttribute('value');
      })
      .filter((value) => {
        return (!!value && value.trim() !== '');
      })
      .map((value) => {
        return String(value).trim();
      })
      .map((value) => {
        // Remove quotes
        return value.replace(/['"]/g, '');
      })
  );

  // Get full spells detail
  const spells: Spell[] = [];
  
  // Create tasks
  const tasks: (() => Promise<void>)[] = allSpellCheckboxValues.map((spellValue) => {
    return async () => {
      console.log(`Looking up ${spellValue}`);

      // Parse spell detail
      const spellResponse = await sendRequest({
        host: 'aidedd.org',
        path: `/spell/${spellValue}`,
        method: 'GET',
        responseType: 'Text',
      });
      const spellHTML = spellResponse.body;
      const spellDOM = parseHTML(spellHTML);

      // Extract spell details
      const name = spellDOM.querySelector('h1')?.textContent.trim() || '';
      const subDescription = spellDOM.querySelector('.ecole')?.textContent.trim() || '';
      // > Format: "Level X School (Class1, Class2, ...)"
      const level = Number.parseInt(subDescription.match(/Level (\d+)/)?.[1] || '0', 10);
      const classes = subDescription.match(/\(([^)]+)\)/)?.[1].split(',').map((className) => {
        return className.trim();
      }) || [];
      let castingTimeText = spellDOM.querySelector('.t')?.textContent.trim() || '';
      let isRitual = false;
      if (castingTimeText.includes(' or Ritual')) {
        isRitual = true;
        castingTimeText = castingTimeText.replace(' or Ritual', '');
      }
      let castingTime = castingTimeText.replace(/Casting Time: /, '');
      let bonusActionDescription: string | undefined;
      if (castingTime.startsWith('Bonus Action, ')) {
        castingTime = 'Bonus Action';
        bonusActionDescription = castingTimeText.replace('Bonus Action, ', '');
      }
      const rangeText = spellDOM.querySelector('.r')?.textContent.trim() || '';
      const range = rangeText.replace(/Range: /, '');
      const componentsText = spellDOM.querySelector('.c')?.textContent.trim() || '';
      const components = componentsText.replace(/Components: /, '').split(':')[0].trim();
      const isSomatic = components.includes('S');
      const isVerbal = components.includes('V');
      const isMaterial = components.includes('M');
      const materialCost = (
        componentsText.includes('(')
          ? (
            componentsText.split('(')[1]
              .split(')')[0]
              .trim()
          )
          : ''
      );
      const durationText = spellDOM.querySelector('.d')?.textContent.trim() || '';
      let duration = durationText.replace(/Duration: /, '');
      duration = duration.replace('up to ', '≤').trim();
      duration = (
        duration
          .replace(' minutes', 'min')
          .replace(' minute', 'min')
          .replace(' hours', 'hr')
          .replace(' hour', 'hr')
          .replace(' days', 'd')
          .replace(' day', 'd')
      );
      let isConcentration = false;
      if (duration.includes('Concentration, ')) { 
        isConcentration = true;
        duration = duration.replace('Concentration, ', '');
      }

      const descriptionHTML = String(spellDOM.querySelector('.description')?.innerHTML) || '';

      // Determine if the spell is an attack based on the description
      const descriptionText = String(spellDOM.querySelector('.description')?.textContent) || '';
      let isAttack = false;
      // > makes a <type> saving throw
      if (descriptionText.match(/makes a (.+) saving throw/)) {
        isAttack = true;
      }
      // > must make a <type> saving throw
      if (descriptionText.match(/must make a (.+) saving throw/)) {
        isAttack = true;
      }
      // > must succeed on a <type> saving throw
      if (descriptionText.match(/must succeed on a (.+) saving throw/)) {
        isAttack = true;
      }
      // > must make a <type> check
      if (descriptionText.match(/must make a (.+) check/)) {
        isAttack = true;
      }
      // > must succeed on a <type> check
      if (descriptionText.match(/must succeed on a (.+) check/)) {
        isAttack = true;
      }
      // > damage increases by
      if (descriptionText.includes('damage increases by')) {
        isAttack = true;
      }
      // > takes <amount> <type> damage
      if (descriptionText.match(/takes \w+ \w+ damage/)) {
        isAttack = true;
      }
      // > make a ranged spell attack
      if (descriptionText.includes('make a ranged spell attack')) {
        isAttack = true;
      }
      // > each creature ..... makes a <type> saving throw
      if (descriptionText.match(/each creature .* makes a (.+) saving throw/)) {
        isAttack = true;
      }
      // > takes an .... damage from the attach
      if (descriptionText.match(/takes an? \w+ damage from the attack/)) {
        isAttack = true;
      }
      // > taking <amount> <type> damage
      if (descriptionText.match(/taking \d+ \w+ damage/)) {
        isAttack = true;
      }

      spells.push({
        id: spellValue,
        name,
        level,
        isAttack,
        isRitual,
        castingTime,
        bonusActionDescription,
        range,
        isVerbal,
        isSomatic,
        isMaterial,
        isConcentration,
        materialCost,
        duration,
        descriptionHTML,
        classes,
      });
    };
  });

  // Run tasks
  await parallelLimit(tasks, 7);

  console.log(`\nFound ${spells.length} spells!`);
  console.log('Writing spells to allSpells.ts');

  // Write spells to file
  const outputFilePath = path.join(__dirname, '../client/src/data/allSpells.ts');
  let outputContent = `
/**
 * All spells from spell scraper
 * @author Gabe Abrams
 */

// Import shared types
import Spell from '../types/Spell';

// List of spells
const allSpells: Spell[] = [
${spells.map((spell) => {
  return `  ${JSON.stringify(spell)},`;
}).join('\n')}
]

export default allSpells;
`.trim();

  fs.writeFileSync(outputFilePath, outputContent);

  console.log('Done!');
})();
