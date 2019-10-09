import { DefaultTheme, ThemeProvider, css } from 'styled-components';

export const theme: DefaultTheme = {
  meliColor: '#ffe600',
  bgColor: '#eeeeee',
  lv1Color: '#333333',
  lv2Color: '#666666',
  lv3Color: '#999999',
  shopColor: '#3483fa',
  paddingBase: '16px',
  paddingLarge: '32px',
  borderRadius: '3px',
  limits: css`
    max-width: 980px;
    width: 100%;
    margin: 0 auto;
  `
};

export const MainThemeProvider = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)
