import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    color: {
      green: {
        '500': string;
      };
      grey: {
        '200': string;
        '300': string;
        '400': string;
        '500': string;
        '600': string;
        '700': string;
        '800': string;
        '900': string;
      };
    };
    fontFamily: {
      base: string;
    };
    fontSize: {
      sm: string;
      base: string;
      lg: string;
    };
    space: {
      xs: string;
      sm: string;
      base: string;
      lg: string;
      xl: string;
      '2xl': string;
    };
  }
}
