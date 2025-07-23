import React from 'react';

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

// Import shared helpers
import genDieSymbol from './genDieSymbol';

/*------------------------------------------------------------------------*/
/* ------------------------------ Constants ----------------------------- */
/*------------------------------------------------------------------------*/

const wordToIconMap: {
  [k: string]: (IconDefinition | string | React.ReactNode)[],
} = {
  radius: [(
    <FontAwesomeIcon
      icon={faPowerOff}
      style={{
        transform: 'rotate(90deg)',
      }}
    />
  )],
  diameter: [(
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
  )],
  ranged: [faBullseye],
  sphere: [faGlobe],
  cube: [faCube],
  obj: [faShapes],
  objects: [faShapes],
  object: [faShapes],
  visible: [faEye],
  level: [faAward],
  move: [faUpDownLeftRight],
  water: [faDroplet],
  fire: [faFireFlameCurved],
  smoke: [faSmog],
  dirt: [faHillRockslide],
  sand: [faUmbrellaBeach],
  dust: [faFeather],
  air: [faWind],
  concentration: [faCopyright],
  concentrate: [faCopyright],
  ritual: [faRegistered],
  earth: [faMountainSun],
  unconscious: [faFaceDizzy],
  beast: [faSpider],
  lightweight: [faFeather],
  beasts: [faSpider],
  damage: [faHeartCrack],
  damages: [faHeartCrack],
  plant: [faSprout],
  light: [faLightbulb],
  lights: [faLightbulb],
  lightning: [faBolt],
  mental: [faHeadSideVirus],
  turn: [faPlay],
  cold: [faSnowflake],
  acid: [faLemon],
  thunder: [faCloudMeatball],
  audible: [faBullhorn],
  success: [faCheckToSlot],
  'half': ['½'],
  'third': ['⅓'],
  'quarter': ['¼'],
  'sixth': ['⅙'],
  'eighth': ['⅛'],
  'eigth': ['⅛'],
  '^l': [(
    <FontAwesomeIcon
      icon={faArrowUpWideShort}
      style={{
        color: '#952714',
        transform: 'translateX(0.15em)',
      }}
    />
  )],
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
  magicaction: [faHandSparkles],
  bonusaction: [faHands],
  action: [faHand],
  self: [faImagePortrait],
  you: [faImagePortrait],
  spellcastingmodifier: [faRankingStar],
  spellcastingabilitymodifier: [faRankingStar],
  endofnextturn: [faForwardStep],
  endofturn: [faForwardStep],
  startofnextturn: [faBackwardStep],
  startofturn: [faBackwardStep],
  rangedspellattack: [faWandSparkles],
  nonwornorcarried: [(
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
  )],
  strength: [faDumbbell],
  door: [faDoorOpen],
  doors: [faDoorOpen],
  window: [faWindows],
  windows: [faWindows],
  lock: [faLock],
  unlock: [faLockOpen],
  hp: [faHeart],
  person: [faUser],
  creature: [faUser],
  people: [faUserGroup],
  creatures: [faUserGroup],
  attack: [faSith],
  speed: [faGauge],
  fly: [faDove],
  rolls: [faDice],
  roll: [faDice],
  advantage: [faSquareCheck],
  disadvantage: [faSquareXmark],
  longrest: [faTent],
  shortrest: [faUtensils],
  torch: [(
    <FontAwesomeIcon
      icon={faBroom}
      style={{
        transform: 'rotate(180deg)',
      }}
    />
  )],
  '>': [(
    <FontAwesomeIcon
      icon={faCircle}
      style={{
        fontSize: '0.4em',
        transform: 'translateY(-0.4em)',
      }}
    />
  )],
  'd4': [genDieSymbol(4)],
  'd6': [genDieSymbol(6)],
  'd8': [genDieSymbol(8)],
  'd10': [genDieSymbol(10)],
  'd12': [genDieSymbol(12)],
  'd20': [genDieSymbol(20)],
  '1d4': [genDieSymbol(4)],
  '1d6': [genDieSymbol(6)],
  '1d8': [genDieSymbol(8)],
  '1d10': [genDieSymbol(10)],
  '1d12': [genDieSymbol(12)],
  '1d20': [genDieSymbol(20)],
  '2d4': [genDieSymbol(4, '2')],
  '2d6': [genDieSymbol(6, '2')],
  '2d8': [genDieSymbol(8, '2')],
  '2d10': [genDieSymbol(10, '2')],
  '2d12': [genDieSymbol(12, '2')],
  '2d20': [genDieSymbol(20, '2')],
  '3d4': [genDieSymbol(4, '3')],
  '3d6': [genDieSymbol(6, '3')],
  '3d8': [genDieSymbol(8, '3')],
  '3d10': [genDieSymbol(10, '3')],
  '3d12': [genDieSymbol(12, '3')],
  '3d20': [genDieSymbol(20, '3')],
  '+1d4': [genDieSymbol(4, '+')],
  '+1d6': [genDieSymbol(6, '+')],
  '+1d8': [genDieSymbol(8, '+')],
  '+1d10': [genDieSymbol(10, '+')],
  '+1d12': [genDieSymbol(12, '+')],
  '+1d20': [genDieSymbol(20, '+')],
  '+2d4': [genDieSymbol(4, '+2')],
  '+2d6': [genDieSymbol(6, '+2')],
  '+2d8': [genDieSymbol(8, '+2')],
  '+2d10': [genDieSymbol(10, '+2')],
  '+2d12': [genDieSymbol(12, '+2')],
  '+2d20': [genDieSymbol(20, '+2')],
  '+3d4': [genDieSymbol(4, '+3')],
  '+3d6': [genDieSymbol(6, '+3')],
  '+3d8': [genDieSymbol(8, '+3')],
  '+3d10': [genDieSymbol(10, '+3')],
  '+3d12': [genDieSymbol(12, '+3')],
  '+3d20': [genDieSymbol(20, '+3')],
  '-1d4': [genDieSymbol(4, '-')],
  '-1d6': [genDieSymbol(6, '-')],
  '-1d8': [genDieSymbol(8, '-')],
  '-1d10': [genDieSymbol(10, '-')],
  '-1d12': [genDieSymbol(12, '-')],
  '-1d20': [genDieSymbol(20, '-')],
  '-2d4': [genDieSymbol(4, '-2')],
  '-2d6': [genDieSymbol(6, '-2')],
  '-2d8': [genDieSymbol(8, '-2')],
  '-2d10': [genDieSymbol(10, '-2')],
  '-2d12': [genDieSymbol(12, '-2')],
  '-2d20': [genDieSymbol(20, '-2')],
  '-3d4': [genDieSymbol(4, '-3')],
  '-3d6': [genDieSymbol(6, '-3')],
  '-3d8': [genDieSymbol(8, '-3')],
  '-3d10': [genDieSymbol(10, '-3')],
  '-3d12': [genDieSymbol(12, '-3')],
  '-3d20': [genDieSymbol(20, '-3')],
  '6d6': [genDieSymbol(6, '6')],
};

// Punctuation that should not have a space before it
const punctuationRegex = /([.,;:!?()/])/g;

// Chars to not have space after
const noSpaceAfterChars = '(/'.split('');
const butSpaceBeforeChars = '('.split('');

/*------------------------------------------------------------------------*/
/* -------------------------------- Main -------------------------------- */
/*------------------------------------------------------------------------*/

/**
 * Add icons to the spell description
 * @author Gabe Abrams
 * @param descriptionText The spell description text
 * @returns The prettified description text with icons
 */
const prettifyDescription = (descriptionText: string): React.ReactNode[] => {
  const output: React.ReactNode[] = [];
  let noSpaceAfterNext = false;
  descriptionText
    // Surround / with spaces
    .replace(/([/])/g, ' $1 ')
    // Add space around punctuation
    .replace(punctuationRegex, ' $1 ')
    // Replace multiple spaces with a single space
    .replace(/\s+/g, ' ')
    // Remove leading and trailing spaces
    .trim()
    // Split the description into words
    .split(' ')
    // Replace words with icons if they match the map
    .forEach((word, wordIndex) => {
      // Check if the word is in the map
      if (wordToIconMap[word.toLowerCase()]) {
        const items = wordToIconMap[word.toLowerCase()];
        items.forEach((item, index) => {
          const key = `${wordIndex}-${index}`;
          if (typeof item === 'string') {
            // Only add space if not punctuation
            const noSpace = (item.match(punctuationRegex) || noSpaceAfterNext);

            output.push(
              <span key={key}>
                {!noSpace && ' '}
                {item}
              </span>,
            );
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          } else if (((item ?? {}) as any).iconName) {
            output.push(
              <>
                {!noSpaceAfterNext && ' '}
                <FontAwesomeIcon
                  key={key}
                  icon={item as IconDefinition}
                />
              </>,
            );
          } else if (React.isValidElement(item)) {
            // If it's a React element, just add it
            output.push(
              <span key={key}>
                {!noSpaceAfterNext && ' '}
                {item}
              </span>,
            );
          }
        });
        noSpaceAfterNext = false;
      } else if (word.trim() === '') {
        noSpaceAfterNext = false;
      } else if (noSpaceAfterChars.includes(word)) {
        output.push(
          <span key={wordIndex}>
            {butSpaceBeforeChars.includes(word) && ' '}
            {word}
          </span>,
        );
        noSpaceAfterNext = true;
      } else {
        // Not in map

        // Don't add space before punctuation
        const noSpace = (word.match(punctuationRegex) || noSpaceAfterNext);

        output.push(
          <span key={wordIndex}>
            {!noSpace && ' '}
            {word}
          </span>,
        );
        noSpaceAfterNext = false;
      }
  });
  return output;
};

export default prettifyDescription;
