/**
 * Spell card display
 * @author Gabe Abrams
 */

// Import React
import React, { useRef, useEffect } from 'react';

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
import parchment from './artwork/parchment.jpg';

// Import styles
import './SpellCard.scss';
import { waitMs } from 'dce-reactkit';

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

  /* -------------- Refs -------------- */

  // Initialize refs
  const longDescriptionBoxRef = useRef<HTMLDivElement>(null);

  /*------------------------------------------------------------------------*/
  /* ------------------------- Lifecycle Functions ------------------------ */
  /*------------------------------------------------------------------------*/

  /**
   * Mount: shrink long description to fit
   * @author Gabe Abrams
   */
  useEffect(
    () => {
      (async () => {
        let fontSize = 1;
        for (let i = 0; i < 1000; i++) {
          if (longDescriptionBoxRef.current) {
            // Get height of content inside
            const contentHeight = longDescriptionBoxRef.current.scrollHeight;
            const boxHeight = longDescriptionBoxRef.current.clientHeight;
            console.log('Content height:', contentHeight, 'Box height:', boxHeight);

            // Check if the content height is larger than the box height
            if (contentHeight > boxHeight) {
              // Too big! Shrink the text slightly
              fontSize -= 0.01;
              longDescriptionBoxRef.current.style.fontSize = `${fontSize}em`;

              // Retry
              continue;
            } else {
              // Fits! Break out of the loop
              break;
            }
          }

          await waitMs(10);
        }
      })();
    },
    [],
  );

  /*------------------------------------------------------------------------*/
  /* ------------------------------- Render ------------------------------- */
  /*------------------------------------------------------------------------*/

  /*----------------------------------------*/
  /* --------------- Main UI -------------- */
  /*----------------------------------------*/

  // Build info bar items
  const infoBarItems = (
    <>
      <span className="SpellCard-info-bar-item" key="casting-time">
        <span>
          {shortenCastingTime(spell.castingTime || '1 action')}
        </span>
        {(spell.isRitual || spell.isConcentration) && (
          <span>
            {spell.isRitual && 'R'}
            {spell.isConcentration && 'C'}
          </span>
        )}
      </span>
      <span className="SpellCard-info-bar-item" key="duration">
        <span>
          {shortenDuration(spell.duration)}
        </span>
        <span>
          {shortenRange(spell.range)}
        </span>
      </span>
    </>
  );

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

            {/* Name */}
            <div className="SpellCard-name text-stylized">
              {spell.name}
            </div>

            {/* Info Items */}
            <div className="SpellCard-info-bar">
              {infoBarItems}
            </div>

            {/* VSM */}
            {(spell.isVerbal || spell.isSomatic || spell.isMaterial) && (
              <div className="SpellCard-vsm-container">
                <div
                  className="SpellCard-vsm-item"
                  style={{
                    opacity: spell.isVerbal ? 1 : 0,
                  }}
                >
                  V
                </div>
                <div
                  className="SpellCard-vsm-item"
                  style={{
                    opacity: spell.isSomatic ? 1 : 0,
                  }}
                >
                  S
                </div>
                <div
                  className="SpellCard-vsm-item"
                  style={{
                    opacity: spell.isMaterial ? 1 : 0,
                  }}
                >
                  M
                </div>
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
        <div
          className="SpellCard-bottom-container"
          style={{
            backgroundImage: `url(${parchment})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div ref={longDescriptionBoxRef}>
            {
              spell.descriptionHTML
                ? <span dangerouslySetInnerHTML={{ __html: spell.descriptionHTML }} />
                : 'No description available.'
            }
          </div>
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
