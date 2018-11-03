/*
 * WelcomeScreen Messages
 *
 * This contains all the text for the WelcomeScreen component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.WelcomeScreen';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage:
      "Good morning, Mr. Chan! How's your flight? How may I help?",
  },
});
