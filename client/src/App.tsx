/**
 * Top-level app
 * @author Gabe Abrams
 */

// Import React
import React from 'react';

// Data
import allSpells from './data/allSpells';

// Import other components
import SpellCard from './SpellCard';

// Import style
import './App.scss';

/*------------------------------------------------------------------------*/
/* ------------------------------ Component ----------------------------- */
/*------------------------------------------------------------------------*/

const App: React.FC = () => {
  /*------------------------------------------------------------------------*/
  /* ------------------------------- Render ------------------------------- */
  /*------------------------------------------------------------------------*/

  /*----------------------------------------*/
  /* --------------- Main UI -------------- */
  /*----------------------------------------*/

  // Sort spells by level and then alphabetically
  allSpells.sort((a, b) => {
    if (a.level !== b.level) {
      return a.level - b.level;
    }
    return a.name.localeCompare(b.name);
  });

  // Render
  return (
    <div className="App-container">
      Spells:
      <div className="App-spells d-flex flex-wrap gap-3">
        {allSpells.map((spell) => {
          return (
            <SpellCard
              spell={spell}
            />
          );
        })}
      </div>
    </div>
  );
};

/*------------------------------------------------------------------------*/
/* ------------------------------- Wrap Up ------------------------------ */
/*------------------------------------------------------------------------*/

// Export component
export default App;
