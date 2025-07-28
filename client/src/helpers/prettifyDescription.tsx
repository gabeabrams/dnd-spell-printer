// Import react
import React from 'react';

// Import FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

// Import word to icon map
import WORD_TO_ICON_MAP from '../constants/WORD_TO_ICON_MAP';

/*------------------------------------------------------------------------*/
/* ------------------------------ Constants ----------------------------- */
/*------------------------------------------------------------------------*/

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
  // Output as array of renderable nodes
  const output: React.ReactNode[] = [];

  // Keep track of wheter to add space after the next word
  // This is used to avoid adding space before punctuation
  let noSpaceAfterNext = false;

  // Process description
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
      const items = WORD_TO_ICON_MAP[word.toLowerCase()];
      if (items) {
        // Replace the word with the list of items (icons/text/renderable visuals)
        items.forEach((item, index) => {
          // Generate a unique key for this item
          const key = `${wordIndex}-${index}`;

          // Check if the item is an icon
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const isIcon = !!(item as any).iconName;

          // Handle each type of item separately
          if (typeof item === 'string') {
            // Only add space if not punctuation
            const noSpace = (item.match(punctuationRegex) || noSpaceAfterNext);

            // Render as a span with an optional space
            output.push(
              <span key={key}>
                {!noSpace && ' '}
                {item}
              </span>,
            );
          } else if (isIcon) {
            // Render as an icon with an optional space
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
            // React element, so just render it
            output.push(
              <span key={key}>
                {!noSpaceAfterNext && ' '}
                {item}
              </span>,
            );
          }
        });

        // Reset the noSpaceAfterNext flag
        noSpaceAfterNext = false;
      } else if (word.trim() === '') {
        // Ignore empty words
        noSpaceAfterNext = false;
      } else if (noSpaceAfterChars.includes(word)) {
        // If the word is in the noSpaceAfterChars list, add it without space
        output.push(
          <span key={wordIndex}>
            {butSpaceBeforeChars.includes(word) && ' '}
            {word}
          </span>,
        );
        noSpaceAfterNext = true;
      } else {
        // Not a word in the map

        // Don't add space before punctuation
        const noSpace = (word.match(punctuationRegex) || noSpaceAfterNext);

        // Just add the text
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
