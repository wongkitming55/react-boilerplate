/*
 * MainScreen Messages
 *
 * This contains all the text for the MainScreen component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.MainScreen';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the MainScreen component!',
  },
});
