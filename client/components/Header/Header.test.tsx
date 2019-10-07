import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  describe('smoke tests', () => {
    test('should render component with Header', () => {
      const component = render(<Header/>);

      expect(component).toMatchSnapshot();
    })
  });
})


