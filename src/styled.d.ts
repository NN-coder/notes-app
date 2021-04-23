import 'styled-components/macro';

declare module 'styled-components' {
  export interface DefaultTheme {
    bodyBgColor: string;
    textColor: string;
    borderColor: string;
    searchInput: {
      bg: string;
      shadow: string;
      controls: string;
    };
  }
}
