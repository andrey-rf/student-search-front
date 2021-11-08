import {
  DefaultTheme as DefaultThemeType,
  ThemeProvider,
} from 'styled-components';

import { DefaultThemeProps } from './types';

const theme: DefaultThemeType = {
  colors: {
    green: {
      primary: '#00E88F',
      secondary: '#4AFFB1',
      tertiary: '#239E5D',
    },
    black: {
      primary: '#333',
      secondary: '#616161',
    },
    yellow: {
      primary: '#FEFF00',
      secondary: '#FAF060',
    },
    gray: {
      primary: '#DDDDDD',
    },
  },
};

const DefaultTheme = ({ children }: DefaultThemeProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default DefaultTheme;
