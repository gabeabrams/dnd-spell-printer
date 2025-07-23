/**
 * Choose from list of spells
 * @author Gabe Abrams
 */

// Import React
import React, { useReducer } from 'react';

// Import dce-reactkit
import {
  abbreviate,
  alert,
  ButtonInputGroup,
  CheckboxButton,
  RadioButton,
  TabBox,
} from 'dce-reactkit';

// Import data
import allSpells from './data/allSpells';

// Import shared types
import Spell from './types/Spell';

// Import styles
import './SpellChooser.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint } from '@fortawesome/free-solid-svg-icons';

/*------------------------------------------------------------------------*/
/* -------------------------------- Types ------------------------------- */
/*------------------------------------------------------------------------*/

// Props definition
type Props = {
  // Selected class
  selectedClass?: string,
  /**
   * Handler for when user selects a class
   * @param classId The class id
   */
  onSelectClass: (classId: string) => void,
  /**
   * Handler for when user unselects class
   */
  onUnselectClass: () => void,
  // List of chosen spell ids
  chosenSpellIds: string[],
  /**
   * Set whether a spell is selected or not
   * @param spellId The spell id to toggle
   * @param isSelected Whether the spell is selected
   */
  onSetSpellSelection: (spellId: string, isSelected: boolean) => void,
  /**
   * Show printable view
   */
  onShowPrintableView: () => void,
};

/*------------------------------------------------------------------------*/
/* -------------------------------- State ------------------------------- */
/*------------------------------------------------------------------------*/

/* -------- State Definition -------- */

type State = {
  // Current search query
  searchQuery: string,
  // Selected levels
  selectedLevels: number[],
};

/* ------------- Actions ------------ */

// Types of actions
enum ActionType {
  // Update search query
  UpdateSearchQuery = 'UpdateSearchQuery',
  // Update selected levels
  UpdateSelectedLevels = 'UpdateSelectedLevels',
}

// Action definitions
type Action = (
  | {
    // Action type
    type: ActionType.UpdateSearchQuery,
    // New search query
    searchQuery: string,
  }
  | {
    // Action type
    type: ActionType.UpdateSelectedLevels,
    // New selected levels
    selectedLevels: number[],
  }
);

/**
 * Reducer that executes actions
 * @author Gabe Abrams
 * @param state current state
 * @param action action to execute
 */
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionType.UpdateSearchQuery: {
      return {
        ...state,
        searchQuery: action.searchQuery,
      };
    }
    case ActionType.UpdateSelectedLevels: {
      return {
        ...state,
        selectedLevels: action.selectedLevels,
      };
    }
    default: {
      return state;
    }
  }
};

/*------------------------------------------------------------------------*/
/* ------------------------------ Component ----------------------------- */
/*------------------------------------------------------------------------*/

const SpellChooser: React.FC<Props> = (props) => {
  /*------------------------------------------------------------------------*/
  /* -------------------------------- Setup ------------------------------- */
  /*------------------------------------------------------------------------*/

  /* -------------- Props ------------- */

  // Destructure all props
  const {
    selectedClass,
    chosenSpellIds,
    onSetSpellSelection,
    onSelectClass,
    onUnselectClass,
    onShowPrintableView,
  } = props;

  /* -------------- State ------------- */

  // Initial state
  const initialState: State = {
    searchQuery: '',
    selectedLevels: [],
  };

  // Initialize state
  const [state, dispatch] = useReducer(reducer, initialState);

  // Destructure common state
  const {
    searchQuery,
    selectedLevels,
  } = state;

  /*------------------------------------------------------------------------*/
  /* ------------------------------- Render ------------------------------- */
  /*------------------------------------------------------------------------*/

  /*----------------------------------------*/
  /* --------------- Main UI -------------- */
  /*----------------------------------------*/

  // Create list of classes
  const classes = new Set<string>();
  allSpells.forEach((spell) => {
    spell.classes.forEach((className) => {
      classes.add(className);
    });
  });
  const classList = Array.from(classes).sort();

  // Create list of levels
  const levels = new Set<number>();
  allSpells.forEach((spell) => {
    levels.add(spell.level);
  });
  const levelList = Array.from(levels).sort((a, b) => a - b);

  // Filter spells based on filters and search query
  const filteredSpells: Spell[] = allSpells.filter((spell) => {
    // Check if spell matches search query
    const matchesSearch = spell.name.toLowerCase().includes(searchQuery.toLowerCase().trim());
    // Check if spell matches selected class
    const matchesClass = !selectedClass || spell.classes.includes(selectedClass);
    // Check if spell matches selected levels
    const matchesLevel = selectedLevels.length === 0 || selectedLevels.includes(spell.level);

    return (matchesSearch && matchesClass && matchesLevel);
  });

  // Get list of selected spells
  const selectedSpells = allSpells.filter((spell) => {
    return chosenSpellIds.includes(spell.id);
  });

  // Render
  return (
    <div className="SpellChooser-outer-container">
      <div className="SpellChooser-inner-container">
        {/* Title */}
        <h2 className="text-center">
          Choose Spells
        </h2>

        <div className="mb-3">
          {/* Filters */}
          <ButtonInputGroup
            label="Class"
            minLabelWidth="4.8rem"
          >
            <RadioButton
              text="All"
              selected={!selectedClass}
              onSelected={onUnselectClass}
              ariaLabel="Reset class filter"
            />
            {classList.map((className, i) => {
              return (
                <RadioButton
                  key={className}
                  text={className}
                  selected={selectedClass === className}
                  onSelected={() => {
                    onSelectClass(className);
                  }}
                  ariaLabel={`Filter by ${className}`}
                  noMarginOnRight={i === classList.length - 1}
                />
              );
            })}
          </ButtonInputGroup>

          {/* Levels */}
          <ButtonInputGroup
            label="Levels"
            minLabelWidth="4.8rem"
            wrapButtonsAndAddGaps
          >
            <CheckboxButton
              text="All"
              checked={selectedLevels.length === 0 || selectedLevels.length === levelList.length}
              ariaLabel="Select all levels"
              onChanged={() => {
                // Select all levels
                dispatch({
                  type: ActionType.UpdateSelectedLevels,
                  selectedLevels: [],
                });
              }}
            />
            {levelList.map((level) => {
              return (
                <CheckboxButton
                  key={level}
                  text={level === 0 ? 'Cantrip' : `Level ${level}`}
                  checked={selectedLevels.includes(level)}
                  ariaLabel={`Filter by level ${level}`}
                  onChanged={() => {
                    const newLevels = selectedLevels.includes(level)
                      ? selectedLevels.filter((l) => l !== level)
                      : [...selectedLevels, level];
                    dispatch({
                      type: ActionType.UpdateSelectedLevels,
                      selectedLevels: newLevels,
                    });
                  }}
                />
              );
            })}
          </ButtonInputGroup>

          {/* Search */}
          <div className="d-flex flex-row">
            <div className="input-group mb-2">
              <div
                className="input-group-text"
                style={{
                  minWidth: '4.8rem',
                  minHeight: '3rem',
                }}
              >
                Search
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Search spells..."
                value={searchQuery}
                onChange={(e) => {
                  dispatch({
                    type: ActionType.UpdateSearchQuery,
                    searchQuery: e.target.value,
                  });
                }}
                aria-label="Search spells"
              />
            </div>
            <button
              type="button"
              className="btn btn-light bg-white border ms-1"
              style={{
                height: '2.9rem',
                width: '4rem',
              }}
              aria-label="Select all spells"
              onClick={() => {
                // Select all spells
                const allSpellIds = filteredSpells.map((spell) => spell.id);
                allSpellIds.forEach((spellId) => {
                  if (!chosenSpellIds.includes(spellId)) {
                    onSetSpellSelection(spellId, true);
                  }
                });
              }}
            >
              All
            </button>
            <button
              type="button"
              className="btn btn-light bg-white border ms-1"
              style={{
                height: '2.9rem',
                width: '4rem',
              }}
              aria-label="Deselect all spells"
              onClick={() => {
                // Deselect all spells
                allSpells.forEach((spell) => {
                  onSetSpellSelection(spell.id, false);
                });
              }}
            >
              None
            </button>
          </div>
        </div>

        {/* Spells */}
        <TabBox
          title="Available Spells"
        >
          <div className="SpellChooser-spells">
            {/* Filtered Spells */}
            <div
              style={{
                maxHeight: '27.5rem',
                overflowY: 'auto',
              }}
              className="d-flex flex-wrap gap-1"
            >
              {filteredSpells.map((spell) => {
                const isSelected = chosenSpellIds.includes(spell.id);
                return (
                  <CheckboxButton
                    text={`${abbreviate(spell.name, 30)} (${spell.level === 0 ? 'C' : spell.level})`}
                    key={spell.id}
                    ariaLabel={`Select spell ${spell.name}`}
                    checked={isSelected}
                    onChanged={() => {
                      onSetSpellSelection(spell.id, !isSelected);
                    }}
                    className="SpellChooser-spell-checkbox"
                  />
                );
              })}
            </div>
          </div>
        </TabBox>

        <TabBox
          title="Selected Spells Recap"
        >
          {selectedSpells.length === 0 && (
            <h5 className="text-center my-2">
              No spells selected.
            </h5>
          )}
          <div className="SpellChooser-spells">
            {/* Filtered Spells */}
            <div
              style={{
                maxHeight: '27.5rem',
                overflowY: 'auto',
              }}
              className="d-flex flex-wrap gap-1"
            >
              {selectedSpells.map((spell) => {
                return (
                  <CheckboxButton
                    text={`${abbreviate(spell.name, 25)} (${spell.level})`}
                    key={spell.id}
                    checked
                    onChanged={() => {
                      onSetSpellSelection(spell.id, false);
                    }}
                    className="SpellChooser-spell-checkbox"
                    ariaLabel={`Select spell ${spell.name}`}
                  />
                );
              })}
            </div>
          </div>
        </TabBox>

        <div className="text-center mt-3">
          <button
            className="btn btn-dark btn-lg"
            onClick={() => {
              if (selectedSpells.length === 0) {
                alert(
                  'Select Spells',
                  'Please select at least one spell before continuing.',
                );
                return;
              }
              onShowPrintableView();
            }}
          >
            <FontAwesomeIcon
              icon={faPrint}
              className="me-2"
            />
            Show Printable View
          </button>
        </div>
      </div>
    </div>
  );
};

/*------------------------------------------------------------------------*/
/* ------------------------------- Wrap Up ------------------------------ */
/*------------------------------------------------------------------------*/

// Export component
export default SpellChooser;
