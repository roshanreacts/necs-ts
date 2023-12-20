import type { Preview } from "@storybook/react";

import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { Global, css, ThemeProvider } from '@emotion/react';

import { lightTheme, darkTheme } from '../src/utils/theme';

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: lightTheme,
      dark: darkTheme,
    },
    defaultTheme: 'light',
    Provider: ThemeProvider,
  })];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
