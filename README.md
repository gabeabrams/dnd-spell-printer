# dnd-spell-printer

Browse and print stackable D&D spell cards with simplified shortened descriptions

## Quickstart

Simply start the server (assuming you have [Node.js](https://nodejs.org/) installed):

```bash
npm run start
```

# Managing Data

Visit the app in your browser by opening the URL provided in the terminal.

## How to Rescrape Spells

If you want to rescrape spells (perhaps a spell description was updated, for example), simply run:

```bash
npm run scrape
```
Then, the next time you start the app, it will use the updated spell data.

## How to Add Spells that Aren't in the List

Add a spell to the array in `/client/src/data/additionalSpells.ts`. Each spell must be of type `/client/src/types/Spell.ts`. You can use the existing spells as a template.

## How to Override Parts of Spells in the Scraped List

If you don't like part of the data in a scraped spell, add an entry to the `/client/src/data/spellOverrides.ts` file. The key should be the spellId, and the value should be an object with the properties you want to override. For example:

```ts
'protection-from-evil-and-good': {
  name: 'Protection from Evil & Good',
},
```

The override above changes only the name of the spell.

## How to Add a Short Spell Description

Short spell descriptions go into `/client/src/data/shortSpellDescriptions.ts` (map: spellId -> short spell description). Find the id by looking for it in either the `allSpells.ts` or `additionalSpells.ts` arrays in `/client/src/data/`.

Keep short spell descriptions very short, run the app to test out the short description and make sure it fits within the available space.

Utilize art/abbreviations listed in `/client/src/constants/WORD_TO_ICON_MAP.tsx`. For example, "Beast" becomes an icon of an animal.
