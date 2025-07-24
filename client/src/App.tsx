/**
 * Top-level app
 * @author Gabe Abrams
 */

// Import React
import React, { useReducer } from 'react';

// Data
import allSpells from './data/allSpells';
import additionalSpells from './data/additionalSpells';
import spellOverrides from './data/spellOverrides';

// Import other components
import SpellCard from './SpellCard';
import SpellChooser from './SpellChooser';

// Import style
import './App.scss';

/*------------------------------------------------------------------------*/
/* ---------------------------- Preprocessing --------------------------- */
/*------------------------------------------------------------------------*/

// Add additional spells to the main spell list
allSpells.push(...additionalSpells);

// Sort spells by level and then alphabetically
allSpells.sort((a, b) => {
  if (a.level !== b.level) {
    return a.level - b.level;
  }
  return a.name.localeCompare(b.name);
});

// Apply overrides to spells
allSpells.forEach((spell) => {
  const override = spellOverrides[spell.id];
  if (override) {
    Object.keys(override).forEach((key) => {
      spell[key] = override[key];
    });
  }
});


/*------------------------------------------------------------------------*/
/* -------------------------------- State ------------------------------- */
/*------------------------------------------------------------------------*/

/* -------------- Views ------------- */

enum View {
  // Spell chooser
  SpellChooser = 'SpellChooser',
  // Spell printable
  SpellPrintable = 'SpellPrintable',
}

/* -------- State Definition -------- */

type State = (
  | {
    // Current view
    view: View.SpellChooser,
    // List of chosen spells
    chosenSpellIds: string[],
    // Selected spell type
    selectedSpellClass?: string,
  }
  | {
    // Current view
    view: View.SpellPrintable,
    // The chosen spell ids
    chosenSpellIds: string[],
  }
);

/* ------------- Actions ------------ */

// Types of actions
enum ActionType {
  // Choose class
  ChooseSpellClass = 'ChooseSpellClass',
  // Unchoose class
  UnchooseSpellClass = 'UnchooseSpellClass',
  // Set whether a spell is selected or not
  UpdateSpellSelection = 'UpdateSpellSelection',
  // Show printable view
  ShowPrintableView = 'ShowPrintableView',
}

// Action definitions
type Action = (
  | {
    // Action type
    type: ActionType.UpdateSpellSelection,
    // Spell id to update
    spellId: string,
    // Whether the spell is selected
    isSelected: boolean,
  }
  | {
    // Action type
    type: ActionType.ChooseSpellClass,
    // Spell class to choose
    spellClass: string,
  }
  | {
    // Action type
    type: ActionType.UnchooseSpellClass,
  }
  | {
    // Action type
    type: ActionType.ShowPrintableView,
  }
);

/**
 * Reducer that executes actions
 * @author Gabe Abrams
 * @param state current state
 * @param action action to execute
 */
const reducer = (state: State, action: Action): State => {
  if (state.view === View.SpellChooser) {
    switch (action.type) {
      case ActionType.UpdateSpellSelection: {
        const { spellId, isSelected } = action;
        return {
          ...state,
          chosenSpellIds: (
            isSelected
              ? [...state.chosenSpellIds, spellId]
              : state.chosenSpellIds.filter((id) => id !== spellId)
          ),
        };
      }
      case ActionType.ChooseSpellClass: {
        const { spellClass } = action;
        return {
          ...state,
          selectedSpellClass: spellClass,
        };
      }
      case ActionType.UnchooseSpellClass: {
        return {
          ...state,
          selectedSpellClass: undefined,
        };
      }
      case ActionType.ShowPrintableView: {
        return {
          view: View.SpellPrintable,
          chosenSpellIds: state.chosenSpellIds,
        };
      }
      default: {
        return state;
      }
    }
  }

  return state;
};

/*------------------------------------------------------------------------*/
/* ------------------------------ Component ----------------------------- */
/*------------------------------------------------------------------------*/

const App: React.FC = () => {
  /*------------------------------------------------------------------------*/
  /* -------------------------------- Setup ------------------------------- */
  /*------------------------------------------------------------------------*/

  /* -------------- State ------------- */

  // Initial state
  const initialState: State = {
    view: View.SpellChooser,
    chosenSpellIds: [],
    selectedSpellClass: undefined,
  };

  // Initialize state
  const [state, dispatch] = useReducer(reducer, initialState);

  // Destructure common state
  const {
    view,
    chosenSpellIds,
  } = state;

  /*------------------------------------------------------------------------*/
  /* ------------------------------- Render ------------------------------- */
  /*------------------------------------------------------------------------*/

  /*----------------------------------------*/
  /* ---------------- Views --------------- */
  /*----------------------------------------*/

  // Body that will be filled with the current view
  let body: React.ReactNode;

  /* ---------- Spell Chooser --------- */

  if (view === View.SpellChooser) {
    // Destructure state
    const {
      selectedSpellClass,
    } = state;

    // Create body
    body = (
      <SpellChooser
        selectedClass={selectedSpellClass}
        chosenSpellIds={chosenSpellIds}
        onSetSpellSelection={(spellId, isSelected) => {
          dispatch({
            type: ActionType.UpdateSpellSelection,
            spellId,
            isSelected,
          });
        }}
        onSelectClass={(spellClass) => {
          dispatch({ type: ActionType.ChooseSpellClass, spellClass });
        }}
        onUnselectClass={() => {
          dispatch({ type: ActionType.UnchooseSpellClass });
        }}
        onShowPrintableView={() => {
          dispatch({ type: ActionType.ShowPrintableView });
        }}
      />
    );
  }

  /* ---------- Printable View --------- */

  if (view === View.SpellPrintable) {
    // Filter spells by chosen ids
    const visibleSpells = allSpells.filter((spell) => {
      return chosenSpellIds.includes(spell.id);
    });

    const spellCards = visibleSpells.map((spell) => {
      return (
        <SpellCard
          spell={spell}
        />
      );
    });

    // Break into checks of 4
    const pages: React.ReactNode[] = [];
    for (let i = 0; i < spellCards.length; i += 4) {
      const pageCards = spellCards.slice(i, i + 4);
      pages.push(
        <div
          style={{
            breakAfter: 'always',
          }}
          className="App-card-page"
        >
          {pageCards}
        </div>
      );
    }

    // Create body
    body = (
      <div className="App-printable-view">
        {pages}
      </div>
    );
  }

  /*----------------------------------------*/
  /* --------------- Main UI -------------- */
  /*----------------------------------------*/

  

  // Render
  return (
    <div className="App-container">
      {body}
    </div>
  );
};

/*------------------------------------------------------------------------*/
/* ------------------------------- Wrap Up ------------------------------ */
/*------------------------------------------------------------------------*/

// Export component
export default App;
