import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      green: {
        primary: string;
        secondary: string;
        tertiary: string;
      };
      black: {
        primary: string;
        secondary: string;
      };
      yellow: {
        primary: string;
        secondary: string;
      };
    };
  }
}
