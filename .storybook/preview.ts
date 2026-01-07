import type { Preview } from '@storybook/nextjs-vite'
import React from 'react'
import '../app/globals.css'
import './fonts.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      React.createElement('div', {
        style: {
          fontFamily: "var(--font-satoshi), 'Satoshi', 'Inter', 'Helvetica Neue', Arial, sans-serif"
        }
      }, React.createElement(Story))
    ),
  ],
};

export default preview;