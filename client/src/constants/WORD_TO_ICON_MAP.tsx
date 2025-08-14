// Import shared helpers
import genDieSymbol from '../helpers/genDieSymbol';

/*------------------------------------------------------------------------*/
/* ---------------------------- Import Icons ---------------------------- */
/*------------------------------------------------------------------------*/

// Import FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  IconDefinition,
  faAward,
  faBolt,
  faFeather,
  faBullseye,
  faCube,
  faDroplet,
  faEye,
  faFireFlameCurved,
  faGlobe,
  faLightbulb,
  faMountainSun,
  faSmog,
  faSpider,
  faSprout,
  faUpDownLeftRight,
  faWind,
  faHeadSideVirus,
  faBullhorn,
  faArrowUpWideShort,
  faHandSparkles,
  faHands,
  faHand,
  faRankingStar,
  faDumbbell,
  faCircle,
  faHillRockslide,
  faUmbrellaBeach,
  faDoorOpen,
  faLock,
  faLockOpen,
  faBroom,
  faForwardStep,
  faHeart,
  faWandSparkles,
  faUser,
  faUserGroup,
  faBackwardStep,
  faGauge,
  faDove,
  faDice,
  faSquareCheck,
  faSquareXmark,
  faXmark,
  faPersonWalkingLuggage,
  faHeartCrack,
  faPlay,
  faMinus,
  faShapes,
  faCheckToSlot,
  faTent,
  faUtensils,
  faImagePortrait,
  faSnowflake,
  faLemon,
  faCloudMeatball,
  faPowerOff,
  faFaceDizzy,
  faCopyright,
  faRegistered,
} from '@fortawesome/free-solid-svg-icons';
import {
  faCircle as faOpenCircle,
} from '@fortawesome/free-regular-svg-icons';
import {
  faSith,
  faWindows,
} from '@fortawesome/free-brands-svg-icons';

/*------------------------------------------------------------------------*/
/* ------------------------------ Icon Map ------------------------------ */
/*------------------------------------------------------------------------*/

// The key is the word to match, the value is the set of icons/visuals to replace it with

const UNPROCESSED_WORD_TO_ICON_MAP: {
  [k: string]: (
    | (IconDefinition | string | React.ReactNode)[]
    | (IconDefinition | string | React.ReactNode)
  )
} = {
  radius: (
    <FontAwesomeIcon
      icon={faPowerOff}
      style={{
        transform: 'rotate(90deg)',
      }}
    />
  ),
  diameter: (
    <span
      style={{
        position: 'relative',
      }}
    >
      <FontAwesomeIcon
        icon={faOpenCircle}
      />
      <FontAwesomeIcon
        icon={faMinus}
        style={{
          position: 'absolute',
          left: '0.38em',
          top: '0.63em',
          fontSize: '1.1em',
          transform: 'scale(2, 1.7)',
        }}
      />
    </span>
  ),
  ranged: faBullseye,
  sphere: faGlobe,
  cube: faCube,
  obj: faShapes,
  objects: faShapes,
  object: faShapes,
  visible: faEye,
  level: faAward,
  move: faUpDownLeftRight,
  water: faDroplet,
  fire: faFireFlameCurved,
  smoke: faSmog,
  dirt: faHillRockslide,
  sand: faUmbrellaBeach,
  dust: faFeather,
  air: faWind,
  concentration: faCopyright,
  concentrate: faCopyright,
  ritual: faRegistered,
  earth: faMountainSun,
  unconscious: faFaceDizzy,
  beast: faSpider,
  lightweight: faFeather,
  beasts: faSpider,
  damage: faHeartCrack,
  damages: faHeartCrack,
  plant: faSprout,
  light: faLightbulb,
  lights: faLightbulb,
  lightning: faBolt,
  mental: faHeadSideVirus,
  turn: faPlay,
  cold: faSnowflake,
  acid: faLemon,
  thunder: faCloudMeatball,
  audible: faBullhorn,
  success: faCheckToSlot,
  half: '½',
  third: '⅓',
  quarter: '¼',
  sixth: '⅙',
  eighth: '⅛',
  eigth: '⅛',
  '^l': (
    <FontAwesomeIcon
      icon={faArrowUpWideShort}
      style={{
        color: '#952714',
        transform: 'translateX(0.15em)',
      }}
    />
  ),
  '^c': [
    (
      <FontAwesomeIcon
        icon={faArrowUpWideShort}
        style={{
          color: '#952714',
          transform: 'translateX(0.15em)',
        }}
      />
    ),
    '⁵₁₁¹⁷',
  ],
  MagicAction: faHandSparkles,
  BonusAction: faHands,
  action: faHand,
  self: faImagePortrait,
  you: faImagePortrait,
  SpellcastingModifier: faRankingStar,
  SpellcastingAbilityModifier: faRankingStar,
  EndOfNextTurn: faForwardStep,
  EndOfTurn: faForwardStep,
  StartOfNextTurn: faBackwardStep,
  StartOfTurn: faBackwardStep,
  RangedSpellAttack: faWandSparkles,
  NonWornOrCarried: (
    <span
      style={{
        position: 'relative',
      }}
    >
      <FontAwesomeIcon
        icon={faPersonWalkingLuggage}
      />
      <FontAwesomeIcon
        icon={faXmark}
        style={{
          position: 'absolute',
          left: '-0.05em',
          top: 0,
          fontSize: '0.8em',
        }}
      />
    </span>
  ),
  NotWornOrCarried: (
    <span
      style={{
        position: 'relative',
      }}
    >
      <FontAwesomeIcon
        icon={faPersonWalkingLuggage}
      />
      <FontAwesomeIcon
        icon={faXmark}
        style={{
          position: 'absolute',
          left: '-0.05em',
          top: 0,
          fontSize: '0.8em',
        }}
      />
    </span>
  ),
  strength: faDumbbell,
  door: faDoorOpen,
  doors: faDoorOpen,
  window: faWindows,
  windows: faWindows,
  lock: faLock,
  unlock: faLockOpen,
  HP: faHeart,
  person: faUser,
  creature: faUser,
  people: faUserGroup,
  creatures: faUserGroup,
  attack: faSith,
  speed: faGauge,
  fly: faDove,
  rolls: faDice,
  roll: faDice,
  advantage: faSquareCheck,
  disadvantage: faSquareXmark,
  longrest: faTent,
  shortrest: faUtensils,
  torch: (
    <FontAwesomeIcon
      icon={faBroom}
      style={{
        transform: 'rotate(180deg)',
      }}
    />
  ),
  '>': (
    <FontAwesomeIcon
      icon={faCircle}
      style={{
        fontSize: '0.4em',
        transform: 'translateY(-0.4em)',
      }}
    />
  ),
};

/* --------- Add Dice Icons --------- */

// Loop through all dice types
[4, 6, 8, 10, 12, 20].forEach((die) => {
  // Loop through the number of dice that might be used in a roll
  for (let i = 0; i < 20; i += 1) {
    // Generate dice prefixes
    const prefixes: string[] = [''];
    if (i > 0) {
      prefixes.push(String(i));
      prefixes.push(`+${i}`);
      prefixes.push(`-${i}`);
    }

    // Add each prefix
    prefixes.forEach((prefix) => {
      let usedPrefix = prefix;
      if (prefix === '1') {
        usedPrefix = '';
      } else if (prefix === '+1') {
        usedPrefix = '+';
      } else if (prefix === '-1') {
        usedPrefix = '-';
      }
      UNPROCESSED_WORD_TO_ICON_MAP[`${prefix}d${die}`] = [genDieSymbol(die, usedPrefix)];
    });
  }
});

/*------------------------------------------------------------------------*/
/* --------------------------- Postprocessing --------------------------- */
/*------------------------------------------------------------------------*/

// Create a new map with:
// - Case insensitive keys (lowercase)
// - All values are arrays, even if just one item
const WORD_TO_ICON_MAP: {
  [k: string]: (IconDefinition | string | React.ReactNode)[]
} = {};

// Process each key
Object.keys(UNPROCESSED_WORD_TO_ICON_MAP).forEach((key) => {
  // Make sure the value is an array
  const value = (
    Array.isArray(UNPROCESSED_WORD_TO_ICON_MAP[key])
      ? UNPROCESSED_WORD_TO_ICON_MAP[key]
      : [UNPROCESSED_WORD_TO_ICON_MAP[key]]
  );

  // Convert key to lowercase
  const caseInsensitiveKey = key.toLowerCase();

  // Add to the processed map
  WORD_TO_ICON_MAP[caseInsensitiveKey] = value;
});

// Export the map
export default WORD_TO_ICON_MAP;
