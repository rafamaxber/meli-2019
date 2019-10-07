import React from 'react';
import { render } from '@testing-library/react';

import SearchBar from './SearchBar';

describe('SearchBar', () => {
  describe('smoke tests', () => {
    test('should render component with SearchBar', () => {
      const component = render(<SearchBar/>);

      expect(component).toMatchSnapshot();
    })
  });
})


