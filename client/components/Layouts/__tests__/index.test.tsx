import React from 'react';
import { render } from '@testing-library/react';
import { MainThemeProvider } from '../ThemeProvider';
import { LayoutManager, LayoutContext } from '../LayoutContext'

describe('MainThemeProvider', () => {
  describe('smoke tests', () => {
    test('should MainThemeProvider to match snapshot', () => {
      const component = render(<MainThemeProvider>teste</MainThemeProvider> );

      expect(component).toMatchSnapshot();
    })

    test('should LayoutManager to match snapshot', () => {
      const component = render(
        <LayoutManager>
          <LayoutContext.Consumer>
            {(props) => {
              console.log(props)
              return 'teste'
            }}
          </LayoutContext.Consumer>
        </LayoutManager>
      );

      expect(component).toMatchSnapshot();
    })

  });
})


