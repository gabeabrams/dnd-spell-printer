/**
 * Spell card display
 * @author Gabe Abrams
 */

// Import React
import React from 'react';

// Import FontAwesome icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHandHoldingWater,
  faClock,
  faBullseye,
  faHourglass2,
} from '@fortawesome/free-solid-svg-icons';

// Import shared types
import Spell from './types/Spell';

// Import shared helpers
import shortenCastingTime from './helpers/shortenCastingTime';
import shortenDuration from './helpers/shortenDuration';
import shortenRange from './helpers/shortenRange';
import shortSpellDescriptions from './data/shortSpellDescriptions';
import prettifyDescription from './helpers/prettifyDescription';

// Import artwork
import Scroll from './artwork/Scroll.svg';
import SwordAndShield from './artwork/SwordAndShield.svg';

// Import styles
import './SpellCard.scss';

/*------------------------------------------------------------------------*/
/* -------------------------------- Types ------------------------------- */
/*------------------------------------------------------------------------*/

// Props definition
type Props = {
  // The spell to display
  spell: Spell,
};

/*------------------------------------------------------------------------*/
/* ------------------------------ Component ----------------------------- */
/*------------------------------------------------------------------------*/

const SpellCard: React.FC<Props> = (props) => {
  /*------------------------------------------------------------------------*/
  /* -------------------------------- Setup ------------------------------- */
  /*------------------------------------------------------------------------*/

  /* -------------- Props ------------- */

  // Destructure all props
  const {
    spell,
  } = props;

  /*------------------------------------------------------------------------*/
  /* ------------------------------- Render ------------------------------- */
  /*------------------------------------------------------------------------*/

  /*----------------------------------------*/
  /* --------------- Main UI -------------- */
  /*----------------------------------------*/

  // Build info bar items
  const infoBarItems: React.ReactNode[] = [];
  if (spell.isRitual) {
    infoBarItems.push(
      <span className="SpellCard-info-bar-item" key="ritual">
        <FontAwesomeIcon
          className="SpellCard-info-bar-item-icon"
          icon={faHourglass2}
        />
        Ritual
      </span>
    );
  }
  if (spell.castingTime && spell.castingTime !== '1 action') {
    infoBarItems.push(
      <span className="SpellCard-info-bar-item" key="casting-time">
        <FontAwesomeIcon
          className="SpellCard-info-bar-item-icon"
          icon={faHandHoldingWater}
        />
        {shortenCastingTime(spell.castingTime)}
      </span>
    );
  }
  if (spell.range && spell.range !== 'Self') {
    infoBarItems.push(
      <span className="SpellCard-info-bar-item" key="range">
        <FontAwesomeIcon
          className="SpellCard-info-bar-item-icon"
          icon={faBullseye}
        />
        {shortenRange(spell.range)}
      </span>
    );
  }
  if (spell.duration && spell.duration !== 'Instantaneous') {
    infoBarItems.push(
      <span className="SpellCard-info-bar-item" key="duration">
        <FontAwesomeIcon
          className="SpellCard-info-bar-item-icon"
          icon={faClock}
        />
        {shortenDuration(spell.duration)}
      </span>
    );
  }

  // Get shortened description
  const shortenedDescription = prettifyDescription(
    spell.descriptionHTML
      ? shortSpellDescriptions[spell.id] || 'No short description yet'
      : 'No description available'
  );

  return (
    <div
      className={`SpellCard-outer-container Spell-combat-${spell.isAttack ? 'true' : 'false'}`}
    >
      <div className="SpellCard-inner-container">
        {/* Top */}
        <div className="SpellCard-top-container">
          <div className="SpellCard-top-upper-row">
            {/* Marker */}
            <div className="SpellCard-level-marker">
              <div className="SpellCard-level-marker-back">
                <img
                  src={spell.isAttack ? SwordAndShield : Scroll}
                  alt="Spell marker"
                  className="SpellCard-level-marker-icon"
                />
              </div>
              <div
                className="SpellCard-level-marker-text text-stylized"
                style={{
                  transform: (
                    spell.level === 0
                      ? 'scale(0.6) translate(0.25em, -0.4em)'
                      : undefined
                  ),
                }}
              >
                {spell.level || 'C'}
              </div>
            </div>

            {/* Info Stack */}
            <div className="SpellCard-info-stack">
              {/* Name */}
              <div className="SpellCard-name text-stylized">
                {spell.name}
              </div>
              {/* Info Items */}
              <div className="SpellCard-info-bar">
                {infoBarItems}
              </div>
            </div>

            {/* VSM */}
            {(spell.isVerbal || spell.isSomatic || spell.isMaterial) && (
              <div className="SpellCard-vsm-container text-stylized">
                {spell.isVerbal && (
                  <div className="SpellCard-vsm-item">
                    V
                  </div>
                )}
                {spell.isSomatic && (
                  <div className="SpellCard-vsm-item">
                    S
                  </div>
                )}
                {spell.isMaterial && (
                  <div className="SpellCard-vsm-item">
                    M
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Lower Row */}
          <div className="SpellCard-top-lower-row">
            {/* More Info */}
            <div className="SpellCard-short-description">
              <div className="SpellCard-short-description-text">
                {shortenedDescription}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="SpellCard-bottom-container">
          {
            spell.descriptionHTML
              ? <span dangerouslySetInnerHTML={{ __html: spell.descriptionHTML }} />
              : 'No description available.'
          }
        </div>
      </div>
    </div>
  );
};

/*------------------------------------------------------------------------*/
/* ------------------------------- Wrap Up ------------------------------ */
/*------------------------------------------------------------------------*/

// Export component
export default SpellCard;
